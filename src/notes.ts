export interface Note{
    id:number;
    title:string;
    text:string;
    isDone: boolean;
}
export const NOTES: Note[] =[
    {
        id:1,
        title:'First task',
        text: 'Making a list of notes',
        isDone: false
    },
    {
        id:2,
        title:'Second task',
        text: 'Add new items to the list',
        isDone: false
    }
];