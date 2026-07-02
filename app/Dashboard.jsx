"use client";

import ReactGridLayout, { useContainerWidth } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Button, Table} from '@heroui/react';
import {useState} from "react";
import WidgetTable from './WidgetTable'
import AddWidgetModal from "./AddWidgetModal";


function Dashboard( props ) {

    const [layout, setLayout] = useState([]);
    const [columns] = useState(12);
    const [defaultWidth] = useState(4);
    const [totalWidgets, setTotalWidgets] = useState(0);

    const addWidget = () => {

        const maxY = layout.length === 0 ? 0 : Math.max(...layout.map((item) =>  {
            return item.y;
        }));

        const addX = layout.length === 0 ? 0 : Math.max(...layout.map((item) =>  {
            if(item.y === maxY) {
                return item.x + item.w;
            } else return 0;
        }));
        const xValue = addX > 8 ? 0 : addX;
        const yValue = addX > columns - defaultWidth ? maxY + 1 : maxY;

        const newLayout = [...layout, { i: `key-${totalWidgets + 1}`, x:xValue, y: yValue, w: 4, h: 2, name: `Panel ${layout.length + 1}` }]
        setLayout(newLayout);
        setTotalWidgets(totalWidgets + 1)
    }

    const handleResize = (newLayout) => {
        // const updatedLayouts = newLayout.map(widget => {
        //     const resizeObj = layout.find(item => item.i === widget.i);
        //     if (resizeObj) {
        //         return { ...widget, name: resizeObj.name };
        //     }
        //     return widget;
        // });
        setLayout(newLayout);
    }

    const handleCloseItem = (itemId) => {
        setLayout(currentLayout => currentLayout.filter(item => item.i !== itemId));
    };

    return (
        <>
            <AddWidgetModal onPress={addWidget}/>
            <ReactGridLayout className="layout" layout={layout} cols={columns} rowHeight={50} width={1000} onResize={handleResize}>

                {layout.map((item, i) =>
                    (

                        <div key={item.i}  className="bg-gray-200" style={{fontSize: 14, fontWeight: 'bold',}}>{item.name}
                            <div style={{minHeight: 20}}>
                            <Button
                                key={`button-${item.i}`}
                                onClick={() => handleCloseItem(item.i)}
                                style={{
                                    width:  '3px',
                                    height: '20px',
                                    position: 'absolute',
                                    top: '5px',
                                    right: '5px',
                                    cursor: 'pointer'
                                }}
                            >X
                            </Button>
                            </div>
                            <div style={{marginTop: 20}}>
                            <WidgetTable/>
                            </div>
                        </div>
                    )

                )}
            </ReactGridLayout>
        </>
    );


}

export default Dashboard;