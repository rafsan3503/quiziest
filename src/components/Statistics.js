import { useLoaderData } from 'react-router-dom';
import React from "react";
import {
  LineChart,
    Line,
    BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
    const data = useLoaderData().data;
    console.log(data)
    return (
        <div>
            <h2 className='text-center text-5xl font-bold text-indigo-400'>Statistics With Chart</h2>
        <div className="lg:flex justify-center min-h-screen items-center">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey='total'/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="name"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2"
            />
          </LineChart>

          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Tooltip />
            <Legend />
            <Bar dataKey="name" fill="#8884d8" />
            <Bar dataKey="total" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    );
};

export default Statistics;