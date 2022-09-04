import React from 'react'
import styled from 'styled-components'
import apple from "../assets/apple.png"
function Orders() {
    return (
        <Section>
        <div className="orders">
      <div className="orders__details">
          <div>
                <h4>Your land</h4> 
          </div>
          <div> 
            <button> SEE ALL</button>
            
          </div>
        </div>
        <div className="orders__table">
            <table>
            <tr>
              <th>Tracking ID</th>
              <th>Section</th>
            </tr>
            <tr>
                <td>#9876545</td>
                <td>Kiwi</td>
                <td ><button>View</button></td>

            </tr>
            <tr>
              <td>#9876543</td>
              <td><span>Apples</span></td>
              <td ><button>View</button></td>
            </tr>

            <tr>
              <td>#9876548</td>
              <td><span>Oranges</span></td>
              <td ><button>View</button></td>
            </tr>

            <tr>
              <td>#9876552</td>
              <td><span>Cabbage</span></td>
              <td ><button>View</button></td>
            </tr>
            
            </table>
        </div>
        </div>
        </Section>
    )
}

export default Orders
const Section = styled.section`
.orders {
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 ;
        div {
            display: flex;
            gap: 1rem;
            button {
                padding: 0.4rem 1rem;
                border: none;
                cursor: pointer;
                background-color: white;
                color: #668DFF;
                font-weight: bold;
            }
        }
    }
    
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        table {
            border-collapse: collapse;
            width: 100%;
            th, td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
                button {
border-radius: 0.3rem;
padding: 0.4rem 1rem;
border: none;
cursor: pointer;
background-color: #EEF4FF;
color: blue;
font-weight: bold;
                }
                img {
                    height: 2rem;
                    width: 2rem;
                }
                span {
                    margin-top: 0.2 rem;
                }
            }
            .img {
                display: flex;
                justify-content: center;
            }
        }
    }
}
`;