class Book {
    private id: string;
    public title: string;
    public author: string;
    public year: number;

    constructor(id: string, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getId(): string {
        return this.id;
    }

    public updateInfo(newTitle: string, newAuthor: string, newYear: number): void {
        this.title = newTitle;
        this.author = newAuthor;
        this.year = newYear;
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

    public deleteBookById(id: string): void {
        const index = this.books.findIndex(b => b.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Đã xóa sách có ID: ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID: ${id}`);
        }
    }

    public updateBookById(id: string, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor, newYear);
            console.log(`Đã cập nhật sách có ID: ${id}`);
        } else {
            console.log(`Không tìm thấy sách có ID: ${id}`);
        }
    }

    public searchBooksByTitle(keyword: string): void {
        const foundBooks = this.books.filter(b =>
            b.title.toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            foundBooks.forEach(b => {
                console.log(`- ID: ${b.getId()}, Title: ${b.title}, Author: ${b.author}, Year: ${b.year}`);
            });
        } else {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}".`);
        }
    }

    public printBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện trống.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(`- ID: ${b.getId()}, Title: ${b.title}, Author: ${b.author}, Year: ${b.year}`);
        });
    }
}

const library = new Library();

library.addBook(new Book("B01", "Lập trình JS", "Nguyễn Văn A", 2020));
library.addBook(new Book("B02", "Học TypeScript", "Trần Thị B", 2021));
library.addBook(new Book("B03", "TypeScript Nâng Cao", "Lê Văn C", 2022));

library.printBooks();

console.log("\n-- Xóa sách B02 --");
library.deleteBookById("B02");
library.printBooks();

console.log("\n-- Cập nhật sách B03 --");
library.updateBookById("B03", "TypeScript Pro", "Lê Văn Cường", 2025);
library.printBooks();

console.log("\n-- Tìm sách có chữ 'JS' --");
library.searchBooksByTitle("JS");
