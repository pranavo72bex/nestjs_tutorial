import { Module } from "@nestjs/common";
import { TagController } from "./tag.controller";
import { TagService } from "./tag.services";

@Module({
    imports: [],
    controllers: [TagController],
    providers: [TagService]
})
export class TagModule { }