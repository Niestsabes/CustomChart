import { Injectable } from '@angular/core';
import { Dataset } from '../models/dataset/dataset';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  private _dataset: Dataset;

  constructor() { }

  public setDataset(dataset: Dataset) {
    this._dataset = dataset;
  }

  public getDataset() {
    return this._dataset;
  }
}
