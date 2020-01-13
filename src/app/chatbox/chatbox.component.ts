import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  public today = Date.now();
  constructor() {
    setInterval(() => {this.today = Date.now()}, 1);
   }

  ngOnInit() {
  }

}
