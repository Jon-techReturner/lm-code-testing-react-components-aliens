import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { W12MData } from '../data/data.types';
import { SpeciesName, SpeciesNameProps,
        PlanetName, PlanetNameProps,
        NumOfBeing, NumOfBeingProps,
        SelectedOption, SelectedOptionProps,
        ReasonForSparing, ReasonForSparingProps
        } from './W12MData';


describe('<InputText>', () => {
    it('renders an <input> given required props', () => {
        const requiredProps: SpeciesNameProps = {
            id: 'speciesName', 
            value: 'speciesName', 
            name: 'speciesName',
            onChangeSpeciesName: jest.fn, 
        };
        render(<SpeciesName {...requiredProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
    it('renders an <input> given required props', () => {
        const requiredProps: PlanetNameProps = {
            id: 'planetName',
            value: 'planetName', 
            name: 'planetName',
            onChangePlanetName: jest.fn, 
        };
        render(<PlanetName {...requiredProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
    it('renders an <input> given required props', () => {
        const requiredProps: NumOfBeingProps = {
            id: 'numOfBeing',
            value: '', 
            name: 'numOfBeing',
            onChangeNumOfBeing: jest.fn, 
        };
        render(<NumOfBeing {...requiredProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
    it('renders an <textarea> given required props', () => {
        const requiredProps: ReasonForSparingProps = {
            id: 'reasonForSparing', 
            value: 'reasonForSparing', 
            name: 'reasonForSparing',
            onChangeReasonForSparing: jest.fn, 
        };
        render(<ReasonForSparing {...requiredProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
});

describe('<SelectInput>', () => {
    it('renders an <selectinput> given required props', () => {
        const requiredProps: SelectedOptionProps = {
            id: 'selected', 
            value: 'selected', 
            name: 'selected',
            onChangeSelectedOption: jest.fn, 
        };
        render(<SelectedOption {...requiredProps} />);
        const input = screen.getByRole('combobox');
        expect(input).toBeInTheDocument();
    });
    
});