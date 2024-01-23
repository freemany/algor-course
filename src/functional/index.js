export const Family = (arr) => {
  const family = arr;
  const isFamily = (name) => {
    return family.includes(name);
  };

  const addMember = (name) => {
    family.push(name);
    return API;
  };

  const removeMember = (name) => {
    family.splice(family.indexOf(name), 1);

    return API;
  };

  const API = {
    isFamily,
    addMember,
    removeMember,
  };

  return API;
};
