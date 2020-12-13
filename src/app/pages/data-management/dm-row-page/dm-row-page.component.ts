import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Dataset } from 'src/app/models/dataset/dataset';
import { DatasetService } from 'src/app/services/dataset.service';

@Component({
  selector: 'app-dm-row-page',
  templateUrl: './dm-row-page.component.html',
  styleUrls: ['./dm-row-page.component.scss']
})
export class DmRowPageComponent implements OnInit {

  public columnDef: Array<ColDef> ;
  public gridOptions: GridOptions = {
    headerHeight: 30,
    rowHeight: 30,
    suppressMenuHide: true
  }

  constructor(
    private _datasetService: DatasetService
  ) { }

  ngOnInit(): void {
    this.columnDef = this.dataset.getActiveAttributes().map(attribute => {
      return {
        headerName: attribute.label,
        field: attribute.name,
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1
      }
    });
  }

  get dataset(): Dataset {
    return this._datasetService.getDataset();
  }
}
