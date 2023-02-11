import { Component, OnInit, ElementRef  } from '@angular/core';

@Component({
	selector: 'ng-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

	public title: string;
	public description: string;
	public classes: string;

	constructor(private elementRef: ElementRef) { 
		this.title = this.elementRef.nativeElement.getAttribute('title');
		this.description = this.elementRef.nativeElement.getAttribute('description');

		const classesAttr = this.elementRef.nativeElement.getAttribute('classes');
		this.classes = classesAttr ? classesAttr : ''; 
	}

	ngOnInit(): void {
	}

}
