import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  email!: string;

  @Column({ length: 150 })
  name!: string;

  @Column({ default: true })
  active!: boolean;
}
