const greeting_with_weather = (name,wether)=>{
    if(wether.toLowerCase() === "sunny"){
        console.log(`Xin chao ${name}, thời tiết hôm nay đẹp nhỉ.`);
    }else if(wether.toLowerCase() === "rainy"){
        console.log(`Xin chao ${name}, thời tiết hôm nay khá mát mẻ, có chút mưa ra ngoài nhớ mang theo ô!`);
    }else{
        console.log(`Xin chao ${name}, thời tiết hôm nay chưa thể xác định được????`);
    }
} 
greeting_with_weather("hieu","sunny");
greeting_with_weather("hieu","rainy");
greeting_with_weather("hieu","akjsnkjas");

