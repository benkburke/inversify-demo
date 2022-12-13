import { injectable, inject } from "inversify";
import Types from "./Dependencies/Types";
import IDependency from "./Dependencies/IDependency";

@injectable()
export default class AppRepository {
  @inject(Types.IDependency)
  dependency: IDependency;

  constructor() {
    console.log("got here");
  }

  load() {
    return this.dependency.message();
  }
}
