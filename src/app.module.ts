import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentModule } from './department/department.module';
import { BookModule } from './book/book.module';
import { Department } from './department/department.entity';
import { Book } from './book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'your_mysql_username',
      password: 'your_mysql_password',
      database: 'your_database_name',
      entities: [Department, Book], // Include your entities here
      synchronize: true,
      logging: true,
    }),
    DepartmentModule,
    BookModule,
  ],
})
export class AppModule {}