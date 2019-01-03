export class DataExportPath {
  recursive: boolean;
  sourcePath: string;
  wildcards: string[];
}

export class DataExportTemplate {
  name: string;
  deleteSource: boolean;
  paths: DataExportPath[];
}
