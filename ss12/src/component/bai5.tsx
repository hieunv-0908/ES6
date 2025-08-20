const user = {
  firstName: "Nguyễn",
  lastName: "Văn Hiếu",
};

function FormatName() {
  return (
    <span>
      Họ và tên: {user.firstName} {user.lastName}
    </span>
  );
}

export default FormatName;