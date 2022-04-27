import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { GoogleOauthServices } from "./oauth.service";

@Controller('google')
export class GoogleOauthController {
    constructor(private readonly OauthServices: GoogleOauthServices) { }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) { }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        return this.OauthServices.googleLogin(req)
    }
}