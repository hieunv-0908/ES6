const display_user_info = user=>{
    const {name,age,location:{city},location:{country},job:{title},job:{company},contact:{email},contact:{phone}} = user;
    console.log(country);
     
    console.log(`${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via email:${email} or phone Number:${phone}.`);
}

const user = {
    name: "Jonh",
    age:25,
    location:{
        city: "HaNoi",
        country: "VietNam",
    },
    contact:{
        email: `john@gmail.com`,
        phone: "0928378721", 
    },
    job:{
        title: "Developer",
        company: "Tech Corp",
    }
}

display_user_info(user);