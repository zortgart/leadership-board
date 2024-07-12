import { Injectable } from '@nestjs/common';
import { Console } from 'console';
import { DepartmentService } from '../department/department.service'; // Adjust import as per your project structure
import { BookService } from '../book/book.service'; // Adjust import as per your project structure

@Injectable()
export class LibraryMenu {
  private console: Console;

  constructor(
    private readonly departmentService: DepartmentService,
    private readonly bookService: BookService,
  ) {
    this.console = new Console(process.stdout, process.stderr);
  }

  async start() {
    this.console.log('Welcome to Library Management System');

    while (true) {
      const choice = await this.askForChoice();
      await this.processChoice(choice);
      if (choice === 'exit') {
        break;
      }
    }

    this.console.log('Exiting Library Management System');
  }

  private async askForChoice(): Promise<string> {
    return new Promise<string>((resolve) => {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      readline.question(
        'Enter your choice (add, remove, search, list, exit): ',
        (choice) => {
          readline.close();
          resolve(choice.toLowerCase().trim());
        }
      );
    });
  }

  private async processChoice(choice: string) {
    switch (choice) {
      case 'add':
        await this.addBook();
        break;
      case 'remove':
        await this.removeBook();
        break;
      case 'search':
        await this.searchBooks();
        break;
      case 'list':
        await this.listAllBooks();
        break;
      case 'exit':
        break;
      default:
        this.console.log('Invalid choice. Please try again.');
        break;
    }
  }

  private async addBook() {
    // Implement logic to add a book using BookService
    this.console.log('Add book feature coming soon...');
  }

  private async removeBook() {
    // Implement logic to remove a book using BookService
    this.console.log('Remove book feature coming soon...');
  }

  private async searchBooks() {
    // Implement logic to search books using BookService
    this.console.log('Search book feature coming soon...');
  }

  private async listAllBooks() {
    // Implement logic to list all books using BookService
    this.console.log('List all books feature coming soon...');
  }
}