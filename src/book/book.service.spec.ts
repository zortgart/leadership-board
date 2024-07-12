import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { DepartmentService } from '../department/department.service'; // Adjust path as needed
import { Book } from './book.entity';

describe('BookService', () => {
  let service: BookService;
  let repository: BookRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        DepartmentService, // Mock or provide the real service as needed
        {
          provide: getRepositoryToken(BookRepository),
          useClass: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<BookService>(BookService);
    repository = module.get<BookRepository>(BookRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more test cases based on your requirements
});