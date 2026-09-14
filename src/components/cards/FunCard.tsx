import { useState, type Dispatch, type SetStateAction } from 'react';
import type { card } from '../../types/cardType';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

 interface CardsProps{
    card: card
    handleSelectedCards: (card: card) => void
    selected: card[];
    setSelected: Dispatch<SetStateAction<card[]>>;
}


const FunCard = ({ card, handleSelectedCards,selected, setSelected }: CardsProps) => {
    const [isSelected, setIsSelected] = useState(false)
    console.log(isSelected, setIsSelected, "isSelected, setIsSelected");

const handleSelected = () => {
handleSelectedCards(card);

}



    return <div className = ''>
        <div className="card bg-base-100  shadow-sm">
            <figure className='justify-between mx-3'>
                <img src={card.icon} alt={card.name} className='w-10 h-12 mx-10' />
                <div className={`badge badge-soft ${card.badge === 'Popular' ? 'badge-primary' :
                    card.badge === 'Secure' ? 'badge-info' :
                        card.badge === 'Essential' ? 'badge-secondary' :
                            card.badge === 'Top SQL' ? 'badge-warning' :
                                card.badge === 'Flexible' ? 'badge-accent' :
                                    card.badge === 'Fast' ? 'badge-info' :
                                        ''}`}>
                    {card.badge}

                </div>

            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title">

                    {card.name}</h2>
                <p>{card.description}</p>
                <div className='flex justify-between'>
                    <h2 className="badge badge-ghost">{card.category}</h2>
                    <h2>{card.difficulty}</h2>
                    <div className='flex gap-2 '><FaStar className='text-yellow-300' />
                        <h2>{card.rating}</h2></div>
                </div>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => {
                            setIsSelected(true);
                            toast.success(`${card.name} Added successfully!`
                            );
                            handleSelected();
                        }}

                        className="btn btn-neutral w-full rounded-2xl"
                        disabled={isSelected}>
                        {isSelected === true ? "Added" : "Add to Stack"}
                    </button>


                </div>

            </div>

        </div>



    </div>



};

export default FunCard;