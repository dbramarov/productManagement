import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductService } from '../product.service';
import { Subscription } from "rxjs/Subscription";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnDestroy {
	subscription: Subscription;

	constructor(private _productService: ProductService, private _router: Router) {
	  	this.subscription = this._productService.observedItems.subscribe(
			items => this.subscriptionItems = items,
			(err) => { },
			() => { }
	  	);
	}
	subscriptionItems = [];

    ngOnDestroy() {
    	this.subscription.unsubscribe();
    };

    edit(index){
    	this._router.navigate(['/productEdit', index]);
    }

    delete(index){
    	this.subscriptionItems.splice(index, 1);
    }

}
