import React from 'react'
import './deleteSuccess.css'



const DeleteSuccess = ({setisDeleteSuccess}) => {

    const handleExit = () => {
        setisDeleteSuccess(false)
      }

  return (
    <div className='container-delete'>
      <h1 className='delete__msg'> User deleted thanks to you 👀 </h1>
      <div className="delete__x" onClick={handleExit}> X </div>
      
    </div>
  )
}

export default DeleteSuccess
