"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("./inc/decorator");
// @ClassDecorator
// @Logger("a")
class User {
    constructor() {
        //   @PropertyDecorator
        this.name = "Hoàng An";
        //   @PropertyDecorator
        this.email = "hoangan.web@gmail.com";
        this.message = null;
        this.demoStr = null;
        this.data = ["Item 1", "Item 2", "Item 3"];
    }
    //   @MethodDecorator
    getName(a) {
        console.log("getName", a);
    }
    get latest() {
        return this.data[this.data.length - 1];
    }
    set latest(value) {
        this.data.push(value);
    }
    setName(value, a) {
        console.log(`value`, value);
        console.log(`a`, a);
    }
}
__decorate([
    (0, decorator_1.MinLength)(5),
    __metadata("design:type", Object)
], User.prototype, "message", void 0);
__decorate([
    (0, decorator_1.MinLength)(6),
    __metadata("design:type", Object)
], User.prototype, "demoStr", void 0);
__decorate([
    decorator_1.LogAccesser,
    decorator_1.ValidateBlacklist,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], User.prototype, "latest", null);
__decorate([
    __param(0, decorator_1.LogParam),
    __param(1, decorator_1.LogParam),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], User.prototype, "setName", null);
const user = new User();
user.setName("abc", "a");
