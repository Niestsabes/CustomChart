import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-renderer-checkbox',
  templateUrl: './cell-renderer-checkbox.component.html',
  styleUrls: ['./cell-renderer-checkbox.component.scss']
})
export class CellRendererCheckboxComponent implements ICellRendererAngularComp {

  private _params: any;
  private _gui: HTMLElement;
  private _value: boolean;

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this._params = params;
    this._value = params.value;
  }

  refresh(params: any): boolean {
    return true;
  }
 
  getGui(): HTMLElement {
    if (this._gui == undefined) {
      this._gui = document.getElementById('cell-editor-checkbox')
    } 
    return this._gui;
  }

  getValue() {
    return this._value;
  }

  onChange(): void {
    this._value = !this._value;
    this._params.data[this._params.colDef.field] = this._value;
  }
}
