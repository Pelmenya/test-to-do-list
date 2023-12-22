import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ToDoList from './to-do-list.entity';
import { CreateTaskDto } from './types/create-task.dto';
import { UpdateTaskDto } from './types/update-task.dto';

@Injectable()
export class ToDoListService {
  constructor(
    @InjectRepository(ToDoList)
    private toDoListRepository: Repository<ToDoList>,
  ) {}

  async createTask(dto: CreateTaskDto) {
    const newTask = this.toDoListRepository.create(dto);

    await this.toDoListRepository.save(newTask);
    const res = await this.toDoListRepository.findOne({
      where: {
        id: newTask.id,
      },
    });
    return res;
  }

  async getAllTasks() {
    return await this.toDoListRepository.find();
  }

  async updateTask(dto: UpdateTaskDto) {
    await this.toDoListRepository.save({
      id: dto.id,
      task: dto.task,
      status: dto.status,
    });

    return await this.toDoListRepository.findOne({
      where: {
        id: dto.id,
      },
    });
  }
}
