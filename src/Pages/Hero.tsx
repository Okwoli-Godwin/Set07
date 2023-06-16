import React from 'react'
import styled from 'styled-components'
import img from ".././Assets/blogg.jpg"

const Hero = () => {
  return (
      <Container>
          <Hold>
              <h1>Get Your New Book With Best Price Find Your Book Now</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.</p>

              <Holder>
                  <Input placeholder='Keyword' />
                  <Line></Line>

                  <Select>
                      <option>Category</option>
                      <option>Education</option>
                      <option>Fine Arts</option>
                      <option>History</option>
                      <option>Music</option>
                      <option>Philosophy</option>
                      <option>Religion</option>
                  </Select>
                  <Line></Line>

                  <Select>
                      <option>Category</option>
                      <option>Education</option>
                      <option>Fine Arts</option>
                      <option>History</option>
                      <option>Music</option>
                      <option>Philosophy</option>
                      <option>Religion</option>
                  </Select>
                  <Button>Search</Button>
              </Holder>
          </Hold>
      </Container>
  )
}

export default Hero
const Button = styled.div`
    width: 100px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E95009;
    cursor: pointer;
    color: #fff;
    margin-right: 8px;
    border-radius: 5px;
`
const Select = styled.select`
    width: 170px;
    height: 100%;
    border: none;
    outline: none;
    margin-left: 7px;
    font-size: 15px;
    margin-right: 7px;
`
const Line = styled.div`
    width: 2px;
    height: 18px;
    background-color: gray;
`
const Input = styled.input`
    padding-left: 15px;
    border: none;
    outline: none;
    ::placeholder{
        font-size: 15px;
    }
`
const Holder = styled.div`
    width: 50%;
    height: 65px;
    border-radius: 10px;
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
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`