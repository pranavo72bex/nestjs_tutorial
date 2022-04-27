import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { OauthServices } from "./oauth.service";

@Controller('google')
export class OauthController {
    constructor(private readonly OauthServices: OauthServices) { }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) { }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        return this.OauthServices.googleLogin(req)
    }
}