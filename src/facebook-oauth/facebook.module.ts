import { Module } from "@nestjs/common";
import { facebookOauthController } from "./facebook.controller";
import { FacebookOauthServices } from "./facebook.service";
import { FacebookStrategy } from "./facebook.strategy";

@Module({
    controllers: [facebookOauthController],
    providers: [FacebookOauthServices, FacebookStrategy]
})
export class facebookAuthModule { }