import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

	public reviews: Review[] = [
		new Review({ name: 'Patrick Zepart', avatar: 'zepart.png' }, "De kleding die ik heb besteld ging na 5 dagen al kapot en...", 2),
		new Review({ name: 'Emma Watson', avatar: 'emma.jpg' }, "Snelle levering en de kleding staat prachtig, maar de kleding is helaas wel...", 4),
		new Review({ name: 'Johan Cruijff', avatar: 'johan.jpg' }, "Jammer dat de kleding van linnen is gemaakt...", 2),
		new Review({ name: 'Mark van Hoving', avatar: 'mark.jpg' }, "Leuke kleding en heel snel bezorgd!", 4),
		new Review({ name: 'Emma Vriesch', avatar: 'emma.png' }, "De kleding is zeer waardeloos en lelijk afgemaakt...", 1),
		new Review({ name: 'Richard Eikenhout', avatar: 'richard.jpg' }, "Wat een tof website, ik heb erg mooie kleding eraan overgehouden...", 5),
		new Review({ name: 'Ilse Groenenveld', avatar: 'ilse.jpg' }, "Kleding is zeer goedkoop, maar de bezorging was wel snel!", 2),
	];

	constructor() { }

	ngOnInit(): void {
	}

}

interface Reviewer {
	name: string;
	avatar: string;
}

class Review {
	constructor(
		public reviewer: Reviewer,
		public text: string,
		public rating: number,
	) { }

	public getReviewerAvatar(): string {
		return `../../assets/images/${this.reviewer.avatar}`;
	}

	public getRatingStars() {
		const rating = [];
		for (let i = 0; i < this.rating; i++) {
			rating.push({ filled: true });
		}
		for (let i = 0; i < 5 - this.rating; i++) {
			rating.push({ filled: false });
		}

		return rating;
	}
}
