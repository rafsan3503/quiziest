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
    ComposedChart,
  Line
} from "recharts";

const Statistics = () => {
    const loadData = useLoaderData();
    const data = loadData.data;
    return (
      <div className="min-h-[80vh] flex-col justify-center items-evenly mt-10">
        <div className="w-full lg:w-1/2 mx-auto h-96">
          <ResponsiveContainer>
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="Topics"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="total" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="name" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full lg:w-1/2 mx-auto h-96">
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
