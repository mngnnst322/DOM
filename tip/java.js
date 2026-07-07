const billinput = document.getElementById("bill-input");
const tips = document.getElementById("tips");
const dollar = document.getElementById("dollar");
const reset = document.getElementById("reset");

const sanitizeBillInput = (input) => {
  // zuvhun number avna
  input = input.replace(/[^\d.]/g, "");

  //     zuvhun butarhai avna
  if ((input.match(/\./g) || []).length > 1) {
    input = input.slice(0, -1);
  }
  return input;
};

billinput.addEventListener("input", () => {
  billinput.value = sanitizeBillInput(billinput.value);
});

tips.addEventListener("click", (event) => {
  if (event.target.tagName != "BUTTON") {
    return;
  } else if (billinput.value.length === 0) {
    alert("Bill input is empty");
  } else {
    const bill = parseFloat(billinput.value);
    const tipPercent = parseFloat(event.target.textContent.replace("%", ""));
    const total = bill + (bill * tipPercent) / 100;
    dollar.innerHTML = `Amount: ${total.toFixed(2)}$`;
  }
});
reset.addEventListener("click", () => {
  dollar.innerText = "Amount: 0.00";
  billinput.value = "";
});
