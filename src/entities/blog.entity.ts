import { BlogStatus } from '../blogs/blog-status.enum';
import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('blogs') //テーブル名を指定
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: '記事タイトル',
  })
  title: string;

  @Column({
    type: 'text',
    nullable: true,
    comment: '記事内容',
  })
  content: string;

  @Column({
    type: 'enum',
    enum: BlogStatus,
    default: BlogStatus.DRAFT,
    comment: '公開状況',
  })
  status: BlogStatus;

  @Index('createdAt-idx')
  @CreateDateColumn()
  readonly createdAt: string;

  @UpdateDateColumn()
  readonly updatedAt: string;
}
