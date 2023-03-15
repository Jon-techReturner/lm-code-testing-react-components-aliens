import { useState } from 'react';
import W12MHeader from './W12MHeader';
import DisplayData from './W12MData';
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
			reasonForSparing,
			selected,
		};
		console.log(newPerson);
		setSubmittedPerson(submittedPerson.concat([newPerson]));
		clearForm();
	};

	const clearForm = () => {
        setSpeciesName('');
        setPlanetName('');
		setNumOfBeing(0); 
		setReasonForSparing('');
        setSelected(testNumOptions[0]);  
	};

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form className="form__content">
                <div><label htmlFor="card__name" className="card__label">Species Name: </label></div>
                <div><input  value={speciesName} onChange={e => setSpeciesName(e.target.value)} type="text" /></div>
                <div><label htmlFor="card__planet" className="card__label">Planet Name: </label></div>
                <div><input  value={planetName} onChange={e => setPlanetName(e.target.value)} type="text" /></div>
                <div><label htmlFor="card__numberBeing" className="card__label">Number of beings: </label></div>
                <div><input  value={numOfBeing > 0 ? numOfBeing.toString() : ''} onChange={e => setNumOfBeing(parseInt(e.target.value))} type="number" /></div>
                <div><label htmlFor="card__testNumber" className="card__label">What is 2+2: </label></div>
                <div><select value={selected} onChange={e => setSelected(e.target.value)} >
						{testNumOptions.map((value) => (
							<option value={value} key={value}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div><label htmlFor="card__reason" className="card__label">Reason for sparing: </label></div>
				<div><textarea id="card__reason" name='reasonForSparing' value={reasonForSparing} onChange={e => setReasonForSparing(e.target.value)} /></div>
				<div>
					<button onClick={(e) => {e.preventDefault();
							submitData();
						}} className="button button--style"> Submit Form
					</button>
				</div>
            </form>
			<div>
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
