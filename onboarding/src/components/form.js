import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import UserCard from './UserCard'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap`

const validate = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Must be between 5 and 15')
        .max(15, 'Must be between 5 and 15')
        .required('This is a required field'),
    email: Yup.string()

        .required('This is a required field'),
    password: Yup.string()
        .min(5, 'Must be between 5 and 15')
        .max(15, 'Must be between 5 and 15')
        .required('This is a required field')
})

export default function MyForm() {
    const [users, addUser] = useState([])
    return <Formik

        onSubmit={(values, tools) => {
            tools.resetForm()
            axios.post('https://reqres.in/api/users', values)
                .then(res => {
                    addUser([...users, res.data])
                    console.log(users)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        }
        validationSchema={validate}

        initialValues={{
            name: '',
            email: '',
            password: '',
            tos: false
        }}
        render={props => {
            return (
                <div>
                    <Form>
                        <br />
                        <Field name='name' type='text' placeholder='Name: ' />
                        <ErrorMessage name='name' component='div' /><br />
                        <Field name='email' type='text' placeholder='Email: ' />
                        <ErrorMessage name='email' component='div' /><br />
                        <Field name='password' type='text' placeholder='Password: ' />
                        <ErrorMessage name='password' component='div' /><br />
                        <label><a href=''>Terms of Service</a> Agree:<Field name='tos' type='checkbox' /></label><br />
                        <input type='submit' />
                    </Form>
                    <StyledContainer>
                        {users.map((user) => {
                            return <UserCard key={user.id} data={user} />
                        })}
                    </StyledContainer>
                </div>
            )
        }}

    />
}