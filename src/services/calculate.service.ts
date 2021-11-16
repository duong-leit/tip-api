import { Injectable } from '@nestjs/common';
import { ICalculatorResultDto, ICalInputDto } from '../dto/calculate.dto';

@Injectable()
export class CalculatorService {
  calculateTip(value: ICalInputDto): ICalculatorResultDto {
    let total = 0,
      amount = 0,
      result = false;

    const billValue = Number(value.bill);
    const peopleValue = Number(value.people);
    const tipValue = Number(value.tipPercent);

    if (isNaN(billValue) || isNaN(peopleValue) || isNaN(tipValue)) {
      return { result: result, message: 'data is Invalid' };
    }

    amount = (billValue * (tipValue / 100)) / peopleValue;
    total = (billValue * (tipValue + 100)) / 100 / peopleValue;
    result = true;
    return { result, total, amount };
  }
}
