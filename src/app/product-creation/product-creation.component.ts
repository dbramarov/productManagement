import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnDestroy {
subscription: Subscription;

subProducts = [];
item = {title: '', price: '', image: '', location: '', description: ''};
temp = []

constructor(private _productService: ProductService, private _router: Router) {
  this.subscription = this._productService.observedItems.subscribe(
  (products)  => this.subProducts = products,
  (err) => { },
  () => { }
  );
};

onSubmit(event) {
    event.preventDefault();
    if (!this.subProducts) {
    this.temp.push(this.item);
    this._productService.updateItems(this.temp);
    } else {
        this.subProducts.push(this.item);
        this._productService.updateItems(this.subProducts);
    }
    this._router.navigate(['/productList']);
};

ngOnDestroy() {
    this.subscription.unsubscribe();
};

}
