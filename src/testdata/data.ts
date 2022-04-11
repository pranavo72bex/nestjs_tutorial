export enum ReportType{
    INCOME="income",
    EXPENSE="expense"
}
export const data = {
    report:[
        {
            id:'uuid1',
            source:'source',
            amount:100,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.EXPENSE,
        },
        {
            id:'uuid2',
            source:'source2',
            amount:200,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.EXPENSE,
        },
        {
            id:'uuid3',
            source:'source3',
            amount:300,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME,
        },
        {
            id:'uuid4',
            source:'source4',
            amount:400,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.EXPENSE,
        }
    ],
};
interface Data{
    report:{
        id:string,
        source:string,
        amount:number,
        created_at:Date,
        updated_at:Date,
        type:ReportType,
    }[];
}
