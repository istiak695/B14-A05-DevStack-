import type { Dispatch, SetStateAction } from 'react';
import type { card } from '../../types/cardType';

import FunCard from './FunCard';
import Selected from './Selected';

interface StackProps {
    cards: card[];
    handleSelectedCards: (card: card) => void;
    selected: card[];
    setSelected: Dispatch<SetStateAction<card[]>>;
    handleRemoveCard: (card: card) => void;
}





const Stack = ({ cards, selected, setSelected, handleSelectedCards }: StackProps) => {

    console.log(cards, 'cards from stack')
    return (
        <div className=" flex-block md:flex gap-4">
            <div className=' grid  grid-cols-1 md:grid-cols-3 gap-4 mt-6 '>




                {
                    cards.map((card: card, ind: number) => {
                        return (
                            <FunCard
                                key={ind}
                                card={card}
                                handleSelectedCards={handleSelectedCards}
                                selected={selected}
                                setSelected={setSelected}
                            ></FunCard>
                        )
                    })

                }



            </div>

            <div className='justify-content justify-center p-5 w-3xl h-min border border-gray-300 rounded-2xl mx-5 mt-5'>
                <h2 className="text-xl font-bold">Your Stack</h2>
                <h2 className='text-gray-500'>{selected.length} Technology Selected</h2>

                <Selected selected={selected} setSelected={setSelected}></Selected>

            </div>


        </div>
    )

};

export default Stack;