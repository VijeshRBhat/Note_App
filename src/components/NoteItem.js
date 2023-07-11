import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext';

const NoteItem = (props) => {
  const { each_note , updateNote } = props;

  const context = useContext(NoteContext);
  const { deletenote, editnote } = context;

  return (
    <div className='col-md-3'>
      <div className="card my-3 bg-light">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h6 className="card-title">{each_note.title}</h6>
            <i className="far fa-trash-alt mx-2" onClick={() => { deletenote(each_note._id) }}></i>
            <i className="far fa-edit mx-2" onClick={() => { updateNote(each_note) }}></i>
          </div>
          <p className="card-text">{each_note.description}</p>
        </div>
      </div>
    </div>
  )
}
export default NoteItem
