import { IsNotEmpty, IsString } from 'class-validator';

export interface ICalculatorResultDto {
  result: boolean;
  total?: number;
  amount?: number;
  message?: string;
}

export class ICalInputDto {
  @IsNotEmpty()
  @IsString()
  bill: string;
  @IsNotEmpty()
  @IsString()
  people: string;
  @IsNotEmpty()
  @IsString()
  tipPercent: string;
}
