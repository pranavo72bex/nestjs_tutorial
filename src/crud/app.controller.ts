import { Controller, Delete, Get, Param, Post, Put,Body, HttpCode,ParseUUIDPipe,ParseEnumPipe} from "@nestjs/common";
import{data, ReportType} from "src/testdata/data"
import { CreateReportDto } from "src/crud/dto/report.dto"
import { AppService } from "./app.service"

@Controller('/report/:type')
export class AppController{
  constructor(private readonly appService:AppService){}
  @Get()
  getAllReport(@Param('type',new ParseEnumPipe(ReportType)) type:string){
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getAllReport(reportType)
  }
  @Get(':id')
  getById(@Param('type')type :string,@Param('id',ParseUUIDPipe)id:string){
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    this.appService.getById(reportType,id)
  }
  @Post()
  createReport(@Body(){source,amount}: CreateReportDto,@Param('type')type:string){
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
   this.appService.createReport(reportType,{source,amount}) 
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('id',ParseUUIDPipe) id:string,
  ){
   this.appService.deleteReport(id)
  }
}