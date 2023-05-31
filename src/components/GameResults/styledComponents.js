import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  width: 160px;
  height: 150px;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`

export const GameImage = styled.img`
  width: 150px;
  height: 150px;
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`
export const ResultName = styled.p`
  color: white;
  font-size: 20px;
`

export const ResultText = styled.p`
  color: white;
  font-size: 25px;
`
export const ResultButton = styled.button`
  width: 100px;
  height: 28px;
`
