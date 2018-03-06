import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from './beans/ticket';

@Pipe({
  name: 'statusFilter'
})

export class FilterPipe implements PipeTransform {

  transform(tickets: Array<Ticket>, status: number): Array<Ticket> {
    if(status === 0) {
      return tickets;
    } else {
      return tickets.filter(ticket => ticket.statusID === status);
    }
  }
}
