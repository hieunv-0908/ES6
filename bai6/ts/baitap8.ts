class Book{
    id:string;
    title:string;
    author:string;
    stock:number;
    status:string;
    constructor(id:string,title:string,author:string,stock:number,status:string){
        this.id = id;
        this.title = title;
        this.stock = stock;
        this.author = author;
        this.status = status;
    }
}

class Lended_book{
    member_id:string;
    book_id:string;
    due_date:string;
    constructor(member_id:string,book_id:string,due_date:string) {
        this.member_id = member_id;
        this.book_id = book_id;
        this.due_date = due_date;
    }
}

class Member{
    id:string;
    _name:string
    contact:string;
    lended_books:Lended_book[];
    status:boolean;
    constructor(id:string,_name:string,contact:string,lended_books:Lended_book[],status:boolean){
        this.id = id;
        this._name = _name;
        this.contact = contact;
        this.lended_books = [];
        this.status = status;
    }
}

class Library{
    books:Book[];
    members:Member[];
    constructor() {
        this.books = [];
        this.members = []; 
    }
    add_book(book:Book){
        this.books.push(book);
    }
    show_books(){
        this.books.forEach(book=>{
            console.log(book);
        })
    }
}


let book1 = new Book("B001", "The Great Gatsby", "F. Scott Fitzgerald", 5, "available");
let book2 = new Book("B002", "1984", "George Orwell", 3, "available");
let book3 = new Book("B003", "To Kill a Mockingbird", "Harper Lee", 2, "available");

let myLibrary = new Library();

myLibrary.add_book(book1)
myLibrary.add_book(book2)
myLibrary.add_book(book3)
myLibrary.show_books();
