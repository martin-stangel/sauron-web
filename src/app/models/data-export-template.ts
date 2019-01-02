export class DataExportPath {
  recursive: boolean;
  sourcePath: string;
  wildcards: string[];
}

export class DataExportTemplate {
  id: number;
  name: string;
  deleteSource: boolean;
  paths: DataExportPath[];
}
