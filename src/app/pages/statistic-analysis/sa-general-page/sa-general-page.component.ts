import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DatasetStats } from 'src/app/models/dataset/dataset-stats';
import { DatasetService } from 'src/app/services/dataset.service';

@Component({
  selector: 'app-sa-general-page',
  templateUrl: './sa-general-page.component.html',
  styleUrls: ['./sa-general-page.component.scss']
})
export class SaGeneralPageComponent implements OnInit {

  public gridOptions: GridOptions = {
    headerHeight: 30,
    rowHeight: 30,
    suppressMenuHide: true
  }
  public columnDef: Array<ColDef> = [
    { 
      headerName: 'Attribut',
      field: 'label',
      width: 200,
      filter: true,
      resizable: true,
      sortable: true
    }, { 
      headerName: 'Nb. Valeurs',
      field: 'countValues',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Nb. Valeurs Vides',
      field: 'countMissingValues',
      width: 175,
      filter: true,
      resizable: true,
      sortable: true,
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Somme',
      field: 'sum',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.sum.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Minimum',
      field: 'min',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.min.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: '1er Quartile',
      field: 'firstQuartile',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.firstQuartile.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Médiane',
      field: 'median',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.median.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Moyenne',
      field: 'average',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.average.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: '3éme Quartile',
      field: 'thirdQuartile',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.thirdQuartile.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Maximum',
      field: 'max',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.max.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Variance',
      field: 'variance',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.variance.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Ecart-Type',
      field: 'standardDeviation',
      width: 150,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.standardDeviation.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }, { 
      headerName: 'Ecart-type Relatif',
      field: 'relativeStandardDeviation',
      width: 175,
      filter: true,
      resizable: true,
      sortable: true,
      valueFormatter: params => params.data.relativeStandardDeviation.toFixed(2),
      cellStyle: { 'justify-content': "flex-end" }
    }
  ]
  public rowData;

  constructor(
    private _datasetService: DatasetService
  ) { }

  ngOnInit(): void {
    const attributes = this._datasetService.getDataset().getAttributes();
    const numericalStats = this._datasetService.getDataset().getStatistics().getNumericalStats();
    this.rowData = [];
    for(let key in numericalStats) {
      numericalStats[key].label = attributes.find(att => att.name === key).label;
      this.rowData.push(numericalStats[key]);
    }
  }
}
