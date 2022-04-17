import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService) { }
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authservice.signUp(dto);
    }
    @Post('signin')
    sigin(@Body() dto: AuthDto) {
        return this.authservice.signin(dto);
    }
}
