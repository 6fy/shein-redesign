import { Component, OnInit } from '@angular/core';

import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.scss']
})
export class QnaComponent implements OnInit {

	public activeChat: ChatType = { type: "", priority: 0 };

	public chatTypes: ChatType[] = [
		{ type: "Verzendkosten", priority: 2 },
		{ type: "Levertijden", priority: 2 },
		{ type: "Inloggen", priority: 2 },
		{ type: "Alle", priority: 1 },
		{ type: "Betalen", priority: 2 },
		{ type: "Klachten", priority: 2 },
	];

	public customerServiceEmployees: CustomerService[] = [
		new CustomerService("Erika van Straattena", 3, "customer1.png", [
			this.getChatType("Inloggen"),
			this.getChatType("Verzendkosten"),
		]),
		new CustomerService("Barberra Derksen", 5, "customer2.png", [
			this.getChatType("Klachten"),
		]),
		new CustomerService("John Leeuwenbrug", 1, "customer3.png", [
			this.getChatType("Inloggen"),
			this.getChatType("Levertijden"),
			this.getChatType("Betalen"),
		]),
		new CustomerService("Diederick Janssen", 4, "customer4.png", [
			this.getChatType("Inloggen"),
		]),
		new CustomerService("Marieke de Vries", 3, "customer5.png", [
			this.getChatType("Inloggen"),
			this.getChatType("Levertijden"),
			this.getChatType("Verzendkosten"),
		]),
		new CustomerService("Monique Weghorst", 2, "customer6.png", [
			this.getChatType("Inloggen"),
			this.getChatType("Betalen"),
			this.getChatType("Levertijden"),
			this.getChatType("Klachten"),
		]),
	];

	public shownCustomerServiceEmployees: CustomerService[] = [];

	constructor(
		public chatService: ChatService
	) { }

	ngOnInit(): void {
		this.chatTypes.sort((a, b) => (a.priority > b.priority) ? 1 : -1);
		this.setActiveChat(this.chatTypes[0]);
  	}

	private getChatType(type: string): ChatType {
		return this.chatTypes.filter(chat => chat.type === type)[0];
	}

	public isActive(chat: ChatType): boolean {
		return this.activeChat.type === chat.type;
	}

	public setActiveChat(chat: ChatType): void {
		this.activeChat = chat;
		if (chat.type === "Alle") {
			this.shownCustomerServiceEmployees = this.customerServiceEmployees;
		} else {
			this.shownCustomerServiceEmployees = this.customerServiceEmployees.filter(employee => {
				return employee.getChatTypes().filter(chatType => chatType.type === chat.type).length > 0;
			});
		}
	}

	public openChat(employee: CustomerService): void {
		this.chatService.clearChat();
		this.chatService.addMessage(`Hoi, ik ben Brainless de chatbot. Kan ik iets voor je doen tot ${employee.getName()} beschikbaar is?`, this.chatService.chatbot);
	}

}

class CustomerService {
	private name: string;
	private queue: number;
	private picture: string;
	private chats: ChatType[];

	public constructor(
		name: string,
		queue: number,
		picture: string,
		chats: ChatType[]
	) { 
		this.picture = picture;
		this.queue = queue;
		this.name = name;
		this.chats = chats;
	}

	public getName(): string {
		return this.name;
	}

	public getQueue(): number {
		return this.queue;
	}

	public getPicture(): string {
		return `../../assets/images/customerservice/${this.picture}`;
	}

	public getChatTypes(): ChatType[] {
		return this.chats;
	}
}

interface ChatType {
	type: string;
	priority: number;
}