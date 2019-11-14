import React from 'react';

import styled from 'styled-components'

const StyledCard = styled.div`
    width: 20%;
    padding: 2% 0%;
    margin: 2%;
    background: rgba(0,0,0,.6);
    color: white
`

export default function UserCard(props) {
    return (

        <StyledCard>
            <h1>{props.data.name}</h1>
            <h2>Email: {props.data.email}</h2>
            <h3>Pass: {props.data.password}</h3>
            <h3>Tos: {props.data.tos ? 'Accepted' : 'Not Accepted'}</h3>

        </StyledCard>
    )

}