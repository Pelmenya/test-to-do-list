import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { CreateTaskDto } from './types/create-task.dto';
import { UpdateTaskDto } from './types/update-task.dto';

@Controller('to-do-list')
export class ToDoListController {
  constructor(private readonly toDoListService: ToDoListService) {}

  @Post('')
  async createTask(@Body() dto: CreateTaskDto) {
    return await this.toDoListService.createTask(dto);
  }

  @Get('')
  async getAllTasks() {
    return await this.toDoListService.getAllTasks();
  }

  @Put('')
  async updateTask(@Body() dto: UpdateTaskDto) {
    return await this.toDoListService.updateTask(dto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return await this.toDoListService.deleteTask(id);
  }
}
