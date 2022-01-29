import { run } from "./app/app";
import "./main.scss";
import { CalculatorService } from "./app/calculator.service";
const calculatorService = new CalculatorService();
run(calculatorService);
