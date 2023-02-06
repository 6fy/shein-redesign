import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
	public socialMedia: Array<SocialMedia> = [
		{ company: 'Tiktok', description: 'Op onze Tiktok pagina staan leuke advertenties en de nieuwste ontwerpen.' },
		{ company: 'Instagram', description: 'De enige echte Shein Instagram heeft nu ook de nieuwste aanbiedingen en de mooiste kleding stukken!' },
		{ company: 'Facebook', description: 'Op onze Facebook kan je zien waar onze website voor staat.' },
	];

	public videos: Array<Media> = [
		// Multiple companies
		new Media('tiktok3.mp4', '@monimarin_\'s GRWM shows you how simple it is to unlock chic style ✨', ['Instagram', 'Tiktok']),
		new Media('tiktok1.mp4', 'Baddie Haul Alert 🚨 Which look was your vibe? 👇', ['Tiktok', 'Instagram']),
		new Media('tiktok_image_4.png', 'Happiness is all about living in the meow-ment 😻✨ IG: fortuneisacat', ['Facebook', 'Instagram']),
		
		// Tiktok
		new Media('tiktok_image.png', 'Spark romance with this sparkling nails inspo 💅✨', ['Tiktok']),
		new Media('tiktok4.mp4', 'Mommy & me date night edition ❤️❤️', ['Tiktok']),
	
		// Instagram
		new Media('tiktok_image_1.png', 'Basic, but never boring 🖤🤍🤎', ['Instagram']),

		// Facebook
		new Media('tiktok_image_5.png', 'Black in action 🖤😎', ['Facebook']),
		new Media('tiktok_image_6.png', 'Mirror, mirror on the wall, which is the cutest of them all? ✨', ['Facebook']),
		new Media('tiktok_image_7.png', 'Keep the smile on! 🥰', ['Facebook']),
	];

	public activeVideos: Array<Media> = [];
	public activeSocialMedia: SocialMedia = this.socialMedia[0];

	constructor() { }

	ngOnInit(): void {
		this.setVideos(this.activeSocialMedia.company);
	}

	// max out at 4 videos
	private setVideos(company: string): void {
		this.activeVideos = [];
		this.activeVideos = this.videos.filter(( video ) => ( video.Companies.includes(company) && this.activeVideos.length < 4 ));
	}

	public selectSocialMedia(company: string): void {
		const media = this.socialMedia.find(media => media.company == company);
		if (!media) return console.error(`Social media "${company}" not found!`);

		this.activeSocialMedia = media;
		this.setVideos(company);
	}
}

class Media {
	private path: string = '../../assets';
	private type: string;

	private companies: Array<string>;

	private name: string;
	private caption: string;

	constructor(name: string, caption: string, companies: Array<string>) {
		this.name = name;
		this.caption = caption;
		this.companies = companies;

		this.type = name.includes('mp4') ? 'video/mp4' : 'image';
		this.path = `${this.path}/${this.type.includes('video') ? 'videos' : 'images'}`;
	}

	public get Companies(): Array<string> { return this.companies; }

	public get isVideo(): boolean { return this.type.includes('video'); }

	public get Type(): string { return this.type; }

	public get Name(): string { return this.name; }

	public get FullUrl(): string { return `${this.path}/${this.name}`; }

	public get Caption(): string { return this.caption; }
}

interface SocialMedia {
	company: string;
	description: string;
}