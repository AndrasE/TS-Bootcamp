import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({
  name: "LESSONS",
})
export class Lesson {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: string;

  @Column()
  seqNo: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastModifiedDate: Date;
}
