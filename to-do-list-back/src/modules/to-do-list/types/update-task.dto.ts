import { IsNumber, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsNumber() id: number;
  @IsString() task: string;
  @IsString() status: string;
}
