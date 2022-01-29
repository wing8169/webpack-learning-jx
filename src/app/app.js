import { sumNumber, parseInputs } from "./utils/utils";

export const run = (calculatorService) => {
  calculatorService.onClick(() => {
    const inputs = calculatorService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    const [numA, numB] = parsedInputs;
    calculatorService.setResult(sumNumber(numA, numB));
  });
};
