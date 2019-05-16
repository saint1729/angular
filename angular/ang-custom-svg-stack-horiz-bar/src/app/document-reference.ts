import { Injectable } from '@angular/core';


function _document(): any {
  return document;
}


@Injectable()
export class DocumentReference {
  get nativeDocument(): any {
    return _document();
  }
}
