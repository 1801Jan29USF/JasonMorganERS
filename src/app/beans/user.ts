export class User {

    id: number;
	username: String;
	password: String;
	firstName: String;
	lastName: String;
	userEmail: String;
	userRoleId: number;

	constructor(id: number = 0, username: String = '', password: String = '', firstName: String = '', 
	lastName: String = '', userEmail: String = '', userRoleId: number = 0) {
    }
}