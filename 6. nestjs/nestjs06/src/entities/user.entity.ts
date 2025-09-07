import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Role } from './role.entity';
import { Permission } from './permission.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  password: string;

  @Column({
    type: 'tinyint',
    default: 1,
  })
  status: boolean;

  @ManyToMany(() => Role, (role) => role.users)
  roles: Role[];

  @ManyToMany(() => Permission, (permission) => permission.users)
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
