export class DatasetContextualStats {
    public entities: Array<{ modality: string, population: number, ratio: number }>

    constructor(rowData: Array<number>) {
        this.computeStats(rowData);
    }

    public computeStats(rowData): void {
        const nbTotalValues = rowData.length;
    }
}