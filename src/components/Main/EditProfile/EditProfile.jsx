export default function EdiProfile() {
    return(
       <form className="popup__form" id="edit-profile-form" noValidate>
          <input
            id="name-input"
            className="popup__input popup__input_type_name"
            name="name"
            placeholder="Nombre"
            type="text"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            id="description-input"
            className="popup__input popup__input_type_description"
            name="description"
            placeholder="Acerca de mí"
            type="text"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error description-input-error"></span>
          <button className="popup__save" type="submit" disabled>Guardar</button>
        </form> 
    )
}