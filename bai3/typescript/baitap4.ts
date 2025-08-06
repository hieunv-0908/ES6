let str:string = "2";
let num:number = 2;
str == num;
str === num;

// dù là so sánh chạt hay so sánh lỏng thì đều báo lỗi vì trong typescript không cho phép
// so sánh 2 giá trị có kiểu dữ liệu khác nhau nhưng nếu vẫn biên dịch nó sang code 
// js thì nó vẫn hạot động bình thường bên code file js