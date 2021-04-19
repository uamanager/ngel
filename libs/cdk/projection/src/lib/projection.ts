export abstract class Projection<T> {
  projectionRef: T | null = null;

  abstract attach (context: any): any;

  abstract detach (): any;

  abstract hasAttached (): boolean;
}
