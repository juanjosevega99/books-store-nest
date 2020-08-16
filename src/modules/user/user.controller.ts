import { Controller, Get, Param, Body, Post, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  async getUser(@Param() id: number): Promise<UserDto> {
    const user = await this._userService.getUser(id);
    return user;
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    const users = await this._userService.getUsers();
    return users;
  }

  @Post()
  async createUser(@Body() user: User): Promise<UserDto> {
    const createdUser = await this._userService.create(user);
    return createdUser;
  }

  @Patch(':id')
  async updateUser(@Param() id: number, @Body() user: User) {
    const createdUser = await this._userService.update(id, user);
    return true;
  }

  @Delete(':id')
  async deleteUser(@Param() id: number) {
    await this._userService.delete(id);
    return true;
  }
}