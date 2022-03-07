function telephoneCheck(str) {

  if (str.indexOf("(")=== -1 && str.indexOf(")") > -1){
    return false;
  }
  if (str.match(/-/g) && str.match(/-/g).length > 2) {
    return false;
  }
  if(str[0] === "-"){
  return false;
  }
  if (str.indexOf(")") - str.indexOf("(") >= 5){
    return false;
  }

  let usPhone = str.replace(/-| /g, "")
  if(usPhone.indexOf("(") < usPhone.indexOf(")")){
    usPhone = usPhone.replace(/\(|\)/g, "")
  };
  if (usPhone.length === 10){
    return true;
  } else if (usPhone.length === 11 && usPhone[0]== 1){
  return true;
  }
  return false;
}
