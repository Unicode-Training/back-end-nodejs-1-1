import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';
import { Permission } from './permission.entity';
@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 200,
  })
  name: string;

  @Column({
    type: 'tinyint',
    default: 1,
  })
  status: boolean;

  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable({
    name: 'users_roles',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  users: User[];

  @ManyToMany(() => Permission, (permission) => permission.roles, {
    onDelete: 'CASCADE',
  })
  permissions: Permission[];

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: string;
}
