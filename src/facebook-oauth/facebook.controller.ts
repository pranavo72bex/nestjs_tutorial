import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport/dist/auth.guard";
import { FacebookOauthServices } from "./facebook.service";

@Controller('facebook')
export class facebookOauthController {
    constructor(private readonly facebookauthservice: FacebookOauthServices) { }

    @Get()
    @UseGuards(AuthGuard('facebook'))
    async googleAuth(@Req() req) { }

    @Get('redirect')
    @UseGuards(AuthGuard('facebook'))
    googleAuthRedirect(@Req() req) {
        return this.facebookauthservice.facebookLogin(req);
    }
}