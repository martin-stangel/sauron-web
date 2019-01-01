export class DataExportPath {
  id: number;
  recursive: boolean;
  source_path: string;
  wildcards: string[];
}

export class DataExportTemplate {
  id: number;
  name: string;
  delete_source: boolean;
  paths: DataExportPath[];
}
