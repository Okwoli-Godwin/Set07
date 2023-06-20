import React from 'react'
import styled from 'styled-components'
import img from ".././Assets/blogg.jpg"
import { FiSearch } from "react-icons/fi"

const Hero = () => {

    const myVideo = require("../Assets/vid.mp4")
  return (
      <Container>
          
          <Video src={myVideo} autoPlay={ true} loop playsInline />
          <Hold>
              <h1>Get Your New Book With Best Price Find Your Book Now</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.</p>

              <Holder>
                  <Icon><FiSearch /></Icon>
                  <Input placeholder='Keyword' />
                  
              </Holder>
          </Hold>
      </Container>
  )
}

export default Hero
const Icon = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`
const Video = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Input = styled.input`
    padding-left: 15px;
    border: none;
    outline: none;
    flex: 1;
    ::placeholder{
        font-size: 15px;
    }
`
const Holder = styled.div`
    width: 50%;
    height: 65px;
    border-radius: 50px;
    background-color: #fff;
    display: flex;
    margin-top: 13px;
    overflow: hidden;
    align-items: center;
`
const Hold = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
    padding-bottom: 180px;
    padding-top: 180px;


    h1{
        color: #fff;
        font-size: 40px;
        font-weight: 700;
        width: 42%;
        text-align: center;
        margin: 0;
    }
    p{
        width: 45%;
        color: silver;
        text-align: center;
        margin-top: 35px;
        font-size: 22px;
        font-weight: 500;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; */
    position: relative;
`