import Star from './Star';

function Stars({ count }) {
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