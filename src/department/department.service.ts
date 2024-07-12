import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { DepartmentRepository } from './department.repository';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: DepartmentRepository,
  ) {}

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  async findById(id: number): Promise<Department> {
    const department = await this.departmentRepository.findOne(id);
    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    return department;
  }

  async create(department: Department): Promise<Department> {
    return this.departmentRepository.save(department);
  }

  async update(id: number, department: Department): Promise<Department> {
    await this.findById(id); // Check if department exists
    await this.departmentRepository.update(id, department);
    return this.findById(id); // Return updated department
  }

  async delete(id: number): Promise<void> {
    const result = await this.departmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
  }

  async findDepartmentByName(name: string): Promise<Department> {
    return this.departmentRepository.findOne({ where: { name } });
  }
}