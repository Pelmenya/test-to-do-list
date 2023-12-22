import { Module } from '@nestjs/common';
import { ToDoListController } from './to-do-list.controller';
import { ToDoListService } from './to-do-list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ToDoList from './to-do-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoList])],
  controllers: [ToDoListController],
  providers: [ToDoListService],
})
export class ToDoListModule {}
