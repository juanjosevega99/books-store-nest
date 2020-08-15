import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { UserDetails } from "./user.details.entity";

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string

  @Column({ type: 'varchar', nullable: false })
  email: string
  
  @Column({ type: 'varchar', nullable: false })
  password: string

  @OneToOne(type => UserDetails, { cascade: true, nullable: false, eager: true })details: UserDetails
  
  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string
  
  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: string
  
  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date
}