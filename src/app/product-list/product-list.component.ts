import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductService } from '../product.service';
import { Subscription } from "rxjs/Subscription";
import { Router } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnDestroy {
    subscription: Subscription;
    subscriptionItems = [];

    constructor(private _productService: ProductService, private _router: Router, private sanitizer: DomSanitizer) {
        this.subscription = this._productService.observedItems.subscribe(
            items => this.subscriptionItems = items,
            (err) => { },
            () => { }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    };
    edit(index) {
        this._router.navigate(['/productEdit', index]);
    }
    delete(index) {
        this.subscriptionItems.splice(index, 1);
    }

    sanitize(location) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.google.com/maps/embed/v1/place?key=AIzaSyAjV1uOI2KteAEQOn7CDo6GeJ9qcWo8CGM&q='
             + location);
    }
}

