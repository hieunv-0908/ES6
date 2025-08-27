import React, { useMemo } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const UserList: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'Alice', age: 17 },
    { id: 2, name: 'Bob', age: 20 },
    { id: 3, name: 'Charlie', age: 25 },
    { id: 4, name: 'David', age: 16 },
    { id: 5, name: 'Eve', age: 30 },
  ];

  const adults = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, [users]); 

  return (
    <div >
      <h2>Danh sách người dùng trên 18 tuổi:</h2>
      <ul>
        {adults.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
