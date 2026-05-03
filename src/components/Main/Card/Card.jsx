export default function Card(props){
 const {name, link, isLiked} =props.card;
 const {handleClickCard} = props;
 const imageComponent = {name,link,isLiked};
    return(
   <li className="card">
            <img className="card__picture" alt={name} src={link} 
            onClick={() =>handleClickCard(imageComponent)}/>
            <button
              aria-label="Delete card"
              className="card__delete-button"
              type="button"
            ></button>
            <div className="card__name">
              <h2 className="card__title">{name}</h2>
              <button
                aria-label="like card"
                className="card__like-button"
                type="button"
              ></button>
            </div>
    </li>
    );
}