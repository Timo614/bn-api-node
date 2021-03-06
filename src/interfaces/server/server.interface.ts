export interface ServerInterface {
  protocol: string;
  host: string;
  port: number;
  basePath: string;
  apiVersion: string;
  prefix: string;
}

export const instanceOfServer = (base: any = {}): ServerInterface => {
  base.prefix =
    base.prefix ||
    false;

  let instance = {
    ...{
      protocol: "http",
      host: "localhost",
      port: 9000,
      basePath: "",
      apiVersion: "v1",
      prefix: false
    },
    ...base
  };
    instance.prefix = instance.prefix || `${instance.protocol}://${instance.host}:${instance.port}${instance.basePath}`;
  return instance as ServerInterface;
};
