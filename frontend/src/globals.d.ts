
declare module "*.module.css";
declare module "*.module.scss";
type Nullable<T> = {
    [K in keyof T]: T[K] | null
}