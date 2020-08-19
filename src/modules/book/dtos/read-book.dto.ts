import { Expose, Type, Exclude } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { ReadUserDto } from 'src/modules/user/dto';

@Exclude()
export class ReadBookDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly name: number;

  @Expose()
  @IsString()
  readonly description: number;

  @Expose()
  @Type(type => ReadUserDto)
  readonly authors: ReadUserDto[];
}
