import pgAdmin from '../pgadmin';
import  FileManagerModule  from '../misc/file_manager/FileManagerModule';

if(!pgAdmin.Tools) {
  pgAdmin.Tools = {};
}
pgAdmin.Tools.FileManager = FileManagerModule.getInstance(pgAdmin);


export function showFileManager(...args) {
  pgAdmin.Tools.FileManager.show(...args);
}
