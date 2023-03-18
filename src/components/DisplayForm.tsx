import { W12MData } from "../data/data.types";

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