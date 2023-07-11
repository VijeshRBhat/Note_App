import React, { useEffect, useContext, useRef, useState } from 'react'
import NoteContext from '../context/NoteContext';
import NoteItem from './NoteItem';
import Addnote from './Addnote';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


const Allnotes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes , editnote} = context;
  const[note,setNote] = useState({id:"" , etitle: "",edescription:"",etag:""})
  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes();
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id , etitle: currentNote.title , edescription: currentNote.description, etag: currentNote.tag})
  }

  const handleClick = (e)=>{
    ref.current.click();
    editnote(note.id, note.etitle, note.edescription, note.etag)
}

const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}

  return (
    <>
      <Addnote key={uuidv4()} />

      <button ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Editing Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text"  autoComplete="on" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" autoComplete="on" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" autoComplete="on" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>My Notes</h2>
        {notes.map((each_note) => {
          return <NoteItem key={each_note._id} updateNote={updateNote} each_note={each_note} />
        })}
      </div>
    </>
  )
}

export default Allnotes
