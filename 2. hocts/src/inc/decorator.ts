//Định nghĩa các decorator
export function ClassDecorator(constructor: Function) {
  console.log(`Khởi tạo class: `, constructor.name);
}

export function Logger(params: any) {
  return (constructor: Function) => {
    console.log(`params`, params);
    console.log(`Logger: `, constructor.name);
  };
}

export function MethodDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  //   console.log(`target`, target);
  //   console.log(`key`, key);
  //   console.log(`descriptor`, descriptor);
  const methodName = key; //Lấy tên method
  console.log(`methodName`, methodName);
  const method = descriptor.value; //Lấy hàm ban đầu
  //   console.log(method);

  descriptor.value = function (...args: any) {
    console.log(`Method ${methodName} call with aruments: `, args);
    // return method.apply(this, args);
    return method(...args);
  };
}

export function PropertyDecorator(target: any, key: string) {
  console.log(`target`, target);
  console.log(`key`, key);
}

export function MinLength(min: number) {
  return (target: any, key: string) => {
    // console.log(`key`, key);
    // console.log(`min`, min);
    let value: string;
    Object.defineProperty(target, key, {
      set: (newValue: string) => {
        if ((newValue as string)?.length && newValue.length < min) {
          throw new Error(`Độ dài của ${key} phải từ ${min} ký tự`);
        }
        value = newValue;
      },
      get: () => value,
    });
  };
}

export function LogAccesser(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  //   console.log(`target`, target);
  //   console.log(`key`, key);
  //   console.log(`descriptor`, descriptor);
  const methodName = key;
  const method = descriptor.get;
  descriptor.get = function () {
    // console.log("Method", methodName, "call");
    return method?.apply(this);
  };
}

export function ValidateBlacklist(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.set;
  descriptor.set = function (newValue: string) {
    if (newValue.toLowerCase().includes("admin")) {
      //   throw new Error("Admin is not allowed");
      return;
    }
    return method?.apply(this, [newValue]);
  };
}

export function LogParam(target: any, key: string, index: number) {
  console.log(`target`, target);
  console.log(`key`, key);
  console.log(`index`, index);
}
