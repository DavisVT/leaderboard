import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { FiEdit } from 'react-icons/fi'
import EditModal from './EditModal'

const Header = () => {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <header className='header'>
        <div className='header-container'>

          <div className='header-left'>
            <div className='header-left-links'>
              <Link to='/profile' className='header-link'>Profile</Link>
              <div className='header-divider' />
              <Link to='/settings' className='header-link'>Settings</Link>
            </div>
            <button className='header-btn'>Logout</button>
          </div>

          <div className='header-separator' />

          <div className='header-row header-row-center'>
            <span className='header-title'>Admin panel</span>
            <div className='header-divider' />
            <span className='header-link'>View as audience</span>
            <div className='header-divider' />
            <span className='header-link'>Share</span>
          </div>

          <div className='header-separator' />

          <div className='header-row header-row-end'>
            <button className='header-btn'>Add Participant</button>
            <div className='header-divider' />
            <button className='header-btn'>Appearance</button>
          </div>

          <div className='header-separator' />

          <div className='header-bottom'>
            <span>Updated: 4h ago</span>
            <span>You are the owner</span>
          </div>

        </div>
      </header>

      <div className='dashboard-content'>
        <h3 className='dashboard-title'>Class Score</h3>

        <div className='dashboard-table'>
          <div className='table-header'>
            <span>S/N</span>
            <span>Name</span>
            <span>Score</span>
            <span>Actions</span>
          </div>

          <div className='table-row'>
            <span>1</span>
            <span>Amrah Sali</span>
            <span>10</span>
            <div className='table-actions'>
              <button className='action-btn add'>+</button>
              <button className='action-btn minus'>-</button>
              <button className='action-btn edit' onClick={() => setSelected({ name: 'Amrah Sali', score: 10 })}>
                <FiEdit />
              </button>
            </div>
          </div>

          <div className='table-row'>
            <span>2</span>
            <span>David Victor</span>
            <span>8</span>
            <div className='table-actions'>
              <button className='action-btn add'>+</button>
              <button className='action-btn minus'>-</button>
              <button className='action-btn edit' onClick={() => setSelected({ name: 'David Victor', score: 8 })}>
                <FiEdit />
              </button>
            </div>
          </div>

          <div className='table-row'>
            <span>3</span>
            <span>Macheal Victor</span>
            <span>5</span>
            <div className='table-actions'>
              <button className='action-btn add'>+</button>
              <button className='action-btn minus'>-</button>
              <button className='action-btn edit' onClick={() => setSelected({ name: 'Macheal Victor', score: 5 })}>
                <FiEdit />
              </button>
            </div>
          </div>

        </div>
      </div>

      {selected && (
        <EditModal
          participant={selected}
          onClose={() => setSelected(null)}
          onSave={(updated) => console.log('saved', updated)}
        />
      )}
    </>
  )
}

export default Header