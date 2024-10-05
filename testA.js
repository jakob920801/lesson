const alpha = "hello?";

function test(text) {
  console.log(text);
}

// test(alpha);
// test("hi");

// const -> let

function num() {
  if (Math.random() < 0.5) {
    return "hello";
  } else {
    return "hi";
  }
}

console.log(num());
