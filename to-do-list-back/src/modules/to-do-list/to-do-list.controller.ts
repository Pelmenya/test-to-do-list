import { Body, Controller, Post } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { CreateTaskDto } from './types/create-task.dto';

@Controller('to-do-list')
export class ToDoListController {
  constructor(private readonly toDoListService: ToDoListService) {}

  @Post('create')
  async createTask(@Body() dto: CreateTaskDto) {
    return await this.toDoListService.createTask(dto);
  }

  
}
