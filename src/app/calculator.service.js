export class CalculatorService {
  constructor() {
    this.a = document.getElementById("number_a");
    this.b = document.getElementById("number_b");
    this.addValuesButton = document.getElementById("addValues");
    this.resultDiv = document.getElementById("result");
  }

  getInputs() {
    return [this.a.value, this.b.value];
  }

  setResult(str) {
    this.resultDiv.innerText = str;
  }

  onClick(cb) {
    this.addValuesButton.addEventListener("click", cb);
  }
}
