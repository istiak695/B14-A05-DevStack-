import type { Dispatch, SetStateAction } from 'react';
import type { card } from '../../types/cardType';


interface SelectedProps {
    selected: card[];
    setSelected: Dispatch<SetStateAction<card[]>>;
}

const Selected = ({ selected, setSelected }: SelectedProps) => {

    const handleRemoveCard = (card: card) => {
        const restcards = selected.filter((selectedCard) => selectedCard.name !== card.name);

        console.log(restcards, 'restcards from selected component');

        setSelected(restcards);
    }

    const handleRemoveAll = () => {
        setSelected([]);
    }

    console.log(selected, 'selected from selected component');

    if (selected.length === 0) {
        return (<h2 className='mt-5 border border-dotted text-center p-6 w-full h-20 rounded-2xl border-gray-400 text-gray-500
'>Your stack is empty.</h2>)
    }


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

            <button
                onClick={() => {
                    handleRemoveAll();
                }}
                className="btn btn-dash btn-error w-full mt-5"
            >
                Remove All
            </button>

           


        </div>
    );

};

export default Selected;