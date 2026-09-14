import type { Dispatch, SetStateAction } from 'react';
import type { card } from '../../types/cardType';


interface SelectedProps {
    selected: card[];
    setSelected: Dispatch<SetStateAction<card[]>>;
}

const Selected = ({ selected, setSelected }: SelectedProps) => {

const handleRemoveCard = (card:card) => {

const restcards = selected.filter(selected => selected.name !== card.name);

console.log(restcards, 'restcards from selected component');

    setSelected([...restcards]);
}

    console.log(selected, 'selected from selected component');

    return (
        <div>
            {selected.map((card: card, ind: number) => {
                return (
                    <div key={ind}>
                       <div className='flex justify-between border border-gray-300 rounded-lg p-2 my-2'> 
                        <div className='flex'> <img src={card.icon} alt={card.name} className='w-10 h-12 mx-1' />
                            <div>
                                <h2 className='font-bold'>{card.name}</h2>
                                <h2 className='text-sm text-gray-600'>{card.category}</h2>
                            </div>
                        </div>
                        <button onClick={() => handleRemoveCard(card)}>✕</button></div>
                    </div>
                );
            })}
        </div>
    );
};

export default Selected;