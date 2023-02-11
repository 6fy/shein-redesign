import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-category-shop',
	templateUrl: './category-shop.component.html',
	styleUrls: ['./category-shop.component.scss']
})
export class CategoryShopComponent implements OnInit {

	public categories: Category[] = [
		new Category("Zomer kleding", "category1.png", "Vind al je mooie zomer kleding voor een kleine prijs"),
		new Category("Schoenen", "category2.png", "We hebben maten vanaf 36 tot en met 48"),
		new Category("Tassen", "category3.png", "Vind tassen van schoudertassen tot rugzakken"),
	];

	constructor() { }

	ngOnInit(): void {
	}

}

class Category {
	private name: string;
	private image: string;
	private description: string;

	public constructor(
		name: string,
		image: string,
		description: string,
	) {
		this.name = name;
		this.image = image;
		this.description = description;
	}

	public getName(): string {
		return this.name;
	}

	public getDesc(): string {
		return this.description;
	}

	public getImagePath(): string {
		return `../../assets/images/${this.image}`;
	}
}