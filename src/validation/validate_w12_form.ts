import {
	NUMBER_OF_BEINGS_MIN_SIZE,
	PLANET_NAME_MAX_LENGTH,
	PLANET_NAME_MIN_LENGTH,
	REASON_SPARING_MAX_LENGTH,
	REASON_SPARING_MIN_LENGTH,
	SPECIES_NAME_MAX_LENGTH,
	SPECIES_NAME_MIN_LENGTH,
} from './validation_constants';
import {
	maxLength,
	minLength,
	minValue,
	mustBeNumeric,
	mustEqual,
	mustNotBeNull,
	noNumbers,
	noSpecialChars,
	ValidationFunction,
} from './validation_rules';

export const validateSpeciesName: (value: string) => string[] = (value) => {
	const rules = [
		minLength(SPECIES_NAME_MIN_LENGTH),
		maxLength(SPECIES_NAME_MAX_LENGTH),
		noNumbers(),
		noSpecialChars(),
	];

	return apply(rules, value);
};

export const validatePlanetName: (value: string) => string[] = (value) => {
	const rules = [
		minLength(PLANET_NAME_MIN_LENGTH),
		maxLength(PLANET_NAME_MAX_LENGTH),
		noSpecialChars(),
	];

	return apply(rules, value);
};

export const validateReasonForSparing: (value: string) => string[] = (
	value
) => {
	const rules = [
		minLength(REASON_SPARING_MIN_LENGTH),
		maxLength(REASON_SPARING_MAX_LENGTH),
		noSpecialChars(),
	];

	return apply(rules, value);
};

export const validateNumberOfBeings: (value: string) => string[] = (value) => {
	const rules = [mustBeNumeric(), minValue(NUMBER_OF_BEINGS_MIN_SIZE)];

	return apply(rules, value);
};

export const validateTwoPlusTwo: (value: string) => string[] = (value) => {
	const rules = [mustNotBeNull(), mustEqual('4')];

	return apply(rules, value);
};

const apply = (rules: ValidationFunction[], value: string) => {
	return (
		rules
			.map((r) => r(value))
			.filter(Boolean) as string[]
	);

};
