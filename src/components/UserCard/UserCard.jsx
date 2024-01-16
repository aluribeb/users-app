import React from 'react'
import './userCard.css'


const UserCard = ({ user, deleteUser, setUserUpdate, setIsFormClose, setisDeleteSuccess }) => {

  
  const handleDelete = () => {
    deleteUser(user.id)
    setisDeleteSuccess(true)
  }

  const handleEdit = () => {
    setUserUpdate(user)
    setIsFormClose(false)
  }



  return (

    <article>
      <div className="user-card">
        <h2 className='user__name'>
          <span style={{ display: 'inline' }}>{user.first_name}</span>
          <span style={{ display: 'inline' }}>{user.last_name}</span>
        </h2>
        <hr />
        <ul className='user__data'>
          <li>
            <span className='user__title-email' >Email: </span>
            <span className='user__email' >{user.email}</span>
          </li>
          <li>
            <span className='user__title-birthday'>Birthday: </span>
            <span className='user__birthday' >{user.birthday}</span>
          </li>
        </ul>
        <hr />
        <footer>
          <button className='user__btn-delete' onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
          <button className='user__btn-edit' onClick={handleEdit}><i className="fa-solid fa-pencil"></i></button>
        </footer>
      </div>
    </article>
  )
}

export default UserCard
