import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Dataset } from 'src/app/models/dataset/dataset';
import { DatasetService } from 'src/app/services/dataset.service';
import { PapaParseResult } from 'src/app/models/papa-parse/PapaParseResult';
import { PapaParseService } from 'src/app/services/papa-parse.service';

@Component({
  selector: 'app-load-data-page',
  templateUrl: './load-data-page.component.html',
  styleUrls: ['./load-data-page.component.scss']
})
export class LoadDataPageComponent implements OnInit {

  public FILE_MAX_UPLOAD_SIZE = 8000000;
  public FILE_SUPPORTED_TYPES = ['application/vnd.ms-excel'];

  public importFormGroup: FormGroup;
  public listSeparators = [
    {label: 'Virgule', value: ','},
    {label: 'Point-virgule', value: ';'}
  ]
  public isImportSuccess: boolean|null = null;

  private _importSubcription : Subscription;
  private _importedFile: File;

  constructor(
    private _datasetService: DatasetService,
    private _papaParseService: PapaParseService,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this.importFormGroup = new FormGroup({
      attributeSeparator: new FormControl(this.listSeparators[0].value),
      rowSeparator: new FormControl('\n'),
      datafile: new FormControl()
    });
  }

  /**
   * Check, parse and create a dataset with the data of the dropped file
   * @event (onFileDropped) on drop area
   * @param files 
   */
  public onFileDropped(files: FileList): void {
    if (files.length === 0) return;
    this._importedFile = files[0];
  }

  /**
   * Send query to parse imported file
   */
  public onSubmit() {
    if (this._importSubcription) this._importSubcription.unsubscribe();
    this._importSubcription = this._papaParseService.parseFile(this._importedFile).subscribe({
      next: (result: PapaParseResult) => {
        this.isImportSuccess = true;
        this._datasetService.setDataset(new Dataset('New Dataset', result.data));
      },
      error: (err: Error) => {
        this.isImportSuccess = false;
      }
    })
  }
}
