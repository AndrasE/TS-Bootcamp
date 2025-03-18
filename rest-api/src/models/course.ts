import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Lesson } from "./lesson";
@Entity({
  name: "COURSES",
})
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seqNo: number;

  @Column()
  url: string;

  @Column()
  title: string;

  @Column()
  longDescription: string;

  @Column()
  category: string;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastModifiedDate: Date;
}
