import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/no-profile-picture-15257.png'

const Container = styled.div`
  margin-top: 5rem;
`

const ProfileImg = styled.img`
  height: 5rem;
  margin-left: 9px;
`

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};

`

const Profile = () => {
  return (
    <Container>
        <ProfileImg src={Image} />
        <ProfileName>Example User</ProfileName>
    </Container>
  )
}

export default Profile
