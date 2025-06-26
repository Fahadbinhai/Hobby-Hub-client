import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const SingleColorPie = () => {

    const [show, setShow] = useState([])

    // console.log(show.length)
    useEffect(() => {
        fetch('https://assignment-10-hobby-server.vercel.app/hobbies')
            .then(res => res.json())
            .then(data => {
                setShow(data)
            })
    }, [])


    const coloredValue = show?.length;
    const totalValue = 100;

    const data = [
        { name: 'Colored', value: coloredValue },
        { name: 'Empty', value: totalValue - coloredValue }
    ];

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                        innerRadius={60}
                        outerRadius={80}
                        stroke="none"
                        label={false}
                    >
                        <Cell key="colored" fill="red" />
                        <Cell key="empty" fill="white" />
                    </Pie>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ fontSize: '24px', fontWeight: 'bold' }}
                    >
                        {show?.length}%
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SingleColorPie;
