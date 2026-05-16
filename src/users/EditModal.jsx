import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import './style.css'

const EditModal = ({ participant, onClose, onSave }) => {
  const [name, setName] = useState(participant.name)
  const [score, setScore] = useState(participant.score)

  const handleSave = () => {
    onSave({ ...participant, name, score })
    onClose()
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-box'>
        <div className='modal-header'>
          <h3>Edit Participant</h3>
          <button className='modal-close' onClick={onClose}><FiX /></button>
        </div>

        <div className='modal-body'>
          <label>Name</label>
          <input
            className='modal-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Score</label>
          <input
            className='modal-input'
            type='number'
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <div className='modal-footer'>
          <button className='modal-btn cancel' onClick={onClose}>Cancel</button>
          <button className='modal-btn save' onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default EditModal