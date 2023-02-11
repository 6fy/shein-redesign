import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class ChatService {

	public chat: Chat = {} as Chat;

	public chatbot: User = {
		name: 'Brainless',
		avatar: 'brainless.svg',
		bot: true
	};

  	constructor() {
		const messages = localStorage.getItem('messages');

		this.chat = {
			active: false,
			receiver: this.chatbot,
			messages: messages ? JSON.parse(messages)['messages'] : []
		};
	}

	public toggleChat() {
		if (this.chat.messages.length == 0) {
			this.addMessage("Hoi, ik ben Brainless de chatbot. Wat kan ik voor je doen?", this.chatbot);
		}
		this.activeChat(!this.chat.active);
	}

	public activeChat(activation: boolean) {
		this.chat.active = activation;
	}

	public addMessage(
		text: string,
		user: User | null,
	): void {
		const message: Message = {
			text: text,
			date: new Date(),
			sender: user
		}
		this.storeMessage(message);
		this.chat.messages.push(message);
	}

	private storeMessage(message: Message): void {
		let messages = localStorage.getItem('messages');
		if (!messages) {
			messages = '{"messages": []}';
		}

		let messagesObject = JSON.parse(messages);
		messagesObject['messages'].push(message);

		localStorage.setItem('messages', JSON.stringify(messagesObject));
	}

	public clearChat(): void {
		this.chat.messages = [];
		localStorage.removeItem('messages');
	}
}

interface Chat {
	active: boolean;
	receiver: User;
	messages: Array<Message>;
}

interface User {
	name: string;
	avatar: string;
	bot: boolean;
}

interface Message {
	text: string;
	date: Date;
	sender: User | null;
}