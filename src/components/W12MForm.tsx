import { useState } from 'react';
import W12MHeader from './W12MHeader';
import  { DisplayData, SpeciesName, PlanetName, NumOfBeing, SelectedOption, ReasonForSparing } from './W12MData';
import { W12MFormChangeHandler, W12MData } from '../data/data.types';

const defaultFormData: W12MData = {
	speciesName: '',
	planetName: '',
	numOfBeing: null,
	reasonForSparing: '',
	selected: 'NOT_SELECTED',
};

const W12MForm = () => {
	const [newW12MData, setNewW12MData] = useState<W12MData>(defaultFormData);

	const onChangeHandler: W12MFormChangeHandler = <
		TKey extends keyof W12MData
	>(
		value: W12MData[TKey],
		name: TKey
	) => {
		setSubmitted(false);
		const newData: W12MData = { ...newW12MData };
		newData[name] = value;
		setNewW12MData(newData);
	};

	const [submitted, setSubmitted] = useState(false);

	return (
		<section className='W12MForm'>
			
			<form className="form__content"
							data-testid='W12MForm'
							onSubmit={(e) => {
								e.preventDefault();
								setSubmitted(true);
							}}>
				<W12MHeader />
				<hr />
				<SpeciesName value={newW12MData.speciesName} onChangeSpeciesName={onChangeHandler} name="speciesName"
								/>
				<hr />
				<PlanetName	value={newW12MData.planetName} onChangePlanetName={onChangeHandler} name="planetName" />
				<hr />
				<NumOfBeing	value={(newW12MData.numOfBeing ?? '').toString()} onChangeNumOfBeing={onChangeHandler} name="numOfBeing" />
				<hr />
				<SelectedOption	value={newW12MData.selected} onChangeSelectedOption={ onChangeHandler} name="selected" />
				<hr />
				<ReasonForSparing value={newW12MData.reasonForSparing} onChangeReasonForSparing={onChangeHandler} name="reasonForSparing" />
				<hr />
				<div>
					<button type='submit'>Submit Form </button>
				</div>
            </form>
			{submitted && <DisplayData form={newW12MData} />}
			
			
			

		</section>
	);
};

export default W12MForm;
