export class Login {
    id:string;
    name: string;
    avatar:string;
    email:string;
    status:boolean;
}
export class Group{
    page:number;
    per_page:number;
}
export class Item{
    title:string
}
export class CreateGroup{
 item = Item;
}
export class GroupDisable{
    id:string;
}