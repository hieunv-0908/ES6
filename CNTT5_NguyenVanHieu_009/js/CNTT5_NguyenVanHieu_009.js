"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
class User {
    id;
    name;
    email;
    phone;
    purchasedCourses = [];
    discounts = [];
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetail() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            purchasedCourses: this.purchasedCourses,
            discounts: this.discounts
        };
    }
    buyCourse(course) {
        this.purchasedCourses.push(course);
        console.log(`Đã mua khoá học: ${course}`);
        this.discounts.push(`Giảm giá 10% cho khoá học: ${course}`);
    }
}
class Course {
    courseId;
    courseName;
    price;
    duration;
    students = 0;
    constructor(courseId, courseName, price, duration) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.price = price;
        this.duration = duration;
    }
    displayCourse() {
        return {
            courseId: this.courseId,
            courseName: this.courseName,
            price: this.price,
            duration: this.duration,
            students: this.students
        };
    }
    getCourse(discount) {
        let finalPrice = this.price;
        if (discount) {
            finalPrice -= (finalPrice * discount / 100);
        }
        this.students++;
        return `Khoá học: ${this.courseName}, Giá: ${finalPrice} VNĐ, Thời gian: ${this.duration} giờ`;
    }
}
class FreeCourse extends Course {
    constructor(courseId, courseName, duration) {
        super(courseId, courseName, 0, duration);
    }
    getCertificate() {
        console.log(`Chứng chỉ khoá học miễn phí: ${this.courseName}`);
    }
    getRefundPolicy() {
        console.log(`Khoá học miễn phí không có chính sách hoàn tiền.`);
    }
}
class PaidCourse extends Course {
    constructor(courseId, courseName, price, duration) {
        super(courseId, courseName, price, duration);
    }
    getCertificate() {
        console.log(`Chứng chỉ khoá học trả phí: ${this.courseName} đã đƯợc cấp.`);
    }
    getRefundPolicy() {
        console.log(`Khoá học trả phí có chính sách hoàn tiền áp dụng trước 2 giờ học.`);
    }
}
class CourseManager {
    courses = [];
    users = [];
    discounts = [];
    addCourse(type, courseName, coursePrice, courseDuration) {
        let course;
        if (type === "free") {
            course = new FreeCourse(Date.now().toString(), courseName, courseDuration);
        }
        else {
            course = new PaidCourse(Date.now().toString(), courseName, coursePrice, courseDuration);
        }
        this.courses.push(course);
    }
    createUser(name, email, phone) {
        const user = new User(Date.now().toString(), name, email, phone);
        this.users.push(user);
    }
    createNewDiscount(discountCode, discountValue) {
        const discount = { code: discountCode, value: discountValue };
        this.discounts.push(discount);
    }
    handleBuyCourse(userId, courseId) {
        const user = this.users.find(u => u.id === userId);
        const course = this.courses.find(c => c.courseId === courseId);
        if (!user)
            return "Người dùng không tồn tại.";
        if (!course)
            return "Khoá học không tồn tại.";
        user.buyCourse(course.courseName);
        return "Mua khoá học thành công.";
    }
    handleRefundCourse(userId, courseId) {
        const user = this.users.find(u => u.id === userId);
        const course = this.courses.find(c => c.courseId === courseId);
        if (!user)
            return "Người dùng không tồn tại.";
        if (!course)
            return "Khoá học không tồn tại.";
        if (course instanceof PaidCourse) {
            user.purchasedCourses = user.purchasedCourses.filter(c => c !== course.courseName);
            course.students--;
            return "Hoàn tiền khoá học thành công.";
        }
        return "Khoá học miễn phí không thể hoàn tiền.";
    }
    listCourses(numOfStudents) {
        if (numOfStudents) {
            const filteredCourses = this.courses.filter(c => c.students >= numOfStudents);
            console.log("Danh sách khoá học với số lượng học viên lớn hơn hoặc bằng " + numOfStudents + ":");
            filteredCourses.forEach(course => {
                console.log(course.displayCourse());
            });
        }
        else {
            console.log("Danh sách khoá học:");
            this.courses.forEach(course => {
                console.log(course.displayCourse());
            });
        }
    }
    showUserInformation(email) {
        const user = this.users.find(u => u.email === email);
        if (user) {
            console.log(`
                Thông tin người dùng:
                ID: ${user.id}
                Tên: ${user.name}
                Email: ${user.email}
                Số điện thoại: ${user.phone}
                Khoá học đã mua: ${user.purchasedCourses.join(", ")}
            `);
        }
    }
    calculateTotalRevenue() {
        return this.courses.reduce((total, course) => {
            if (course instanceof PaidCourse) {
                return total + course.price * course.students;
            }
            return total;
        }, 0);
    }
    giftDiscount(userId, discountCode) {
        const user = this.users.find(u => u.id === userId);
        const discount = this.discounts.find(d => d.code === discountCode);
        if (user && discount) {
            user.discounts.push(discount.code);
        }
    }
    getCertificate(userId) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            console.log(`Chứng chỉ của người dùng ${user.name}:`);
            user.purchasedCourses.forEach(course => {
                console.log(`- ${course}`);
            });
        }
    }
    getRefundPolicy(courseId) {
        const course = this.courses.find(c => c.courseId === courseId);
        if (course) {
            if (course instanceof PaidCourse) {
                console.log(`Chính sách hoàn tiền cho khoá học ${course.courseName}: ${course.getRefundPolicy()}`);
            }
        }
    }
}
let courseManager = new CourseManager();
while (true) {
    console.log(`
1.Thêm người dùng.
2.Thêm khoá học.
3.Thêm mã giảm giá.
4.Mua khoá học.
5.Hoàn tiền khoá học.
6.Hiển thị danh sách khoá học.
7.Hiển thị thông tin người dùng.
8.Tính tổng doanh thu từ những khoá học đã bán.
9.Tặng mã giảm giá.
10.Hiển thị toàn bộ chứng chỉ của người dùng.
11.Hiển thị danh sách hoàn tiền.
12.Thoát trương trình.
    `);
    let choice = prompt("Mời nhập vào lựa chọn của bạn:");
    switch (choice) {
        case `1`:
            courseManager.createUser(prompt("Nhập tên người dùng:"), prompt("Nhập email:"), prompt("Nhập số điện thoại:"));
            break;
        case `2`:
            const courseType = prompt("Nhập kiểu khoá học:");
            if (courseType !== "free" && courseType !== "paid") {
                console.log("Kiểu khoá học không hợp lệ.");
                break;
            }
            courseManager.addCourse(courseType, prompt("Nhập tên khoá học:"), parseFloat(prompt("Nhập giá khoá học:")), parseInt(prompt("Nhập thời gian khoá học (giờ):")));
            break;
        case `3`:
            const discountRate = parseFloat(prompt("Nhập tỷ lệ giảm giá:"));
            if (isNaN(discountRate) || discountRate < 0 || discountRate > 1) {
                console.log("Tỷ lệ giảm giá không hợp lệ.");
                break;
            }
            courseManager.createNewDiscount(prompt("Nhập mã giảm giá:"), discountRate);
            break;
        case `4`:
            {
                const userId = prompt("Nhập ID người dùng:");
                const courseId = prompt("Nhập ID khoá học:");
                console.log(courseManager.handleBuyCourse(userId, courseId));
            }
            break;
        case `5`:
            const userIdForRefund = prompt("Nhập ID người dùng:");
            const courseIdForRefund = prompt("Nhập ID khoá học:");
            console.log(courseManager.handleRefundCourse(userIdForRefund, courseIdForRefund));
            break;
        case `6`:
            const numOfStudents = parseInt(prompt("Nhập số lượng học viên tối thiểu:"));
            if (isNaN(numOfStudents) || numOfStudents < 0) {
                console.log("Số lượng học viên không hợp lệ.");
                break;
            }
            courseManager.listCourses(numOfStudents);
            break;
        case `7`:
            const email = prompt("Nhập email người dùng:");
            console.log(courseManager.showUserInformation(email));
            break;
        case `8`:
            const totalRevenue = courseManager.calculateTotalRevenue();
            console.log(`Tổng doanh thu từ những khoá học đã bán: ${totalRevenue}`);
            break;
        case `9`:
            {
                const userId = prompt("Nhập ID người dùng:");
                const discountCode = prompt("Nhập mã giảm giá:");
                courseManager.giftDiscount(userId, discountCode);
            }
            break;
        case `10`:
            const userIdForCertificate = prompt("Nhập ID người dùng để xem chứng chỉ:");
            courseManager.getCertificate(userIdForCertificate);
            break;
        case `11`:
            const courseId = prompt("Nhập ID khoá học để xem chính sách hoàn tiền:");
            courseManager.getRefundPolicy(courseId);
            break;
        case `12`:
            break;
        default:
            console.log(`Lựa chọn không hợp lệ. Vui lòng chọn lại.`);
            break;
    }
    if (choice === `12`) {
        break;
    }
}
//# sourceMappingURL=CNTT5_NguyenVanHieu_009.js.map