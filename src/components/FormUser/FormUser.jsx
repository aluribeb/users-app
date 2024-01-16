import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './formUser.css'

const FormUser = ({ createUser, userUpdate, updateUser, setUserUpdate,setIsFormClose }) => {

const {handleSubmit, register, reset, setValue } = useForm()



useEffect(() => {
    reset(userUpdate)
}, [userUpdate])

const submit = data => {
    if(userUpdate) {

//update
updateUser(userUpdate.id, data)
setUserUpdate()

    }else {
//create
createUser(data)
    }
    reset({
        email:"",
        password:'',
        first_name: '',
        last_name: '',
        birthday: ''
    })
    setIsFormClose(true)
  }
const handleExit = () => {
  setIsFormClose(true)
  reset({
    email:"",
    password:'',
    first_name: '',
    last_name: '',
    birthday: ''
})
setUserUpdate()
}
const handleUserNameChange = (event) => {
  const value = event.target.value;
  const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  setValue('first_name', capitalizedValue);
};

const handleLastNameChange = (event) => {
  const value = event.target.value;
  const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  setValue('last_name', capitalizedValue);
};

  return (

    <form className='form' onSubmit={handleSubmit(submit)}>
      <div className="form__x" onClick={handleExit}>x</div>
      <h2 className="form__title">{ userUpdate ? 'Update User' : 'Create new user' }</h2>
      <label className='form__label'>
        <span className='form__field_name'> Email: </span>
        <input className='form__field' {...register('email')}type="email" />
      </label>
      <label className='form__label' >
        <span className='form__field_name' > Password: </span>
        <input className='form__field' {...register('password')}type="password" />
      </label>
    
      <label className='form__label' >
        <span className='form__field_name' >First name: </span>
        <input className='form__field' {...register('first_name')}type="text" onChange={handleUserNameChange} />
    </label>
      <label className='form__label' >
        <span className='form__field_name' >Last name: </span>
        <input className='form__field' {...register('last_name')}type="text" onChange={handleLastNameChange} />
      </label>
      <label className='form__label' >
        <span className='form__field_name' >Birthday: </span>
        <input className='form__field' {...register('birthday')}type="date" />
      </label>
      <button className='form__btn' >{userUpdate ? 'Update' : 'Add' }</button>
    </form>
  )
}

export default FormUser