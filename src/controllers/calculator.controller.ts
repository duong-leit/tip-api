import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CalculatorService } from '../services/calculate.service';
import { ICalculatorResultDto, ICalInputDto } from '../dto/calculate.dto';

@Controller('api')
export class CalculatorController {
  constructor(private calculatorService: CalculatorService) {}

  @Get('calculate')
  calculator(
    @Query('bill') bill: string,
    @Query('people') people: string,
    @Query('tipPercent') tipPercent: string,
  ): ICalculatorResultDto {
    return this.calculatorService.calculateTip({ bill, people, tipPercent });
  }
  @Post('calculate')
  calculatePost(@Body() inputCal: ICalInputDto): ICalculatorResultDto {
    return this.calculatorService.calculateTip(inputCal);
  }
}
