import React from 'react'
import { useState } from 'react'
import '../index.css'

const AddNote = ({ handleAddNote }) => {
    const [noteText, setnoteText] = useState('')
    const characterLimit = 210;

    const handleChange = (event) => {
        if(characterLimit- event.target.value.length >= 0){

            setnoteText(event.target.value)
        }
    }

    const handleSaveClick =() => {
        if(noteText.trim().length > 0){

        handleAddNote(noteText)
        setnoteText('')
        }

    }

   




    return (
        <div className='note new'>
            <textarea 
            cols='10' 
            rows='8' 
            placeholder="Greetings from Manish Enter Your Note here..."
            value= {noteText}
            onChange={handleChange}
            >

            </textarea>
            <div className="note-footer">
                <small>{characterLimit- noteText.length} Words Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    )
}

export default AddNote
