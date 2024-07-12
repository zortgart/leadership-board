import { EntityRepository, Repository } from 'typeorm';
import { Department } from './department.entity';

@EntityRepository(Department)
export class DepartmentRepository extends Repository<Department> {
  // Custom repository methods can be added here if needed
}