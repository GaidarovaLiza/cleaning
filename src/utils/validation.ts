export const phoneValidate = (inputValue: string) => {
  const resetString = '+375';
  const availiableSymbolsForPhoneNumber = new Set('0123456789');
  let newValue = inputValue;
  console.log(inputValue.length);
  if (inputValue.startsWith('+')){
    if (inputValue.substring(0, 4) !== resetString) {
      newValue = resetString;
    } else{
      const tmpStr = inputValue;
      if((tmpStr.length < 13) && availiableSymbolsForPhoneNumber.has(tmpStr[tmpStr.length - 1])) {
        newValue = inputValue;
      } else if (tmpStr.length > 13){
        newValue = inputValue.substring(0, 13);
      }
    }
  } else {
    newValue = resetString;
  }
  return newValue;
};
