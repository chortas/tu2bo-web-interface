export const filterUsers = (users, searchQuery) => {
  return users.filter((user) => user.username.toLowerCase().includes(searchQuery.toLowerCase()));
};
