"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDecorator = ClassDecorator;
exports.Logger = Logger;
exports.MethodDecorator = MethodDecorator;
exports.PropertyDecorator = PropertyDecorator;
exports.MinLength = MinLength;
exports.LogAccesser = LogAccesser;
exports.ValidateBlacklist = ValidateBlacklist;
exports.LogParam = LogParam;
//Định nghĩa các decorator
function ClassDecorator(constructor) {
    console.log(`Khởi tạo class: `, constructor.name);
}
function Logger(params) {
    return (constructor) => {
        console.log(`params`, params);
        console.log(`Logger: `, constructor.name);
    };
}
function MethodDecorator(target, key, descriptor) {
    //   console.log(`target`, target);
    //   console.log(`key`, key);
    //   console.log(`descriptor`, descriptor);
    const methodName = key; //Lấy tên method
    console.log(`methodName`, methodName);
    const method = descriptor.value; //Lấy hàm ban đầu
    //   console.log(method);
    descriptor.value = function (...args) {
        console.log(`Method ${methodName} call with aruments: `, args);
        // return method.apply(this, args);
        return method(...args);
    };
}
function PropertyDecorator(target, key) {
    console.log(`target`, target);
    console.log(`key`, key);
}
function MinLength(min) {
    return (target, key) => {
        // console.log(`key`, key);
        // console.log(`min`, min);
        let value;
        Object.defineProperty(target, key, {
            set: (newValue) => {
                if ((newValue === null || newValue === void 0 ? void 0 : newValue.length) && newValue.length < min) {
                    throw new Error(`Độ dài của ${key} phải từ ${min} ký tự`);
                }
                value = newValue;
            },
            get: () => value,
        });
    };
}
function LogAccesser(target, key, descriptor) {
    //   console.log(`target`, target);
    //   console.log(`key`, key);
    //   console.log(`descriptor`, descriptor);
    const methodName = key;
    const method = descriptor.get;
    descriptor.get = function () {
        // console.log("Method", methodName, "call");
        return method === null || method === void 0 ? void 0 : method.apply(this);
    };
}
function ValidateBlacklist(target, key, descriptor) {
    const method = descriptor.set;
    descriptor.set = function (newValue) {
        if (newValue.toLowerCase().includes("admin")) {
            //   throw new Error("Admin is not allowed");
            return;
        }
        return method === null || method === void 0 ? void 0 : method.apply(this, [newValue]);
    };
}
function LogParam(target, key, index) {
    console.log(`target`, target);
    console.log(`key`, key);
    console.log(`index`, index);
}
