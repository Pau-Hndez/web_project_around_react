import { useEffect, useState } from "react";
//import "../index.css";
import Header from "./Header/Header";
import Main from "./Main";
import Footer from "./Footer/Footer";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  const handleUpdateUser = (name, about) => {
    (async () => {
      await api.editProfile(name, about).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };
  const handleUpdateAvatar = (avatar) => {
    (async () => {
      await api.editProfilePicture(avatar).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };
  //card
  useEffect(() => {
    (async () => {
      await api
        .getInitialCards()
        .then((cards) => setCards(cards))
        .catch((err) => console.error(err));
    })();
  }, []);

  async function handleCardLike(card) {
    try {
      const newCard = await api.changeLikeCardStatus(card._id, !card.isLiked);

      setCards((cards) =>
        cards.map((item) => (item._id === card._id ? newCard : item)),
      );
    } catch (error) {
      console.error(error);
    }
  }
  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id),
        );
      })
      .catch((error) => console.error(error));
  }
  const handleAddPlaceSubmit = ({ name, link }) => {
    (async () => {
      await api.addCard(name, link).then((newCard) => {
        setCards((prevCards) => [newCard, ...prevCards]);
        handleClosePopup();
      });
    })();
  };
  return (
    <CurrentUserContext.Provider
      value={{
        popup,
        setPopup,
        handleOpenPopup,
        handleClosePopup,
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        cards,
        handleCardDelete,
        handleCardLike,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
