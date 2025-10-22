import { Isstring , MinLength } from 'class-validator';
export class LoginDto {
  @Isstring()
  identifier: string;

  @Isstring()
  @MinLength (6)
  password : string;
}
