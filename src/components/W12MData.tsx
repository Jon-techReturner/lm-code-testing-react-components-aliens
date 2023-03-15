interface PersonProps{
    speciesName: string;
    planetName: string;
    numOfBeing: number;
    reasonForSparing: string;
    selected: string;
};

const DisplayData: React.FC<PersonProps> = ({speciesName, planetName, numOfBeing, reasonForSparing, selected }) => {
    return (
        <div>
            <p>Species Name:  {speciesName}</p>
            <p>Planet Name:  {planetName}</p>
            <p>Nuber of beings:  {numOfBeing}</p>
            <p>What is 2+2:  {reasonForSparing}</p>
            <p>Reason for sparing:  {selected}</p>
        </div>
    );
};

export default DisplayData;