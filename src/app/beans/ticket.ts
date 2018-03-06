export class Ticket {

    id: number;
	amount: number;
	submitted: Date;
	resolved: Date;
	description: String;
	author: number;
	resolver: number;
	statusID: number;
	typeID: number;

    constructor(id: number = 0, amount: number = 0, submitted: Date, resolved: Date, 
    description: String = '', author: number = 0, resolver: number = 0, statusID: number = 0, typeID: number = 0) {

    }
}