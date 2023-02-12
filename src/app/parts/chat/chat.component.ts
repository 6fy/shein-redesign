import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	constructor(
		public chatService: ChatService
	) { }

	ngOnInit(): void {
	}

	public sendMessage(message: any): void {
		if (!message.value) {
			return;
		}

		this.chatService.addMessage(message.value, null);
		this.ai(message.value);
		message.value = '';
		
		this.scrollToBottom();
	}

	public async ai(message: string): Promise<void> {
		const typing = document.getElementById("typing");
		typing?.classList.remove("hidden");

		try {
			const url = `https://api.esmee.cloud/ai/?q=${message}`;

			const response = await this.get(url);
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const data = await response.json();
			if (!data) {
				throw new Error('No data');
			}

			this.chatService.addMessage(data.response, this.chatService.chatbot);
		} catch (error) {
			this.chatService.addMessage("An unexpected issue occurred! Try to rephrase your message.", this.chatService.chatbot);
			console.warn(error);
		} finally {
			typing?.classList.add("hidden");
			this.scrollToBottom();
		}
	}

	private async get(url: string) {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'key': 'b50affbb2975b03f',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'version': '1.0.1',
			},
		});
		return response;
	}

	private scrollToBottom(): void {
		const chat = document.getElementById("chat-overflow");
		if (!chat) return;

		setTimeout(() => {
			chat.scrollTo(0, chat.scrollHeight);
		}, 1);
	}

}
