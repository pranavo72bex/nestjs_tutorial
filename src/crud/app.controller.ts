import { Controller, Delete, Get, Param, Post, Put,Body, HttpCode} from "@nestjs/common";
import { type } from "os";
import{data, ReportType} from "src/testdata/data"

import { AppService } from "./app.service";
@Controller('/report/:type')
export class AppController{
  constructor(private readonly appService:AppService){}
  @Get()
  getAllReport(@Param('type') type:string){
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getAllReport(reportType)
  }
  @Get(':id')
  getById(@Param('type')type :string,@Param('id')id:string){
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    this.appService.getById(reportType,id)
  }
  @Post()
  createReport(@Body(){source,amount}: {amount:number;source:string},@Param('type')type:string){
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
   this.appService.CreateReport(reportType,{source,amount})
    
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('id') id:string,
  ){
   const reportIndex= data.report.findIndex((report)=>report.id===id);
   if(reportIndex===-1) return;
   data.report.splice(reportIndex,1)
  return;
  }
}