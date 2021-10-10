const checkFormateValid = (str) => new Promise((resolve, reject) => {
  const re = new RegExp(/^[0-9]*$/);
  const isNumber = re.test(str);
  if (isNumber) {
    resolve(isNumber);
  } else {
    const errMsg = '必須是數字';
    reject(errMsg);
  }
})

export default checkFormateValid
