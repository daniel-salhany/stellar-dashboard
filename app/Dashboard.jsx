"use client";

import ReactGridLayout, { useContainerWidth } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Button, Table} from '@heroui/react';
import {useState} from "react";
import WidgetTable from './WidgetTable'
import AddWidgetModal from "./AddWidgetModal";

const tableData = [
    {name: 'Kate Moore', role: 'CEO', status: 'Active'},
    {name: 'John Smith', role: 'CTO', status: 'Active'},
    {name: 'Sarah Johnson', role: 'CMO', status: 'On Leave'},
    {name: 'Michael Brown', role: 'CFO', status: 'Active'},
]

function Dashboard( props ) {

    const [layout, setLayout] = useState([]);
    const [columns] = useState(12);
    const [defaultWidth] = useState(4);
    const [totalWidgets, setTotalWidgets] = useState(0);

    const addWidget = (name, type) => {

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

        const newLayout = [...layout, { i: `key-${totalWidgets + 1}`, x:xValue, y: yValue, w: 4, h: 2, name: name ? name : `Panel ${layout.length + 1}` }]
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
            <br/>
            &nbsp;Please select one or more widgets to add to your custom dashboard.
            <br/><br/>
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
                            <WidgetTable data={tableData}/>
                            </div>
                        </div>
                    )

                )}
            </ReactGridLayout>
        </>
    );


}

export default Dashboard;