import { IsString } from 'class-validate';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}
