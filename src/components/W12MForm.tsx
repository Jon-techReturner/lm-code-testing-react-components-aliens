import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { DisplayData, SpeciesName, PlanetName, NumOfBeing, SelectedOption, ReasonForSparing } from './W12MData';
import PersonData from '../data/data';
import { submissionData } from '../data/submission-data';
import { v4 as uuidv4 } from "uuid";

const W12MForm = () => {
	submissionData.forEach((person) => (person.id = uuidv4()));
	const [submittedPerson, setSubmittedPerson] = useState<Array<PersonData>>(submissionData);


	const [speciesName, setSpeciesName] = useState<string>('');
    const [planetName, setPlanetName] = useState<string>('');
    const [numOfBeing, setNumOfBeing] = useState<number>(0);
	const [reasonForSparing, setReasonForSparing] = useState<string>('');
	const testNumOptions = ['4', 'Not 4'];
	const [selected, setSelected] = useState(testNumOptions[0]);

	const submitData = () => {
		const newPerson: PersonData = {
			speciesName,
			planetName,
			numOfBeing,
			selected,
			reasonForSparing,
			
		};
		console.log(newPerson);
		setSubmittedPerson(submittedPerson.concat([newPerson]));
		clearForm();
	};

	const clearForm = () => {
        setSpeciesName('');
        setPlanetName('');
		setNumOfBeing(0); 
		setSelected(testNumOptions[0]);  
		setReasonForSparing('');
        
	};

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form className="form__content">
				
				<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
				<PlanetName	planetName={planetName} onChangePlanetName={(e : any) => setPlanetName(e.target.value)} />
				<NumOfBeing	numOfBeing={numOfBeing} onChangeNumOfBeing={(e : any) => setNumOfBeing(e.target.value)} />
				<SelectedOption	selected={selected} onChangeSelectedOption={(e : any) => setSelected(e.target.value)} />
				<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(e : any) => setReasonForSparing(e.target.value)} />
				<div>
					<button onClick={(e) => {e.preventDefault();
							submitData();
						}} className="button button--style"> Submit Form
					</button>
				</div>
            </form>

			<div className='form__submitted'>
				{submittedPerson.map((person, i) => (
					<DisplayData 
						key={person.id}
						speciesName={person.speciesName}
						planetName={person.planetName}
						numOfBeing={person.numOfBeing}
						reasonForSparing={person.reasonForSparing}
						selected={person.selected}
					/>
				))}
			</div>
			
			
			

		</section>
	);
};

export default W12MForm;
