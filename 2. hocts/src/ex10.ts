import {
  ClassDecorator,
  LogAccesser,
  LogParam,
  MethodDecorator,
  MinLength,
  PropertyDecorator,
  ValidateBlacklist,
} from "./inc/decorator";
import { Logger } from "./inc/decorator";
// @ClassDecorator
// @Logger("a")
class User {
  //   @PropertyDecorator
  name: string = "Hoàng An";
  //   @PropertyDecorator
  email: string = "hoangan.web@gmail.com";

  @MinLength(5)
  message: string | null = null;

  @MinLength(6)
  demoStr: string | null = null;

  private data: string[] = ["Item 1", "Item 2", "Item 3"];

  //   @MethodDecorator
  getName(a: string) {
    console.log("getName", a);
  }

  @LogAccesser
  @ValidateBlacklist
  get latest() {
    return this.data[this.data.length - 1];
  }

  set latest(value) {
    this.data.push(value);
  }

  setName(@LogParam value: string, @LogParam a: string) {
    console.log(`value`, value);
    console.log(`a`, a);
  }
}
const user = new User();
user.setName("abc", "a");
