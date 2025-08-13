class Book{
    id:number;
    title:string;
    author:string;
    year:number;
    constructor(id:number,title:string,author:string,year:number) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.year = year;
    }
}
class Lybrary<T extends Book>{
    books:T[] = [];
    addBook(book:T):void{
        this.books.push(book);
    }
    getBook(id:number): T | undefined{
        return this.books.find(book=>book.id === id)
    }
    removeBook(id:number):void{
        this.books = this.books.filter(book=>book.id !== id);
    }
    updateBook(id:number,updatedBook:T):void{
        for (const index in this.books) {
            if(this.books[index]?.id === id){
                this.books[index] = updatedBook;
            }
        }
    }
    listBooks(): T[]{
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm: string): T[]{
        return this.books.filter(book=>book.title.includes(searchTerm) || book.author.includes(searchTerm))
    }
    getTotalBooks(): number{
        return this.books.length;
    }
    findBooksByYear(year: number): T[]{
        return this.books.filter(book=>book.year === year)
    }

}

let library = new Lybrary<Book>();

// Thêm sách
library.addBook(new Book(1, "Clean Code", "Robert C. Martin", 2008));
library.addBook(new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 1999));
library.addBook(new Book(3, "Refactoring", "Martin Fowler", 1999));

console.log("📚 Danh sách sách ban đầu:");
console.log(library.listBooks());

// Lấy sách theo ID
console.log("\n🔍 Lấy sách ID = 1:");
console.log(library.getBook(1));

// Tìm sách theo tiêu đề hoặc tác giả
console.log("\n🔍 Tìm 'Martin':");
console.log(library.findBooksByTitleOrAuthor("Martin"));

// Tìm sách theo năm xuất bản
console.log("\n📅 Sách xuất bản năm 1999:");
console.log(library.findBooksByYear(1999));

// Cập nhật sách
library.updateBook(1, new Book(1, "Clean Code (Updated)", "Robert C. Martin", 2008));
console.log("\n✏️ Sau khi cập nhật sách ID=1:");
console.log(library.listBooks());

// Xoá sách
library.removeBook(2);
console.log("\n🗑️ Sau khi xoá sách ID=2:");
console.log(library.listBooks());

// Tổng số sách
console.log("\n📊 Tổng số sách:");
console.log(library.getTotalBooks());