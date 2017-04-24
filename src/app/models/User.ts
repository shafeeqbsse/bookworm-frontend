export class User {

    constructor(id: number, username: string, admin: boolean) {
        this.id = id;
        this.username = username;
        this.admin = admin;
    }

    id: number;
    username: string;
    admin:boolean;
}
