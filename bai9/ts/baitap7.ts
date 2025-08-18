type User = {
  readonly id: number; 
  name: string;
  email: string;
  age?: number;
};

type UserUpdates = Partial<Pick<User, "name" | "email" | "age">>;
function updateUser(user: User, updates: UserUpdates): User {
  if ("id" in updates) {
    throw new Error("Id cannot be changed");
  }

  return {
    ...user,
    ...updates, 
  };
}


const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const updates1 = { name: "Alice Johnson" };

console.log(updateUser(user, updates1));
const updates2 = { id: 2, name: "Alice Johnson" };
console.log(updateUser(user, updates2));
