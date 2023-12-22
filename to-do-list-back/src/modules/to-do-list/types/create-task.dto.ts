import { IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString() task: string;
  @IsOptional() @IsString() status?: string;
}
