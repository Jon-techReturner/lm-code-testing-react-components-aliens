interface DisplayProps{
    speciesName: string;
    planetName: string;
    numOfBeing: number;
    selected: string;
    reasonForSparing: string;
};

export const DisplayData: React.FC<DisplayProps> = ({speciesName, planetName, numOfBeing, selected, reasonForSparing}) => {
    return (
        <div>
           <p> <strong>Species Name:</strong>  <em>{speciesName}</em></p>
           <p><strong>Planet Name:</strong>  <em>{planetName}</em></p>
           <p><strong> Number of beings:</strong>  <em>{numOfBeing}</em></p>
           <p><strong> What is 2+2: </strong> <em>{selected}</em></p>
           <p><strong> Reason for sparing:</strong>  <em>{reasonForSparing}</em></p>
        </div>
    );
};

interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface NumOfBeingProps { 
	numOfBeing: number;
	onChangeNumOfBeing: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface SelectedOptionProps { 
	selected: string;
	onChangeSelectedOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
interface ReasonForSparingProps { 
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName}) => {
   return (
    <div>
        <label htmlFor='speciesName'>Species Name: </label>
        <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} />
    </div>
   );
};
export const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName}) => {

   return (
    <div>
        <label htmlFor='planetName'>Planet Name: </label>
        <input id='planetName' type='text' value={planetName} onChange={onChangePlanetName} />

    </div>
   );
};

export const NumOfBeing: React.FC<NumOfBeingProps> = ({ numOfBeing, onChangeNumOfBeing}) => {
   return (
    <div>
         <label htmlFor='numOfBeing'>Number of being: </label>
         <input id='numOfBeing' type='number' value={numOfBeing > 0 ? numOfBeing.toString(): ''} onChange={onChangeNumOfBeing} />
    </div>
   );
};

export const SelectedOption: React.FC<SelectedOptionProps> = ({ selected, onChangeSelectedOption}) => {
    const testNumOptions = ['4', 'Not 4'];
   return (
    <div>
         <label htmlFor='selectedOption'>What is 2+2: </label>
         <select id="selectedOption" value={selected} onChange={onChangeSelectedOption} >
            {testNumOptions.map((value) => (
                <option value={value} key={value}>
                    {value}
                </option>
            ))}
        </select>
    </div>
   );
};

export const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing}) => {
   return (
    <div>
        <label htmlFor='reasonForSparing'>Reason for sparing: </label>
         <textarea id="reasonForSparing" name='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing} />
    </div>
   );
};

