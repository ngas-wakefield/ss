import React from 'react'
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiOutlineControl } from "react-icons/ai";

function Shopping() {
    return (
        <Section>
        <div className="shopping ">
        <div className="design ">
            <div className="logo img1">
            <AiOutlineControl />
        </div>
        </div>
        <div className="total ">
        <h6>SQ4</h6>
        
      
        </div>
        <div className="number ">
        <h6>ROOT OXYGEN</h6>
        <AiFillCaretUp className="svg1" />
        <span className="t1">146 </span>
        </div>
          
        </div>
        <div className="shopping ">
        <div className="design ">
            <div className="logo img2">
            <AiOutlineControl />
        </div>
        </div>
        <div className="total ">
        <h6>SQ5</h6>
        
      
        </div>
        <div className="number ">
        <h6>EXCESS SALTS</h6>
        <AiFillCaretUp className="svg1" />
        <span className="t1">5 </span>
        </div>
          
        </div>
        <div className="shopping ">
        <div className="design ">
            <div className="logo img3">
            <AiOutlineControl />
            
        </div>
        </div>
        <div className="total ">
        <h6>SQ7</h6>
        
      
        </div>
        <div className="number ">
        <h6>TOXICITY</h6>
        <AiFillCaretUp className="svg1" />
        <span className="t1">0 </span>
        </div>
          
        </div>
        <div className="shopping ">
        <div className="design ">
            <div className="logo img4">
            <AiOutlineShopping />
        </div>
        </div>
        <div className="total ">
        <h6>SQ8</h6>
        
      
        </div>
        <div className="number ">
        <h6>WORKABILITY</h6>
        <AiFillCaretUp className="svg1" />
        <span className="t1">48 </span>
        </div>
          
        </div>
      
      
      
      </Section>
    )
}

export default Shopping
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .shopping {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 1rem;
    color: black;
    background-color: #F8F9FE;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #D4E0FF;
      color: black;
      svg {
        color: black;
      }
    }
    .design {
        display: flex;
        align-items: center;
        gap: 0.5rem;
          .img1{
                background-color: #668DFF;
            }
            .img2{
                background-color: #FFB2C3;
            }
            .img3{
                background-color: #FFDD00;
            }
            .img4{
                background-color: #030303;
            }
        .logo {
      border-radius: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem;
      svg {
        font-size: 1rem;
        color: white;
      }
    }
    }
    .total {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: space-evenly;
        margin-top: 10px;
     h6{
        color: grey; 
     }
    }
    .number {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: space-evenly;
        margin-top: 10px;
            .svg1 {
                color: green; 
            }
          .t1{
              color: green; 
          }    
     h6{
        color: black; 
     }
    }
    
  }
  
  `
  ;