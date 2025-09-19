import React from 'react';
import { useSelector } from 'react-redux';

const ListUser = () => {
  const users = useSelector((state: any) => state.users);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: any) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.userName}</td>
              <td>{u.gender}</td>
              <td>{u.dateBirth}</td>
              <td>{u.address}</td>
              <td>Sửa | Xóa</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;