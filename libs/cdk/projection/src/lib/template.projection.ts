import { EmbeddedViewRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { Projection } from './projection';

export interface ITemplateProjectionContext<C> {
  $implicit: C;
}

export class TemplateProjection<C extends any>
  extends Projection<EmbeddedViewRef<ITemplateProjectionContext<C>>> {

  constructor (
    public $_templateRef: TemplateRef<ITemplateProjectionContext<C>>,
    public $_viewContainerRef: ViewContainerRef,
  ) {
    super();
  }

  attach (context: C): EmbeddedViewRef<ITemplateProjectionContext<C>> {
    this.detach();

    this.projectionRef = this.$_viewContainerRef.createEmbeddedView<ITemplateProjectionContext<C>>(
      this.$_templateRef,
      { $implicit: context },
    );

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
