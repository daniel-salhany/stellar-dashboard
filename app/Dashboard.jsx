"use client";

import ReactGridLayout, { useContainerWidth } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Button } from '@heroui/react';
import {useState} from "react";


function Dashboard( props ) {

    const [layout, setLayout] = useState([]);
    const [columns, setColumns] = useState(12);

    const addWidget = () => {

        const maxY = layout.length === 0 ? 0 : Math.max(...layout.map((item) =>  {
            return item.y;
        }));
        // console.log('maxY: ' + maxY);

        const addX = layout.length === 0 ? 0 : Math.max(...layout.map((item) =>  {
            if(item.y === maxY) {
                return item.x;
            } else return 0;
        })) + 4;
        const xValue = addX === 12 ? 0 : addX;
        const yValue = addX === 12 ? maxY + 1 : maxY;
        // console.log('layout: ', layout);
        // console.log('addX: ', addX);
        const newLayout = [...layout, { i: `key-${layout.length + 1}`, x:xValue, y: yValue, w: 4, h: 2, name: `Panel ${layout.length + 1}` }]
        setLayout(newLayout);
    }

    return (
        <>
            <Button onPress={addWidget}>Add a widget</Button>
            <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={50} width={1000}>

                {layout.map((item, i) =>
                    (<div key={item.i}  className="bg-gray-200">{item.name}</div>)

                )}
            </ReactGridLayout>
        </>
    );


}

export default Dashboard;