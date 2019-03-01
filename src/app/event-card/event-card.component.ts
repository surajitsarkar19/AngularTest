import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
   dataObject=[
    {"desc":"1One", "name":"1"},
    {"desc":"2two", "name":"2"},
    {"desc":"3three", "name":"3"},
    {"desc":"4four", "name":"4"}
  ]
  constructor() { 
    
  }

  ngOnInit() {
    
  }

    
}
