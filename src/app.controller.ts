import { Controller, Get, Query } from '@nestjs/common';
import { AppService, CalculatorService } from './services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Controller('api')
export class CalculatorController {
  constructor(private calculatorService: CalculatorService) {}

  @Get('calculate')
  calculator(
    @Query('bill') bill: string,
    @Query('people') people: string,
    @Query('tipPercent') tipPercent: string,
  ): object {
    return this.calculatorService.calculateTip({ bill, people, tipPercent });
  }
}
