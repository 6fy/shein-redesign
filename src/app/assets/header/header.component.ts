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
			active: true,
		}
	];

	constructor() { }

	ngOnInit(): void {
	} 

}

interface MenuItem {
	title: string;
	active: boolean;
}