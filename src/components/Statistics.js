import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    AreaChart,
    Area,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const loadData = useLoaderData();
    const data = loadData.data;
    return (
      <div className='min-h-[700px] flex items-center'>
        <div className="w-full lg:w-1/2 mx-auto h-96">
          <h2 className="font-bold text-indigo-400 text-5xl text-center my-5">
            Statistics Chart
          </h2>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default Statistics;
