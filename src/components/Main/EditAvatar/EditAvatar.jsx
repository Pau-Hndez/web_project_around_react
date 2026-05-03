export default function EditAvatar() {
    return(
       <form className="popup__form" id="edit-profile-picture" noValidate>
          <input
            id="card-description"
            className="popup__input popup__input_type_description"
            name="avatar"
            placeholder="Enlace a la imagen."
            type="url"
            required
          />
          <span className="popup__input-error card-description-error"></span>
          <button className="popup__save" type="submit">Guardar</button>
        </form> 
    )
}