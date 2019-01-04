export class DataExportShare {
  'path': string;
  'username': string;
  'password': string;
  'workgroup': string;

  get mount() {
    return '/mnt/sauron/smb' + this.path.substr(1);
  }
}
