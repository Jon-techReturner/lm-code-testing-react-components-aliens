import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';
import user from '@testing-library/user-event';

async function enterIntoTextBox(
	textBoxes: HTMLElement[],
	id: string,
	value: string
) {
	const input = textBoxes.find((t) => t.id === id);
	expect(input).toBeInTheDocument();
	if (input) {
		await user.type(input, value);
	}
}


describe('<W12MForm>', () => {
	it('renders form element', () => {
		render(<W12MForm />);
		const form = screen.getByTestId('W12MForm');
		expect(form).toBeInTheDocument();
	});
	it('displays all entered values on submit', async () => {
		render(<W12MForm />);

		const textBoxes = screen.getAllByRole('textbox')

		await enterIntoTextBox(textBoxes, 'planetName', 'Earth');
		await enterIntoTextBox(textBoxes, 'reasonForSparing', 'It is nice to be nice');
		await enterIntoTextBox(textBoxes, 'numberOfBeings', '12345');

		const selectedOption = screen.getAllByRole('combobox').find((c) => c.id === 'selected');
		expect(selectedOption).toBeInTheDocument();
		if (selectedOption) {
			await user.selectOptions(selectedOption, '4');
		}

		const submit = screen.getByRole('button');

		await user.click(submit);

		expect(screen.getByText('Humans')).toBeInTheDocument();
		expect(screen.getByText('Earth')).toBeInTheDocument();
		expect(screen.getByText('It is nice to be nice')).toBeInTheDocument();
		expect(screen.getByText('12345')).toBeInTheDocument();
		expect(screen.getByText('4')).toBeInTheDocument();
	});

	
});
