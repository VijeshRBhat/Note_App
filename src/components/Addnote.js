import React, { useState, useContext } from 'react'
import NoteContext from '../context/NoteContext';

const Addnote = () => {
    const context = useContext(NoteContext);
    const {addnote} = context;

    const[note,setNote] = useState({title: "",description:"",tag:"default"})

    const handleClick = (e)=>{
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <div className="container my-3">
        <h1>Add a note</h1>
                <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name ="title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
            <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
            </form>
        </div>
    </div>
  )
}

export default Addnote
