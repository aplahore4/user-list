import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import Wrapper from '../Helpers/Wrapper'

import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log(
        'Invalid input',
        'Please enter a valid name and age (non-empty values).'
      )
      return
    }
    if (+enteredAge < 1) {
      console.log('Invalid age', 'Please enter a valid age (> 0).')
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  return (
    <Wrapper>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            id='age'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser
