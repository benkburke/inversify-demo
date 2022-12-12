import IDependency from "./IDependency";

export default class RealDependency implements IDependency {
  message() {
    return "real message";
  }
}
