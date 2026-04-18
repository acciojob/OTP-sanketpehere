//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// focus first box initially
codes[0].focus();

codes.forEach((code, index) => {
  // Typing forward
  code.addEventListener("input", (e) => {
    // allow only digits
    code.value = code.value.replace(/[^0-9]/g, "");

    if (code.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  // Backspace behavior
  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      } else {
        code.value = "";
      }
    }
  });
});
