import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Department } from '../department/department.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  isbn: string;

  @Column()
  genre: string;

  @Column()
  publicationYear: number;

  @ManyToOne(() => Department, department => department.books)
  department: Department;

  @Column({ default: true })
  availability: boolean;

  @Column({ default: 0 })
  downloads: number;
}