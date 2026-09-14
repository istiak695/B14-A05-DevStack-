import type { Dispatch, SetStateAction } from 'react';
import type { card } from '../../types/cardType';

interface IsselectedCardsProps {
   selectedCards:card[];
       setSelectedCards: Dispatch<SetStateAction<card[]>>
   
}

const SelectedCards = ({selectedCards,
setSelectedCards}: IsselectedCardsProps) => {
console.log(selectedCards, 'selected cards from selected cards component')

    return (

        <div>
           selected 
        </div>
    );
};

export default SelectedCards;