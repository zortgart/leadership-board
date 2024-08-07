import { EntityRepository, Repository } from 'typeorm';
import { Book } from './book.entity';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  // Custom repository methods can be added here if needed
}