class Contact {
    constructor(name,phone_number,email) {
        this.name = name;
        this.phone_number =phone_number;
        this.email = `${email}@gmail.com`;
    }
    display(){
        console.log(`${this.name}`);
        console.log(`${this.phone_number}`);
        console.log(`${this.email}`);
    }
}

const add_contact = ()=>{
    let name = prompt("Mời nhập vào tên của số:");
    let phone_number = prompt("Mời nhập vào số điện thoại:");
    let email = prompt("Mời nhập vào tên của email của số không cần viết sau @(chỉ nhận dạng gmail.com):");
    let contact = new Contact(name,phone_number,email);
    phone_book.push(contact);
}

const display_contact = ()=>{
    for (const element of phone_book) {
        element.display();
    }
}
const phone_book = []

add_contact();
add_contact();
add_contact();
display_contact();

