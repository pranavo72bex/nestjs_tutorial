import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator"
import { ReportType } from "src/testdata/data";

export class CreateReportDto {
    @IsNumber()
    @IsPositive()
    amount: number;
    @IsNotEmpty()
    @IsString()
    source: string;
}
export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
}