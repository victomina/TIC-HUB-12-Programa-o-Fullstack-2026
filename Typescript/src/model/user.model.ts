export type Role = "admin"  | "customer";

export class User {
    constructor (id:number | string, public userName: string, public email: string, public password: string, public role: Role) {
    }   
}