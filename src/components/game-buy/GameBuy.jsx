import { Button } from '../button/Button';
import './game-buy.css';

export const GameBuy = ({ game }) => {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price}</span>
            <Button
            type={'primary'}>In cart</Button>
        </div>
    )
}