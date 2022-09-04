import React from 'react'
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer, YAxis, XAxis} from "recharts";
import { AiOutlineCaretDown } from "react-icons/ai";

function Sales() {
    return (
        <Section>
        <div className="sales">
      <div className="sales__details">
        <div>
          <h4>Soil Overview</h4>
         
        </div>
        <div>
         
          <button>
          Year
          <AiOutlineCaretDown />
          </button>
        </div>
      </div>
      <div className="sales__graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
            }}
          >
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#668DFF" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#D4E0FF" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip cursor={false} />
            <Area
              type="monotone"
              dataKey="data3"
              stroke="#668DFF"
              fill="url(#colorview)"
            />
            <Area
              type="monotone"
              dataKey="data2"
              stroke="#949191"
              fill="url(#colorview)"
            />
            <Area
              type="monotone"
              dataKey="data1"
              stroke="#ff350f"
              fill="url(#colorview)"
            />
            <YAxis></YAxis>
            <XAxis></XAxis>
          </AreaChart>
        </ResponsiveContainer>
        <div class="line"></div>
      </div>

        </div>
        </Section>
        
    )
}

export default Sales
const data = [
    {
      data3: 0,
      data2: 0,
      data1: 0,
    },
    {
      data3: 2500,
      data2: 1000,
      data1: -2000,
    },
    {
      data3: 1800,
      data2: 800,
      data1: -4000
    },
    {
      data3: 4500,
      data2: 1500,
      data1: -2500,
    },
    {
      data3: 6000,
      data2: 0,
      data1: -4500,
    },
    {
      data3: 6500,
      data2: 1000,
      data1: -4300,
    },
    {
      data3: 6600,
      data2: 0,
      data1: -4800,
    },
  ];
  const Section = styled.section`
  .sales {
    color: black;
    width: 100%;
    .sales__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      div {
        display: flex;
        gap: 1rem;
        button {
          border-radius: 0.5rem;
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: #EEF4FF;
            color: black;
            svg {
                font-size: 0.6rem;
            }
        }
      }
    }
    .sales__graph {
      height: 10rem;
      width: 100%;
      .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
      color : white !important;
    }
    }
  }
  `;