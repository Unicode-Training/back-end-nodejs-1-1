import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'src/entities/permission.entity';
import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private rolesRepository: Repository<Role>,
    @InjectRepository(Permission)
    private permissionsRepository: Repository<Permission>,
  ) {}

  findAll() {
    return this.rolesRepository.find();
  }
  findOne(id: number) {
    return this.rolesRepository.findOne({
      where: { id },
      relations: {
        permissions: true,
      },
    });
  }
  create(role: any) {
    return this.rolesRepository.save(role);
  }

  update(id: number, role: any) {
    return this.rolesRepository.update(id, role);
  }

  delete(id: number) {
    return this.rolesRepository.delete(id);
  }

  async updatePermissions(id: number, body: string[]) {
    const role = await this.rolesRepository.findOne({
      where: { id },
    });
    if (!role) {
      return false;
    }
    const permissions = await Promise.all(
      body.map(async (name: string) => {
        const permission = await this.permissionsRepository.findOne({
          where: {
            name,
          },
        });
        if (!permission) {
          return this.permissionsRepository.save({
            name,
          });
        }
        return permission;
      }),
    );
    return this.rolesRepository.save({
      ...role,
      permissions,
    });
  }
}
