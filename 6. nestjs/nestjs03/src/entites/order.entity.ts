import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { OrderDetail } from './order-detail.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  total: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  details: OrderDetail[];

  @Column({
    type: 'enum',
    enum: ['pending', 'completed', 'canceled'],
    default: 'pending',
  })
  status: string;

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
