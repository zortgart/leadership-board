import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DepartmentService } from '../department/department.service'; // Adjust as per your service imports
import { BookService } from '../book/book.service'; // Adjust as per your service imports

@Injectable()
export class TasksService {
  constructor(
    private readonly departmentService: DepartmentService,
    private readonly bookService: BookService,
  ) {}

  @Cron(CronExpression.DAILY)
  async updateDepartmentRankings() {
    await this.departmentService.updateRankings();
  }

  @Cron(CronExpression.HOURLY)
  async updateTrendingBooks() {
    await this.bookService.updateTrendingBooks();
  }

  @Cron(CronExpression.WEEKLY)
  async removeLeastReadBooks() {
    await this.bookService.removeLeastReadBooks();
  }
}