class Book {
    id: string;
    title: string;
    author: string;
    stock: number;
    status: string;
    constructor(id: string, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.stock = stock;
        this.author = author;
        this.status = status;
    }
}

class Lended_book {
    member_id: string;
    book_id: string;
    due_date: string;
    constructor(member_id: string, book_id: string, due_date: string) {
        this.member_id = member_id;
        this.book_id = book_id;
        this.due_date = due_date;
    }
}

class Member {
    id: string;
    _name: string
    contact: string;
    lended_books: Lended_book[];
    status: boolean;
    constructor(id: string, _name: string, contact: string, lended_books: Lended_book[], status: boolean) {
        this.id = id;
        this._name = _name;
        this.contact = contact;
        this.lended_books = [];
        this.status = status;
    }
}

class Library {
    books: Book[];
    members: Member[];
    constructor() {
        this.books = [];
        this.members = [];
    }
    add_book(book: Book) {
        this.books.push(book);
    }
    show_books() {
        this.books.forEach(book => {
            console.log(book);
        })
    }
    register_member(member: Member) {
        this.members.push(member);
    }
    block_member(id_search: string){
        if (this.members.length === 0) {
            console.log(`Không có thành viên nào trong danh sách thành viên cả`);
            return;
        }
        for (let member of this.members) {
            if (member.id === id_search) {
                member.status = !member.status;
                console.log(`Đã thay đổi trạng thái thành viên ${member.id} thành ${member.status ? "Active" : "Blocked"}.`);
                return;
            }
        }
        console.log(`Không tìm thấy id trong danh sách thành viên.`);
        return;
    }
    show_members() {
        this.members.forEach(member => {
            console.log(member);
        })
    }
}


let book1 = new Book("B001", "The Great Gatsby", "F. Scott Fitzgerald", 5, "available");
let book2 = new Book("B002", "1984", "George Orwell", 3, "available");
let book3 = new Book("B003", "To Kill a Mockingbird", "Harper Lee", 2, "available");

let member1 = new Member("M001", "Nguyễn Văn A", "a.nguyen@example.com", [], true);
let member2 = new Member("M002", "Trần Thị B", "b.tran@example.com", [], true);
let member3 = new Member("M003", "Lê Văn C", "c.le@example.com", [], false);
let member4 = new Member("M004", "Phạm Thị D", "d.pham@example.com", [], true);
let member5 = new Member("M005", "Hoàng Văn E", "e.hoang@example.com", [], true);

let myLibrary = new Library();

myLibrary.add_book(book1)
myLibrary.add_book(book2)
myLibrary.add_book(book3)
myLibrary.register_member(member1)
myLibrary.register_member(member2)
myLibrary.register_member(member3)
myLibrary.register_member(member4)
myLibrary.register_member(member5)
myLibrary.block_member("M003")


myLibrary.show_books();
myLibrary.show_members();