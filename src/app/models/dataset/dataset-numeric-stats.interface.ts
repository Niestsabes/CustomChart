export class DatasetNumericStats {
    public label: string;
    public countValues: number;
    public countMissingValues: number;
    public sum: number;
    public min: number;
    public firstQuartile: number;
    public median: number;
    public average: number;
    public thirdQuartile: number;
    public max: number;
    public variance: number;
    public standardDeviation: number;
    public relativeStandardDeviation: number;

    constructor(rowData: Array<number>) {
        this.computeStats(rowData);
    }

    public computeStats(rowData: Array<number>): void {
        rowData.sort((a, b) => a - b);

        // Sort row data a count values
        const nbTotalValues = rowData.length;
        rowData = rowData.filter(datum => datum != null);
        this.countValues = rowData.length;
        this.countMissingValues = nbTotalValues - this.countValues;

        // Get min and max
        this.min = rowData[0];
        this.max = rowData[rowData.length - 1];

        // Get sum, average
        this.sum = 0;
        for (let datum of rowData) {
            this.sum += datum;
        }
        this.average = this.sum / this.countValues;
        
        // Get variance, standard deviation and relative standard deviation
        this.variance = 0;
        for (let datum of rowData) {
            this.variance += Math.pow(datum - this.average, 2);
        }
        this.variance /= this.countValues;
        this.standardDeviation = Math.sqrt(this.variance);
        this.relativeStandardDeviation = this.standardDeviation / this.average;

        // Get 1st & 3rd quartiles, and median
        const firstQuartileIndex = Math.round(this.countValues / 4);
        const medianIndex = Math.round(this.countValues / 2);
        const thirdQuartileIndex = Math.round(this.countValues / 4 * 3);
        this.firstQuartile = rowData[firstQuartileIndex];
        this.median = rowData[medianIndex];
        this.thirdQuartile = rowData[thirdQuartileIndex];
    }
}