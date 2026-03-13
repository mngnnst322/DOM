const billinput = document.getElementById("bill-input");
const tips = document.getElementById("tips");
const dollar = document.getElementById("dollar");
const reset = document.getElementById("reset");

const sanitizeBillInput = (input) => {
  // zuvhun number avna
  input = input.replace(/[^\d.]/g, "");

  //     zuvhun butarhai avna
  if ((input.match(/\./g) || []).lenght > 1) {
    input = input.slice(0, -1);
  }
  return input;
};

billinput.addEventListener("click", () => {
  billinput.value = sanitizeBillInput(billinput.value);
});

tips.addEventListener("click", (event) => {
  if (event.target.tagName != "BUTTON") {
    return;
  } else if (billinput.value.length === 0) {
    alert("Bill input is empty");
  } else {
    dollar.value =
      (billinput.value * event.target.textContent.replace("%", "")) / 100;
    let num = parseFloat(dollar.value);
    let num1 = parseFloat(billinput.value);
    dollar.innerHTML = `Amount: ${num + num1}$`;
  }
});
reset.addEventListener("click", () => {
  dollar.innerText = "Amount : 000";
  billinput.value = "";
});
