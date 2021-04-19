import {
  Component,
  ComponentFactory,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';
import { Projection } from './projection';

export class ComponentProjection<T extends Component>
  extends Projection<ComponentRef<T>> {

  constructor (
    public $_component: ComponentFactory<T>,
    public $_viewContainerRef: ViewContainerRef,
  ) {
    super();
  }

  attach (context: { [key: string]: any } = {}): ComponentRef<T> {
    this.detach();
    this.projectionRef = this.$_viewContainerRef.createComponent(this.$_component);

    Object.assign(this.projectionRef.instance, context);

    return this.projectionRef;
  }

  detach (): any {
    if (this.hasAttached()) {
      this.projectionRef = null;
      this.$_viewContainerRef.clear();
    }
  }

  hasAttached (): boolean {
    return !!this.$_viewContainerRef.length;
  }
}
