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
		this.chatService.addMessage(message.value, null);
		message.value = '';
	}

}
