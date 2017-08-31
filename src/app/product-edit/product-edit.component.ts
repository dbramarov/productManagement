import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnDestroy, OnInit{
    subscription: Subscription;
    currentItem: Array<any> = [];
    id: number;
    subscriptionItems = [];

    constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router: Router) {
        this.subscription = this._productService.observedItems.subscribe(
            items => this.subscriptionItems = items,
            (err) => { },
            () => { }
        );
        this._route.params.subscribe((param) => {
            this.id = param.id;
        });
    };

	onSubmit(event) {
		event.preventDefault();
		this.subscriptionItems[this.id] = this.currentItem;
		this._productService.updateItems(this.subscriptionItems);
		this._router.navigate(['/productList']);
	};

	back() {
		this._router.navigate(['/productList']);
	}

  	ngOnDestroy() {
  		this.subscription.unsubscribe();
  	};

  	ngOnInit() {
  		this.currentItem = this.subscriptionItems[this.id];
  	}
}
