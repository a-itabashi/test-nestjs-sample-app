import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @IsString()
  @IsOptional() //パラメータが存在した時のみチェック
  content: string;
}
