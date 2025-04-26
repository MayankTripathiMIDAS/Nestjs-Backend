import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//Class Valdiators use prebuilt validators
export class AuthDto {
  @IsEmail() //check if email is valid
  @IsNotEmpty() //check if email is not empty
  email: string;

  @IsString() //check if password is a string
  @IsNotEmpty() //check if password is not empty
  password: string;

  @IsString() //check if firstName is a string
  firstName: string;

  @IsString()
  lastName: string;
}
