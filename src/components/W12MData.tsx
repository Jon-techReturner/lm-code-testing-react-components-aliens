import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { W12MData, W12MFormChangeHandler } from "../data/data.types";

export interface SpeciesNameProps {
    id: string;
    value: string;
    name: keyof W12MData;
    onChangeSpeciesName: W12MFormChangeHandler;
    validate: (value: string) => string[];
}
export interface PlanetNameProps {
    id: string;
    value: string;
    name: keyof W12MData;
    onChangePlanetName: W12MFormChangeHandler;
    validate: (value: string) => string[];
}
export interface NumOfBeingProps {
    id: string;
    value: string;
    name: keyof W12MData;
    onChangeNumOfBeing: W12MFormChangeHandler;
    validate: (value: string) => string[];
}
export interface SelectedOptionProps {
    id: string;
    value: string;
    name: keyof W12MData;
    onChangeSelectedOption: W12MFormChangeHandler;
    validate: (value: string) => string[];
}
export interface ReasonForSparingProps {
    id: string;
    value: string;
    name: keyof W12MData;
    onChangeReasonForSparing: W12MFormChangeHandler;
    validate: (value: string) => string[];
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({ id, value, name, onChangeSpeciesName, validate }) => {

    const [touched, setTouched] = useState(false);
    const validationErrors = validate(value);

    return (
        <>
            <div>
                <label htmlFor='speciesName'>Species Name: </label>
                <input id={id}
                    type='text'
                    name={name}
                    value={value}
                    onChange={(e) => {
                        setTouched(true);
                        onChangeSpeciesName(e.target.value, name);
                    }}
                    placeholder="Enter Species Name" />
            </div>
            {touched && (
                <ErrorMessage name={name} messages={validationErrors} />
            )}
        </>
    );
};
export const PlanetName: React.FC<PlanetNameProps> = ({ id, value, name, onChangePlanetName, validate }) => {
    const [touched, setTouched] = useState(false);
    const validationErrors = validate(value);

    return (
        <>
            <div>
                <label htmlFor='planetName'>Planet Name: </label>
                <input id={id}
                    name={name}
                    type='text'
                    value={value}
                    onChange={(e) => {
                        setTouched(true);
                        onChangePlanetName(e.target.value, name);
                    }}
                    placeholder="Enter Planet Name" />
            </div>
            {touched && (
                <ErrorMessage name={name} messages={validationErrors} />
            )}
        </>
    );
};

export const NumOfBeing: React.FC<NumOfBeingProps> = ({ id, value, name, onChangeNumOfBeing, validate }) => {
    const [touched, setTouched] = useState(false);
    const validationErrors = validate(value);

    return (
        <>
            <div>
                <label htmlFor='numOfBeing'>Number of Beings: </label>
                <input id={id}
                    name={name}
                    type='text'
                    value={(value ?? '').toString()}
                    onChange={(e) => {
                        setTouched(true);
                        onChangeNumOfBeing(e.target.value, name);
                    }}
                    placeholder="Enter Number of Beings" />
            </div>
            {touched && (
                <ErrorMessage name={name} messages={validationErrors} />
            )}
        </>
    );
};

export const SelectedOption: React.FC<SelectedOptionProps> = ({ id, value, name, onChangeSelectedOption, validate }) => {
    const testNumOptions = [{ value: 'NOT_SELECTED', display: '-' }, { value: '4', display: '4' }, { value: 'Not 4', display: 'Not 4' }];
    const [touched, setTouched] = useState(false);
    const validationErrors = validate(value);
    return (
        <>
            <div>
                <label htmlFor='selectedOption'>What is 2+2?: </label>
                <select id={id}
                    name={name}
                    value={value}
                    onChange={(e) => {
                        setTouched(true);
                        onChangeSelectedOption(e.target.value, name);
                    }}  >
                    {testNumOptions.map((value, index) => (
                        <option key={index}
                            value={value.display} >
                            {value.display}
                        </option>
                    ))}
                </select>
            </div>
            {touched && (
                <ErrorMessage name={name} messages={validationErrors} />
            )}
        </>
    );
};

export const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ id, value, name, onChangeReasonForSparing, validate }) => {
    const [touched, setTouched] = useState(false);
    const validationErrors = validate(value);

    return (
        <>
            <div>
                <label htmlFor='reasonForSparing'>Reason for Sparing: </label>
                <textarea id={id}
                    name={name}
                    value={value}
                    onChange={(e) => {
                        setTouched(true);
                        onChangeReasonForSparing(e.target.value, name);
                    }}
                    placeholder='Enter Reason for Sparing' />
            </div>
            {touched && (
                <ErrorMessage name={name} messages={validationErrors} />
            )}
        </>
    );
};
