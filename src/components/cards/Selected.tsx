import type { Dispatch, SetStateAction } from 'react';
import type { card } from '../../types/cardType';

interface SelectedProps {
    selected: card[];
    setSelected: Dispatch<SetStateAction<card[]>>;
}

const Selected = ({ selected, setSelected }: SelectedProps) => {

    console.log(selected, 'selected from selected component');

    return (
        <div>
            {selected.map((card: card, ind: number) => {
                return (
                    <div key={ind}>
                        <h3>{card.name}</h3>
                        <p>{card.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Selected;