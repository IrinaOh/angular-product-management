import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List!';
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg/"
        },
        {
            "productId": 3,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg/"
        }
    ];
}