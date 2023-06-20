import React from 'react'
import styled from 'styled-components'
import img from "../Assets/dia.png"
import { BsFolderCheck } from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"

const Imagehold = () => {
  return (
      <Container>
          <Wrapper>
              <Top>
                  <Button>Popular</Button>
                  <Button>Filter</Button>
              </Top>
              <br />
              <Images>
                  <Card>
                      <Holder>
                          <Img src={img} />
                          <Hover>
                              <Namehold>
                                  <Name>Njord</Name>
                                  <Icons>
                                      <Hold>
                                          <BsFolderCheck />
                                      </Hold>
                                      <Hold>
                                          <AiOutlineHeart />
                                      </Hold>
                                  </Icons>
                            </Namehold>
                          </Hover>
                      </Holder>
                  </Card>
              </Images>
          </Wrapper>
      </Container>
  )
}

export default Imagehold
const Hold = styled.div`
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #686868;
    font-size: 16px;
    border-radius: 3px;
    margin: 8px;
`
const Icons = styled.div`
    display: flex;

`
const Name = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
`
const Namehold = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 25px;
    align-items: center;
`
const Hover = styled.div`
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* background: red; */
    z-index: 10;
    background-image: linear-gradient(
		0deg,
		rgba(65, 73, 73, 1) 0%,
		rgba(253, 187, 45, 0) 100%
	);
    transition: all 350ms;
    cursor: pointer;
    :hover{
    opacity: 0.9;
    }
`
const Holder = styled.div`
    width: 100%;
    height: 240px;
    position: relative;
    
`
const Img = styled.img`
    object-fit: cover;
    position: absolute;
`
const Card = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;

`
const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
const Button = styled.button`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 1px solid silver;
    cursor: pointer;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`