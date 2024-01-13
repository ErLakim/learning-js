const sayHello = () => {
  const fName = document.getElementsByName("fName").value;
//ternary operator ??
  const gender = document.getElementsByName("gender")[0].checked
    ? document.getElementsByName("gender")[0].value
    : document.getElementsByName("gender")[1].value;
  console.log(gender);
  alert(`good day ${fName}`);
};

console.log("HEllo");
