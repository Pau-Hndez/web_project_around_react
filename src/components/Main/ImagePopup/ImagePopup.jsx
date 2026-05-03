export default function ImagePopup(props){
  const {link, name}  = props.card;
  const {onClose} = props;
    return(
       <div className="popup" id="popup_image">
       <div className="popup__image-card">      
        <img className="popup__image-big" alt={name} src={link} />
        <p className="popup__image-name">{name}</p>
      </div>
    </div> 
    )
}