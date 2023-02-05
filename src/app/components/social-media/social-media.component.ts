import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
	public socialMedia: Array<SocialMedia> = [
		{ company: 'Tiktok', description: 'Op onze Tiktok pagina staan leuke advertenties en de nieuwste ontwerpen.' },
		{ company: 'Instagram', description: 'Op onze Instagram pagina staan leuke advertenties en de nieuwste ontwerpen.' },
		{ company: 'Facebook', description: 'Op onze Facebook pagina staan leuke advertenties en de nieuwste ontwerpen.' },
	];

	public activeSocialMedia: SocialMedia = this.socialMedia[0];

	constructor() { }

	ngOnInit(): void {
	}

	public selectSocialMedia(company: string): void {
		const media = this.socialMedia.find(media => media.company == company);
		if (!media) return console.error(`Social media "${company}" not found!`);

		this.activeSocialMedia = media;
	}
}

interface SocialMedia {
	company: string;
	description: string;
}