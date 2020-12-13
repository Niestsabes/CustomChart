import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { CellRendererCheckboxComponent } from 'src/app/components/grid/cells/cell-renderer-checkbox/cell-renderer-checkbox.component';
import { Dataset } from 'src/app/models/dataset/dataset';
import { DatasetService } from 'src/app/services/dataset.service';

@Component({
  selector: 'app-dm-attribute-page',
  templateUrl: './dm-attribute-page.component.html',
  styleUrls: ['./dm-attribute-page.component.scss']
})
export class DmAttributePageComponent implements OnInit {

  public columnDefs: Array<ColDef>  = [
    {
      headerName: 'Actif',
      field: 'isActive',
      sortable: true,
      filter: true,
      resizable: true,
      width: 100,
      cellRendererFramework: CellRendererCheckboxComponent,
      cellRendererParams: {}
    }, {
      headerName: 'Label',
      field: 'label',
      sortable: true,
      filter: true,
      editable: true,
      resizable: true
    }, {
      headerName: 'Type',
      field: 'type',
      sortable: true,
      filter: true, 
      resizable: true,
      width: 120
    }, {
      headerName: 'Unité',
      field: 'unit',
      sortable: true,
      filter: true,
      editable: true,
      resizable: true,
      width: 150
    }, {
      headerName: 'Description',
      field: 'description',
      sortable: true,
      filter: true, 
      editable: true,
      resizable: true,
      flex: 1
    }
  ];
  public gridOptions: GridOptions  = {
    headerHeight: 30,
    rowHeight: 30,
    suppressMenuHide: true
  }

  constructor(
    private _datasetService: DatasetService
  ) { }

  ngOnInit(): void {
  }

  get dataset(): Dataset {
    return this._datasetService.getDataset();
  }
}
