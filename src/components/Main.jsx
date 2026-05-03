import { useState } from "react";
import profilePicture from "@images/profile_picture.jpg";
import addButton from "@images/add-button.png";
import Popup from "./Main/Popup/Popup";
import NewCard from "./Main/NewCard/NewCard";
import EdiProfile from "./Main/EditProfile/EditProfile";
import EditAvatar from "./Main/EditAvatar/EditAvatar";
import Card from "./Main/Card/Card";
import ImagePopup from "./Main/ImagePopup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

export default function Main () {
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const newEditProfilePopup = { title:"Editar perfil", children:<EdiProfile/> };
    const newEditAvatarPopup = {title:"Cambiar foto de perfil", children:<EditAvatar/>};
    function handleOpenPopup(popup) {
    setPopup(popup);
    }
    function handleClosePopup() {
    setPopup(null);
    }
    function handleClickCard(card){
    handleOpenPopup({children:<ImagePopup card={card}/>});
    }
    return(
        <main className="content">
                <section className="profile">
                  <div className="profile__info">
                    <div className="profile__picture">
                      <img
                        className="profile__img-picture"
                        src= {profilePicture}
                        alt="Foto de perfil"
                      />
                      <button className="profile__edit-picture"
                      onClick={() =>handleOpenPopup(newEditAvatarPopup)}></button>
                    </div>
                    <div className="profile__description">
                      <h1 className="profile__name">Jacques Cousteau</h1>
                      <button className="profile__edit-button" type="button"
                      onClick={()=>handleOpenPopup(newEditProfilePopup)}></button>
                      <p className="profile__about-me">Explorador</p>
                    </div>
                  </div>
                  <button className="profile__add-button" type="button">
                    <img src= {addButton} alt="Agregar" 
                    onClick={() => handleOpenPopup(newCardPopup)}/>
                  </button>
                </section>
                <section className="cards content__places">
                  <ul className="cards__list">
                    {cards.map((card) => (
                    <Card key={card._id} card={card} handleClickCard={handleClickCard}/>
                    ))}
                  </ul>
                </section>
                <template id="card__template">
                  <li className="card">
                    <img className="card__picture" alt="" src="#" />
                    <button
                      aria-label="Delete card"
                      className="card__delete-button"
                      type="button"
                    ></button>
                    <div className="card__name">
                      <h2 className="card__title"></h2>
                      <button
                        aria-label="like card"
                        className="card__like-button"
                        type="button"
                      ></button>
                    </div>
                  </li>
                </template>
                {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
              </main>
    )
}