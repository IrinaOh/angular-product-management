import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://clipart-library.com/images/8ixrxEXAT.jpg"
        },
        {
            "productId": 3,
            "productName": "Garden Scissors",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden",
            "price": 2.99,
            "starRating": 4.2,
            "imageUrl": "http://clipart-library.com/img1/371666.png"
        },
        {
            "productId": 4,
            "productName": "Garden Shovel",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden",
            "price": 5.95,
            "starRating": 4.2,
            "imageUrl": "http://clipart-library.com/img1/1445505.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In OnInit');
    }
}