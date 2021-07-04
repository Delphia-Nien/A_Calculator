import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  const pi = Math.PI
  if (operation === "sin") {
    return Math.sin(two/180*pi).toString();
  }
  if (operation === "cos") {
    return Math.cos(two/180*pi).toString();
  }
  if (operation === "tan") {
    return Math.tan(two/180*pi).toString();
  }
  if (operation === "^") {
    return Math.pow(one,two).toString();
  }
  
  if (operation === "log") {
    return Math.log10(two).toString();
  }
  if (operation === "sqrt") {
    return Math.sqrt(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
