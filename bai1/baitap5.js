const response = 
{

data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "DEV",
            email: "dev@gmail.com",
        }
    }
}
const extractData = ({data})=>{
    const {title,author} = data;
    const {name: name_1,email: email_1} = author;
    console.log(title);
    console.log(author);
    console.log(name_1);
    console.log(email_1);  
}



extractData(response);