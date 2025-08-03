const a = 5;
const arr = [1,2,3];

a =10;
console.log(a);
arr[3] = 4;
console.log(arr);

//a báo lỗi: const không thể thay đổi được giá trị của biến a vì nó là biến nguyên thuỷ 
// arr không lỗi vì nó là một dạng biến tham chiếu nó không trực tiếp chứa giá trị của các phần tử trong nó mà chỉ chứa địa chỉ của vùng nhớ chứa các phần tử mà thôi