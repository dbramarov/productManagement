import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class ProductService {
observedItems = new BehaviorSubject(null);

updateItems(items: Array<any>) {
    this.observedItems.next(items);
}

}
