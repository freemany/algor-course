export const Family = (arr: string[]) => {
  const family = arr;
  const isFamily = (name: string): boolean => {
    return family.includes(name);
  };

  const addMember = (name: string) => {
    family.push(name);
    return API;
  };

  const removeMember = (name: string) => {
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
