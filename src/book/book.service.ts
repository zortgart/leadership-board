import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BookRepository } from './book.repository';
import { DepartmentService } from '../department/department.service'; // Adjust path as needed

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: BookRepository,
    private readonly departmentService: DepartmentService,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findById(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async create(book: Book): Promise<Book> {
    const department = await this.departmentService.findById(book.department.id);
    if (!department) {
      throw new NotFoundException(`Department with ID ${book.department.id} not found`);
    }
    book.department = department;
    return this.bookRepository.save(book);
  }

  async update(id: number, book: Book): Promise<Book> {
    await this.findById(id); // Check if book exists
    const department = await this.departmentService.findById(book.department.id);
    if (!department) {
      throw new NotFoundException(`Department with ID ${book.department.id} not found`);
    }
    book.department = department;
    await this.bookRepository.update(id, book);
    return this.findById(id); // Return updated book
  }

  async delete(id: number): Promise<void> {
    const result = await this.bookRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
  }

  async findByTitle(title: string): Promise<Book[]> {
    return this.bookRepository.find({ where: { title } });
  }

  async findByAuthor(author: string): Promise<Book[]> {
    return this.bookRepository.find({ where: { author } });
  }

  async findAvailableBooks(): Promise<Book[]> {
    return this.bookRepository.find({ where: { availability: true } });
  }
}