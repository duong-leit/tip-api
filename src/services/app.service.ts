import { Injectable } from '@nestjs/common';
import { ICalculatorResult, ICalInput } from '../common/interefaces/calculator';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, this is api for calculating tip.!';
  }
}

@Injectable()
export class CalculatorService {
  calculateTip(value: ICalInput): ICalculatorResult {
    let total = 0,
      amount = 0,
      result = false;
    if (!value.bill || !value.people || !value.tipPercent) {
      return { result, total, amount };
    }
    const billValue = Number(value.bill);
    const peopleValue = Number(value.people);
    const tipValue = Number(value.tipPercent);

    if (isNaN(billValue) && isNaN(peopleValue) && isNaN(tipValue)) {
      return { result, total, amount };
    }

    amount = (billValue * (tipValue / 100)) / peopleValue;
    total = (billValue * (tipValue + 100)) / 100 / peopleValue;
    result = true;
    return { result, total, amount };
  }
}
