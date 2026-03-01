import {Directive, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive()
export class Unsubscriber implements OnDestroy {
  private Subscriptions: Subscription;

  constructor() {
    this.Subscriptions = new Subscription();
  }

  public addSubscription(subscription: Subscription): void {
    this.Subscriptions.add(subscription);
  }
  public unsubscribeAll(): void {
    this.Subscriptions.unsubscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
}
