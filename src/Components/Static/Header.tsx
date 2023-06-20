import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import img from "../../Assets/bookimg.png"
import { FiSearch } from "react-icons/fi"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handlescroll = () => {
            const scroll = window.pageYOffset;

        if (scroll >= 100) {
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
        }

        window.addEventListener("scroll", handlescroll)

        return () => {
            window.removeEventListener("scroll", handlescroll)
        }
    })

    


    
  return (
      <>
          {isSticky ? (
              <Container bg='red' p='fixed'>
          <Wrapper>
              <Img src={img} />

              <Nav>
                  <Navs>Home</Navs>
                  <Navs>About</Navs>
                  <Navs>Bookstore</Navs>
                  <Navs>Blog</Navs>
                  <Navs>Contact</Navs>
              </Nav>

              <Icons>
                  <Hold><FiSearch /></Hold>
                  <Hold2><AiOutlineShoppingCart /></Hold2>
                  <Button>Upload</Button>
              </Icons>
          </Wrapper>
    </Container>
          ) : (
              <Container bg='#fff' p="">
          <Wrapper>
              <Img src={img} />

              <Nav>
                  <Navs>Home</Navs>
                  <Navs>About</Navs>
                  <Navs>Bookstore</Navs>
                  <Navs>Blog</Navs>
                  <Navs>Contact</Navs>
              </Nav>

              <Icons>
                  <Hold><FiSearch /></Hold>
                              <Hold2>
                                  <AiOutlineShoppingCart />
                                  <Circle>1</Circle>
                              </Hold2>
                  <Button>Upload</Button>
              </Icons>
          </Wrapper>
    </Container>    
          )}
      </>
  )
}

export default Header
const Circle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: #fff;
    background-color: #E95009;
    position: absolute;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -5px;
    right: -5px;
`
const Button = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    cursor: pointer;
    color: #fff;
    margin-left: 25px;
`
const Hold2 = styled.div`
    font-size: 25px;
    margin-left: 25px;
    position: relative;
    color: blue;
`
const Hold = styled.div`
    font-size: 25px;
    margin-left: 25px;
    color: blue;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
`
const Navs = styled.div`
    margin-left: 35px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
`
const Nav = styled.div`
    display: flex;
    align-items: center;
`
const Img = styled.img`
    height: 50px;
`
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Container = styled.div<{bg: string, p: string}>`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    background-color: ${({bg}) => bg};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: ${({p}) => p};
    z-index: 12;
`