import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class ToDoList {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public task: string;

  @Column()
  public status: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default ToDoList;
