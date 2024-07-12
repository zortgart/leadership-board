import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { DepartmentModule } from '../department/department.module'; // Adjust path as needed

@Module({
  imports: [
    TypeOrmModule.forFeature([BookRepository]),
    DepartmentModule, // Import DepartmentModule for the department service dependency
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}