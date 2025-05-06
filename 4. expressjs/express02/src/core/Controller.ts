export default class Controller {
  static load(controller: any, action: string) {
    const instance = new controller();
    return instance[action].bind(instance);
  }
}
