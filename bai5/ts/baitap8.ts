class Book {
    private id: string;
    public title: string;
    public author: string;

    constructor(id: string, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): string {
        return this.id;
    }

    public updateInfo(newTitle: string, newAuthor: string): void {
        this.title = newTitle;
        this.author = newAuthor;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public updateBookById(id: string, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có id: ${id}`);
        } else {
            console.log(`Không tìm thấy sách có id: ${id}`);
        }
    }

    public searchBooksByTitle(keyword: string): void {
        const foundBooks = this.books.filter(b =>
            b.title.toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            foundBooks.forEach(b => {
                console.log(`- ID: ${b.getId()}, Title: ${b.title}, Author: ${b.author}`);
            });
        } else {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}".`);
        }
    }

    public printBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(`- ID: ${b.getId()}, Title: ${b.title}, Author: ${b.author}`);
        });
    }
}

const library = new Library();

library.addBook(new Book("B01", "Lập trình JS", "Nguyễn Văn A"));
library.addBook(new Book("B02", "Học TypeScript", "Trần Thị B"));
library.addBook(new Book("B03", "TypeScript Nâng Cao", "Lê Văn C"));

library.printBooks();

console.log("\n-- Tìm sách có chữ 'TypeScript' --");
library.searchBooksByTitle("TypeScript");

console.log("\n-- Tìm sách có chữ 'Python' --");
library.searchBooksByTitle("Python");
