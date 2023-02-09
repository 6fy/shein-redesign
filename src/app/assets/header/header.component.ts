import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	private visible: boolean = false;

	public items: Array<MenuItem> = [
		{ title: 'Home', url: '/', active: true, },
		{ title: 'Dames', url: '/', active: false, },
		{ title: 'Heren', url: '/', active: false, },
		{ title: 'Kinderen', url: '/', active: false, },
		{ title: 'Overige', url: '/', active: false, },
	];

	constructor() { }

	ngOnInit(): void {
		this.applyVisibility();
	} 

	public toggleHamburgerMenu() {
		this.visible = !this.visible;
		this.applyVisibility();
	}

	private applyVisibility() {
		const hamburgerMenu = document.getElementById('hamburgerItems');
		if (!hamburgerMenu) return console.error('Hamburger menu not found');

		hamburgerMenu.style.display = this.visible ? 'block' : 'none';
	}

}

interface MenuItem {
	title: string;
	url: string;
	active: boolean;
}