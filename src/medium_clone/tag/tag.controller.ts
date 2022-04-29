import { Controller, Get } from "@nestjs/common";
import { TagService } from "./tag.services";

@Controller('tags')
export class TagController {
    constructor(private readonly tagServices: TagService) { }
    @Get()
    findAll(): String[] {
        return this.tagServices.findAll()
    }
}