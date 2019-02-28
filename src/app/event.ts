export class Event{
    id: number;
    eventName : string;
    eventDesc : string;
    eventTime : string;
    eventLoc : string;
    eventState : string;
    constructor() {
      this.eventName = '';
      this.eventDesc = '';
      this.eventTime = '';
      this.eventLoc = '';
      this.eventState = '';
    }
}