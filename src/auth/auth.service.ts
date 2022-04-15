import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }
  signUp() {
    return { msg: "I am signed up" }
  }
  signin() {
    return { msg: "i am signed in" }
  }
}