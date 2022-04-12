import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator"
export class CreateReportDto{
    @IsNumber()
    @IsPositive()
    amount:number;
    @IsNotEmpty()
    @IsString()
    source:string;
}