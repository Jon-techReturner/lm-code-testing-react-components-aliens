import {W12MData, W12MFormChangeHandler } from "../data/data.types";

export const DisplayData: React.FC<{form: W12MData}> = ({form}) => {
    return (
        <div>
           <p> <strong>Species Name:</strong>  <em>{form.speciesName}</em></p>
           <p><strong>Planet Name:</strong>  <em>{form.planetName}</em></p>
           <p><strong> Number of beings:</strong>  <em>{form.numOfBeing}</em></p>
           <p><strong> What is 2+2: </strong> <em>{form.selected}</em></p>
           <p><strong> Reason for sparing:</strong>  <em>{form.reasonForSparing}</em></p>
        </div>
    );
};

export interface SpeciesNameProps { 
    id: string;
    value: string;
    name: keyof W12MData;
	onChangeSpeciesName: W12MFormChangeHandler;
}
export interface PlanetNameProps { 
    id: string;
	value: string;
    name: keyof W12MData;
	onChangePlanetName: W12MFormChangeHandler;
}
export interface NumOfBeingProps { 
    id: string;
	value: string;
    name: keyof W12MData;
	onChangeNumOfBeing: W12MFormChangeHandler;
}
export interface SelectedOptionProps { 
    id: string;
	value: string;
    name: keyof W12MData;
	onChangeSelectedOption: W12MFormChangeHandler;
}
export interface ReasonForSparingProps { 
    id: string;
	value: string;
    name: keyof W12MData;
	onChangeReasonForSparing: W12MFormChangeHandler;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({ id, value, name,  onChangeSpeciesName}) => {
    return (
     <div>
         <label htmlFor='speciesName'>Species Name: </label>
         <input id={id}
                 type='text'
                 name={name}
                 value={value} 
                 onChange={(e) => {onChangeSpeciesName(e.target.value, name); }} 
                 placeholder="Enter Species Name" />
     </div>
    );
 };
 export const PlanetName: React.FC<PlanetNameProps> = ({ id, value, name,  onChangePlanetName})  => {
 
    return (
     <div>
         <label htmlFor='planetName'>Planet Name: </label>
         <input id={id} 
                 name={name}
                 type='text' 
                 value={value} 
                 onChange={(e) => {onChangePlanetName(e.target.value, name); }} 
                 placeholder="Enter Planet Name" />
 
     </div>
    );
 };
 
 export const NumOfBeing: React.FC<NumOfBeingProps> = ({ id, value, name,  onChangeNumOfBeing}) => {
    return (
     <div>
          <label htmlFor='numOfBeing'>Number of Beings: </label>
          <input id={id}
                 name={name}
                 type='text' 
                 value={(value ?? '').toString()} 
                 onChange={(e) => {onChangeNumOfBeing(e.target.value, name); }} 
                 placeholder="Enter Number of Beings" />
     </div>
    );
 };
 
 export const SelectedOption: React.FC<SelectedOptionProps> = ({ id, value, name,  onChangeSelectedOption}) => {
     const testNumOptions = [{value: 'NOT_SELECTED', display: '-'} , {value:  '4', display: '4'}, {value: 'Not 4', display: 'Not 4'}];
    return (
     <div>
          <label htmlFor='selectedOption'>What is 2+2?: </label>
          <select id={id}
                    name={name}
                    value={value} 
                    onChange={(e) => {onChangeSelectedOption(e.target.value, name); }}  >
             {testNumOptions.map((value, index) => (
                 <option key={index}
                         value={value.display} >
                     {value.display}
                 </option>
             ))}
         </select>
     </div>
    );
 };
 
 export const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ id, value, name,  onChangeReasonForSparing}) => {
    return (
     <div>
         <label htmlFor='reasonForSparing'>Reason for Sparing: </label>
          <textarea id={id} 
                     name={name}
                     value={value} 
                     onChange={(e) => {onChangeReasonForSparing(e.target.value, name); }}
                     placeholder='Enter Reason for Sparing' />
     </div>
    );
 };
