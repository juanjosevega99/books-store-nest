import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { MapperService } from 'src/shared/mapper.service';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private readonly _userRepository: RoleRepository,
    private readonly _mapperService: MapperService,
  ) {}

  async getRole(id: number): Promise<Role> {
    if (!id) {
      throw new BadRequestException('Id must be sent');
    }

    const role = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!role) {
      throw new NotFoundException();
    }

    return role;
  }

  async getRoles(): Promise<Role[]> {
    const roles = await this._userRepository.find({
      where: { status: 'ACTIVE' },
    });

    return roles;
  }

  async create(role: Role) {
    const savedRole: Role = await this._userRepository.save(role);
    return savedRole;
  }

  async update(id: number, role: Role): Promise<void> {
    await this._userRepository.update(id, role);
  }

  async delete(id: number): Promise<void> {
    const userExists = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!userExists) {
      throw new NotFoundException();
    }

    await this._userRepository.update(id, { status: 'INACTIVE' });
  }
}
