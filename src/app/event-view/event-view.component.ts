import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import {EventsService} from '../services/events.service';
@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {

  events: Event[];
  errMessage: string;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents(): void {
    // this.events  =[{'id': 0, 'eventName': 'Blood Donation camp', 'eventDesc': 'sdasd', 'eventTime': '12:00', 'eventLoc': 'Kolkata', 'eventState': ''},
    // {'id': 1, 'eventName': 'Dance Event', 'eventDesc': 'gvsdv', 'eventTime': '12:00', 'eventLoc': 'Mumbai', 'eventState': ''},
    // {'id': 2, 'eventName': 'Trophy', 'eventDesc': ' bvdvsdfv', 'eventTime': '12:00', 'eventLoc': 'Delhi', 'eventState': ''},
    // {'id': 3, 'eventName': 'Family day', 'eventDesc': 'errgvewr', 'eventTime': '12:00', 'eventLoc': 'Pune', 'eventState': ''}
    // ];
    this.eventsService.getEvents()
        .subscribe(
            events => {
                this.events = events;
            },
                        err => {
                    this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
                });
   }
}
