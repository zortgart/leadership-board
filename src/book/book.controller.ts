import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findById(+id);
  }

  @Post()
  create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() book: Book): Promise<Book> {
    return this.bookService.update(+id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.bookService.delete(+id);
  }
}