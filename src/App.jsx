import './App.css'
import useFetch from './hooks/useFetch.js'
import { useEffect, useState } from 'react'
import UserCard from './components/UserCard/UserCard.jsx'
import FormUser from './components/FormUser/FormUser.jsx'
import DeleteSuccess from './components/DeleteSuccess/DeleteSuccess.jsx'


function App() {


  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  const [isDeleteSuccess, setisDeleteSuccess] = useState(false)


  const baseUrl = 'https://users-crud-jgnn.onrender.com'
  const [users, getUser, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUser()
  }, [])

  const handleOpenForm = () => {
    setIsFormClose(false)
  }


  return (
    <div>
      <h1 className='title-app' > Users APP </h1>
      <button onClick={handleOpenForm} className="app__button-open-form"> + Create New User </button>
      <div className={`form__container ${isFormClose && 'form__close'}`}>
        <FormUser
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          setUserUpdate={setUserUpdate}
          setIsFormClose={setIsFormClose}
        />
      </div>
      <div className="user-container">
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              setIsFormClose={setIsFormClose}
              setisDeleteSuccess={setisDeleteSuccess}
              isDeleteSuccess={isDeleteSuccess}
            />
          ))
        }
      </div>
      <div className={`delete__success-container ${!isDeleteSuccess && 'delete-close'}`}>
        <DeleteSuccess
          setisDeleteSuccess={setisDeleteSuccess}
        />
      </div>
    </div>
  )
}

export default App
