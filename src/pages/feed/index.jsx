import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Natanael Melo" image="https://avatars.githubusercontent.com/u/109748470?s=400&u=0404c8f169e445cbb0c973cf2d23f40233d65cdd&v=4" percentual={25}/>
                <UserInfo nome="Natanael Melo" image="https://avatars.githubusercontent.com/u/109748470?s=400&u=0404c8f169e445cbb0c973cf2d23f40233d65cdd&v=4" percentual={65}/>
                <UserInfo nome="Natanael Melo" image="https://avatars.githubusercontent.com/u/109748470?s=400&u=0404c8f169e445cbb0c973cf2d23f40233d65cdd&v=4" percentual={45}/>
                <UserInfo nome="Natanael Melo" image="https://avatars.githubusercontent.com/u/109748470?s=400&u=0404c8f169e445cbb0c973cf2d23f40233d65cdd&v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
