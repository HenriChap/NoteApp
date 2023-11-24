export interface Note{
    id:number;
    title:string;
    text:string;
}
export const NOTES: Notes[] =[
    {
        id:1,
        title:'First task',
        text: 'Making a list of notes'
    },
    {
        id:2,
        title:'Second task',
        text: 'Add new items to the list'
    }
]