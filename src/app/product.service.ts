import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class ProductService {
observedItems = new BehaviorSubject([
    {title: 'Lamborghini',
    price: '250000',
    image: 'https://www.lamborghini.com/en-en/sites/en-en/files/DAM/it/models_gateway/blocks/huracan.png',
    location: 'Washinton DC',
    description: 'Slightly used electric blue lamborgini for sale. 30k miles, great condition.'},
    {title: 'Ferrari',
    price: '500000',
    image: 'http://www.pngmart.com/files/4/Ferrari-Sergio-PNG-Pic.png',
    location: 'New York City',
    description: 'Brand new Ferrari concept car, retro look. 0 Miles. Perfect Condition!'},
    {title: 'Bugatti',
    price: '1500000',
    image: 'http://www.mansory.com/files/media/mansory/sliders/bugatti-vivere.png',
    location: 'Miami Florida',
    description: 'One of the fastest street legal cars in the world. 100k miles. Brand new tires!'},
]);

updateItems(items: Array<any>) {
    this.observedItems.next(items);
}

}
