import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Department> {
    return this.departmentService.findById(+id);
  }

  @Post()
  create(@Body() department: Department): Promise<Department> {
    return this.departmentService.create(department);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() department: Department): Promise<Department> {
    return this.departmentService.update(+id, department);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.departmentService.delete(+id);
  }
}