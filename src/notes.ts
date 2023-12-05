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
        text: 'Make a list of tasks',
        isDone: false
    },
];