export interface DatasetAttribute {
    index: number;
    name: string;
    label: string;
    description: string;
    type: DatasetAttributeType;
    unit: string;
    isActive: boolean;
}

export enum DatasetAttributeType {
    NUMERICAL = 'Numérique',
    CONTEXTUAL = 'Contextuel'
}