import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";
import { IsNotEmpty, IsString, isString } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  @IsNotEmpty({ message: "Primeiro nome é obrigatório!" })
  @IsString({ message: "Primeiro precisa deve ser um texto" })
  firstName!: string;

  @Column("varchar")
  @IsNotEmpty({ message: " Sobrenome é obrigatório!" })
  @IsString({ message: "Sobrenome precisa ser um texto" })
  lastName!: string;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
