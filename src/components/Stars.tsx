import Star from './Star';
import { FC } from 'react'

interface StarProps {
    count: number
}

const Stars: FC<StarProps> = ({ count }) => {
    if (count > 5 || count < 1) { return null };
    const amountOfStars = Array.from({length:count}, (_, index) => { 
        return index;
    });

    return (
        <ul className="card-body-stars">
            {amountOfStars.map((el) => 
            <div key={el}>
                <Star />
            </div>
               
            )}
        </ul>
    );
}

export default Stars;