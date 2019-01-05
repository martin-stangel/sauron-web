export class Share {
  'path': string;
  'username': string;
  'password': string;
  'workgroup': string;
}

export class Path {
  recursive: boolean;
  sourcePath: string;
  wildcards: string[];
}

export class Template {
  name: string;
  deleteSource: boolean;
  paths: Path[];
}
