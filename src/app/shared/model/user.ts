export interface User {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: string,
  email: string,
  phone: number,
  username: string,
  password: string,
  birthDate: Date,
  image: string,
  bloodGroup: string,
  height: number,
  weight:number,
  eyeColor: string,
  hair:string
}

export interface login{
  username:string,
  password:string,
  expiresInMins:number
}
