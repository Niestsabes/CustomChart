import { ColDef } from 'ag-grid-community';
import { DatasetAttribute, DatasetAttributeType } from './dataset-attribute.interface';
import { DatasetStats } from './dataset-stats';

export class Dataset {

    public name: string;
    public lastModificationDate: Date;
    public _columns: Array<DatasetAttribute>;
    public _rowData: Array<Array<any>>;
    public _statistics: DatasetStats;

    constructor(name: string, data: Array<Array<string>>) {
        this.name = name;
        this.lastModificationDate = new Date(Date.now());

        this._columns = this.parseColumns(data[0]);
        this._rowData = this.parseRows(data.slice(1));
        this._statistics = new DatasetStats(this);

        console.log('Done');
    }

    private parseColumns(rowColumns: Array<string>): Array<DatasetAttribute> {
        let result = [];
        let id = 0;
        for (let label of rowColumns) {
            result.push({
                index: id,
                name: label.replace(/[\"]+/g, ''),
                label: label.replace(/[\"]+/g, ''),
                isActive: true
            });
            id++;
        }
        return result;
    }

    private parseRows(rowdata: Array<Array<string>>): Array<any> {
        let result = [];
        this._columns.forEach(column => column.type = DatasetAttributeType.NUMERICAL)
        for (let datum of rowdata) {
            // Quit if there is not data in the row
            if (this.isRowEmpty(datum)) {
                continue;
            }

            // Parse data to link it with attributes
            let newDatum = {}
            for (let i = 0; i < this._columns.length; i++) {
                let parsedDatum = datum[i] ? datum[i].replace(/[\"]+/g,'') : null;
                if (parseInt(parsedDatum, 10).toString() === parsedDatum) {
                    newDatum[this._columns[i].name] = parseInt(parsedDatum, 10);
                } else {
                    newDatum[this._columns[i].name] = parsedDatum;
                    if (this._columns[i].type === DatasetAttributeType.NUMERICAL && parsedDatum === "") {
                        this._columns[i].type = DatasetAttributeType.NUMERICAL
                    }
                    else {
                        this._columns[i].type = DatasetAttributeType.CONTEXTUAL
                    }
                }
            }
            result.push(newDatum);
        }
        return result;
    }

    private isRowEmpty(rowdata: Array<string>): boolean {
        return rowdata.filter(datum => datum === "").length > 0;
    }

    public getRowDataByAttributeName(attributeName: string): Array<any> {
        return this._rowData.map(datum => datum[attributeName]);
    }

    public getAttributes(): Array<DatasetAttribute> {
        return this._columns;
    }

    public getActiveAttributes(): Array<DatasetAttribute> {
        return this._columns.filter(col => col.isActive === true);
    }

    public getRowData(): Array<Array<any>> {
        return this._rowData;
    }

    public getNumericalAttributes(): Array<DatasetAttribute> {
        return this._columns.filter(attribute => attribute.type == DatasetAttributeType.NUMERICAL);
    }

    public getStatistics(): DatasetStats {
        return this._statistics;
    }

    get rowData(): Array<Array<any>> {
        return this._rowData;
    }

    get countRows(): number {
        return this.rowData.length;
    }

    get countColumns(): number {
        return this._columns.length;
    }

    get countNumericalAttributes(): number {
        return this._columns.filter(column => column.type === DatasetAttributeType.NUMERICAL).length
    }

    get countContextualAttributes(): number {
        return this._columns.filter(column => column.type === DatasetAttributeType.CONTEXTUAL).length
    }
}