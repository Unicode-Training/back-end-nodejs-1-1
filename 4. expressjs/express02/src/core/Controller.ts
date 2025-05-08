import UserService from "../services/user.service";
// import "reflect-metadata";
export default class Controller {
  static load(controller: any, action: string) {
    const dependencies = Reflect.getMetadata("design:paramtypes", controller);

    const DIContainer = (target: any) => {
      if (!target) {
        return [];
      }
      const intanceDependecies = target.map((dependency: any) => {
        const metadata = Reflect.getMetadata("design:paramtypes", dependency);

        return new dependency(...DIContainer(metadata));
      });
      return intanceDependecies;
    };

    const intanceDependecies = DIContainer(dependencies);
    // const userService = new UserService();
    const instance = new controller(...intanceDependecies);
    return instance[action].bind(instance);
  }
}
