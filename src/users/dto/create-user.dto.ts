import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['INTERN', 'ADMIN'], { message: 'Valid role required' })
  role: 'INTERN' | 'ADMIN';

  @IsEmail()
  email: string;
}
