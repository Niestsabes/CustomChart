import { ColDef, _ } from 'ag-grid-community';
import { Dataset } from './dataset';
import { DatasetContextualStats } from './dataset-contextual-stats.interface';
import { DatasetNumericStats } from './dataset-numeric-stats.interface';
import { Matrix } from './../utils/matrix';
import { DatasetAttributeType } from './dataset-attribute.interface';

export class DatasetStats {
    private _numericalStats: {[key: string]: DatasetNumericStats};
    private _contextualStats: {[key: string]: DatasetContextualStats};
    private _covarienceMatrix: Matrix;

    constructor(dataset: Dataset) {
        this._numericalStats = {};
        this._contextualStats = {};
        for (let attribute of dataset.getAttributes()) {
            if (attribute.type === DatasetAttributeType.NUMERICAL) {
                this._numericalStats[attribute.name] = new DatasetNumericStats(
                    dataset.getRowDataByAttributeName(attribute.name)
                );
            }
            else {
                this._contextualStats[attribute.name] = new DatasetContextualStats(
                    dataset.getRowDataByAttributeName(attribute.name)
                );
            }
        }
        this.computeCovarianceMatrix(dataset);
        console.log(this._covarienceMatrix);
    }
    
    private computeCovarianceMatrix(dataset: Dataset): void {
        const numericalAttributes = dataset.getNumericalAttributes();
        const nbValues = dataset.getRowData().length;
        this._covarienceMatrix = new Matrix(numericalAttributes.length);

        for (let x = 0; x < numericalAttributes.length; x++) {
            for (let y = 0; y < x; y++) {
                if (x === y) {
                    this._covarienceMatrix.setValue(x, y, 1);
                }
                else {
                    let sum = 0;
                    for (let i = 0; i < nbValues; i++) {
                        let xVal = dataset.getRowData()[i][numericalAttributes[x].index] - this._numericalStats[numericalAttributes[x].name].sum;
                        let yVal = dataset.getRowData()[i][numericalAttributes[y].index] - this._numericalStats[numericalAttributes[y].name].sum;
                        sum += xVal * yVal;
                    }
                    this._covarienceMatrix.setValue(x, y, sum / nbValues);
                }
            }
        }
    }

    public getNumericalStats(): {[key: string]: DatasetNumericStats} {
        return this._numericalStats;
    }

    public getContextualGridData(): void {
        
    }
}