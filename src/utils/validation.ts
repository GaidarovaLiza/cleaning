export const phoneValidate = (num: any) => {
  if (typeof num !== 'string') {
    return false;
  }
  console.log('test', num);
  return /^[+\d]+$/.test(num);
};
