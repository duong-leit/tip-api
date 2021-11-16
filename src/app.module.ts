import { Module } from '@nestjs/common';
import { CalculatorController } from './controllers/calculator.controller';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CalculatorService } from './services/calculate.service';

@Module({
  imports: [],
  controllers: [AppController, CalculatorController],
  providers: [AppService, CalculatorService],
})
export class AppModule {}
