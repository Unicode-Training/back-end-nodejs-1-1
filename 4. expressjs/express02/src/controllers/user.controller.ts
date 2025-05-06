import { Request, Response } from "express";
import UserService from "../services/user.service";

export default class UserController {
  constructor() {}
  index(req: Request, res: Response) {
    const userService = new UserService();
    res.json({ data: userService.findAll() });
  }
  private something() {
    return "something";
  }
}

//Dependencies Injection
/*
class A {
  getAll() {
  }
}

class B {
 constructor(private readonly a: A, private readonly c: C) {}
 method() {
   //Sử dụng được this.a.getAll()
 }
}

const a = new A()
const b = new B(a);
b.method()
*/
