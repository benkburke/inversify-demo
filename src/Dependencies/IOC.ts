import "reflect-metadata";
import TYPES from "./Types";
import Repository from "../Repository";
import IDependency from "./IDependency";
import FakeDependency from "./FakeDependency";
import RealDependency from "./RealDependency";

let container = null;

const createContainer = context => {};

export { container, createContainer };
