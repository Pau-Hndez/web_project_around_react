export default function NewCard() {
  return (
<form className="popup__form" id="edit-card-popup" noValidate>
          <input
            id="card-name"
            className="popup__input popup__input_type_name"
            name="title"
            placeholder="Título"
            type="text"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error card-name-error"></span>
          <input
            id="card-description"
            className="popup__input popup__input_type_description"
            name="picture"
            placeholder="Enlace a la imagen."
            type="url"
            required
          />
          <span className="popup__input-error card-description-error"></span>
          <button className="popup__save" type="submit">Crear</button>
        </form>
  );
}