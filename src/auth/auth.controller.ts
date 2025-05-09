import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Post('/signup')
  signup(@Body() dto: AuthDto) {
    return this.AuthService.signup(dto);
  }
  @Post('/signin')
  signin(@Body() dto: AuthDto) {
    return this.AuthService.signin(dto);
  }
}
