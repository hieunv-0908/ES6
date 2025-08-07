type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type StaffMember = Person & Employee;

function printStaffInfo(staff: StaffMember): void {
  console.log(
    `Nhân viên: ${staff.name} (${staff.age} tuổi) , Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`
  );
}
