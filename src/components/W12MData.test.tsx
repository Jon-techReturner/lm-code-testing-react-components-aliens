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
            value: 'planetName', 
            name: 'speciesName',
            onChangePlanetName: jest.fn, 
        };
        render(<PlanetName {...requiredProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
    it('renders an <input> given required props', () => {
        const requiredProps: NumOfBeingProps = {
            value: '', 
            name: 'speciesName',
            onChangeNumOfBeing: jest.fn, 
        };
        render(<NumOfBeing {...requiredProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
    it('renders an <textarea> given required props', () => {
        const requiredProps: ReasonForSparingProps = {
            value: 'reasonForSparing', 
            name: 'speciesName',
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
            value: 'selected', 
            name: 'speciesName',
            onChangeSelectedOption: jest.fn, 
        };
        render(<SelectedOption {...requiredProps} />);
        const input = screen.getByRole('combobox');
        expect(input).toBeInTheDocument();
    });
    
});