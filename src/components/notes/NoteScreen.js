import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Tu sabe"
          className="notes__title-input"
        />
        <textarea
          className="notes__textarea"
          placeholder="What happened today?"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wW2aygRFTM4urbXwUf0aV8qZT3HWKGbn2A&usqp=CAU"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};
