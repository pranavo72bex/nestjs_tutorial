import { Module } from "@nestjs/common";
import { MediumController } from "./medium_clone.controller";
import { MediumServices } from "./medium_clone.service";
import { TagModule } from "./tag/tag.module";

@Module({
    imports: [TagModule],
    controllers: [MediumController],
    providers: [MediumServices]
})
export class MediumModule { }
