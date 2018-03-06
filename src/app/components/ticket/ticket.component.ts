import { Component, Input } from '@angular/core';
import { Ticket } from '../../beans/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  statusFilter = 0;

  @Input()
  ticket: Ticket;

  constructor() { }

}
