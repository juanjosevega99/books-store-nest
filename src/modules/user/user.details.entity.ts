import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user-details')
export class UserDetails extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string
  
  @Column({ type: 'varchar', nullable: true })
  lastName: string

  @Column({ type: 'varchar', nullable: false })
  email: string
  
  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string
  
  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: string
  
  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date
}