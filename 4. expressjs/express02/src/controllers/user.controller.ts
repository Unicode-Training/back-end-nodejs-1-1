import { Request, Response } from "express";
import UserService from "../services/user.service";
import { Injectable } from "../core/decorators";

@Injectable
export default class UserController {
  constructor(private userService: UserService) {}
  index(req: Request, res: Response) {
    const users = this.userService.findAll();
    res.json({ data: users });
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
