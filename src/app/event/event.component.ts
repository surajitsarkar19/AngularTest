import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  @Input() event: Event;
  // constructor(private router: RouterService) {}
redirect(id: number) {
   //this.router.routeToEditNoteView(id);
}
}
