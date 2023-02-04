import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public items: Array<MenuItem> = [
		{
			title: 'Home',
			url: '/',
			active: true,
		},
		{
			title: 'Dames',
			url: '/',
			active: false,
		},
		
		{
			title: 'Heren',
			url: '/',
			active: false,
		},
		
		{
			title: 'Kinderen',
			url: '/',
			active: false,
		},
		
		{
			title: 'Overige',
			url: '/',
			active: false,
		},
	];

	constructor() { }

	ngOnInit(): void {
	} 

}

interface MenuItem {
	title: string;
	url: string;
	active: boolean;
}