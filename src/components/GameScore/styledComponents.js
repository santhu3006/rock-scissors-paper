import styled from 'styled-components'

export const GameScoreContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:10px;
width:79%;
border:3px solid #ffffff;
border-radius:10px;
background-color:transparent
margin-top:2%;
`

export const GameScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GameScoreName = styled.h1`
  color: white;
  font-size: 19px;
  font-family: 'Bree serif';
  margin-top: 0px;
  margin-bottom: 0px;
`
export const GameScoreBoardContainer = styled(GameScoreNameContainer)`
  background-color: #ffffff;
  width: 14%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
export const GameScoreBoardHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
`
export const GameScoreBoardScore = styled.p`
  color: #223a5f;
  font-size: 44px;
  margin-top: 0px;
  font-family: 'Roboto';
`
