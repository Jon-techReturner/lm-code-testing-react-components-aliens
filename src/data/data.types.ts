export type SelectOptions = 'NOT_SELECTED' | '4' | 'Not 4';


export type W12MData = {
    speciesName: string;
    planetName: string;
    numOfBeing: null | number;
    reasonForSparing: string;
    selected: SelectOptions;
};


export type W12MFormChangeHandler = <TKey extends keyof W12MData>(
	value: W12MData[TKey],
	name: TKey
) => void;