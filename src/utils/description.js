export const getDescription = (description) => {
  return description !== '\n' && description !== '' ? description : '<Sin descripción>';
};
