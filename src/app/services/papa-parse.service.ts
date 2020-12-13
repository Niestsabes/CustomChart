import { Injectable } from '@angular/core';
import { parse } from 'papaparse';
import { Observable } from 'rxjs';
import { PapaParseResult } from '../models/papa-parse/PapaParseResult';

@Injectable({
  providedIn: 'root'
})
export class PapaParseService {
  public FILE_MAX_UPLOAD_SIZE = 8000000;
  public FILE_SUPPORTED_TYPES = ['application/vnd.ms-excel'];

  constructor() { }

  public parseFile(file: File): Observable<PapaParseResult> {
    if (file.size > this.FILE_MAX_UPLOAD_SIZE) {
      throw new Error("File too heavy !");
    }
    else if (!this.FILE_SUPPORTED_TYPES.includes(file.type)) {
      throw new Error("Not supported file type !");
    }
    return new Observable<PapaParseResult>((observer) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const text = fileReader.result.toString();
        observer.next(parse(text));
      };
      fileReader.readAsText(file);
    });
  }
}
