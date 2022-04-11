import { Injectable } from "@nestjs/common";
import{ReportType,data}from "src/testdata/data"
import { v4 as uuid } from "uuid";
interface Report {amount:number;source:string};
@Injectable()
export class AppService{
  getAllReport(type:ReportType){
    return data.report.filter((report) => report.type===type);
  }
  getById(type:ReportType,id:string){
    return data.report.filter((report)=>report.type==type).find((report)=>report.id===id); 
  }
  CreateReport(type:ReportType,{amount,source}:Report){
    const newReport = {
      id:uuid(),
      source,
      amount,
      created_at:new Date(),
      updated_at:new Date(),
      type:type==='income'? ReportType.INCOME:ReportType.EXPENSE
    }  
    data.report.push(newReport); 
  }
}

