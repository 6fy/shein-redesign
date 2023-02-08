import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
  	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	private readonly _request: boolean = false; // Set to true to enable accurate location detection
	private readonly _defaultCountry: string = 'Netherlands';

	public readonly _year = new Date().getFullYear();

	public country: string = '';

  	constructor() { }

	async ngOnInit(): Promise<void> {
		this.country = await this.getVisitorCountry();
	}

	private async getVisitorCountry() {
		if (!this._request) {
			return this._defaultCountry;
		}

		try {
			const response = await fetch("https://ipinfo.io/json", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				}
			});
			
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const data = await response.json();
			if (!data) {
				throw new Error('No data');
			}

			return data.city;
		} catch (err) {
			console.error('An error occurred: ', err);
			return this._defaultCountry;
		}
	}

}
