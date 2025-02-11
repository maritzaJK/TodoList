export interface Taks {
  id:number;
  todo:string;
  completed:boolean;
  userId:number;
}

export interface Todo{
  limit:number;
  skip:number;
  todos:Taks[];
  total:number;
}

export interface Atodo{
  todo:string;
  completed:boolean;
  userId:number;
}

export interface Utodo{
  completed:boolean
}

export interface Deltodo{

    id: 1,
    todo: string,
    completed: boolean,
    userId: number,
    isDeleted: boolean,
    deletedOn: Date /* ISOTime */

}
