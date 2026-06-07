function divide(numerator, denominator) {
  if (typeof numerator !== "number") {
    throw new Error("Numerator must be a number");
  }

  if (typeof denominator !== "number") {
    throw new Error("Denominator must be a number");
  }

  if (denominator === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return numerator / denominator;
}

try {
  console.log(divide(10, 2));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена");
}