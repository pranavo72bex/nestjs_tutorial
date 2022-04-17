import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from "argon2";
import { AuthDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }
  async signUp(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        }
      })


    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('Credential taken')
        }
      }
      throw err;
    }

  }
  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      }
    });
    if (!user) throw new ForbiddenException('Credentails Incorrect');

    const matchPassword = await argon.verify(user.hash, dto.password);
    if (!matchPassword) new ForbiddenException('Credentails Incorrect');

    delete user.hash;
    return user;
  }

}