export interface PapaParseResult {
    data: Array<Array<any>>,
    errors: Array<string>,
    meta: {
        aborted: boolean,
        cursor: number,
        delimiter: string,
        linebreak: string,
        truncated: false
    }
}