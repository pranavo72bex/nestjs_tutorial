import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }
  signUp() {
    return "I am signed up"
  }
  signin() {
    return "i am signed in"
  }
}