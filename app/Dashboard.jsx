import ReactGridLayout, { useContainerWidth } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function Dashboard(props ) {

    const layout = [
        { i: 'a', x: 0, y: 0, w: 4, h: 2, name: 'Panel A' },
        { i: 'b', x: 4, y: 0, w: 8, h: 2, name: 'Panel B' },
    ];

    return (
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={50} width={1000}>

            {layout.map((item, i) =>
                (<div key={item.i}  className="bg-gray-200">{item.name}</div>)

            )}
            {/*<div key="a" className="bg-gray-200">Panel A</div>*/}
            {/*<div key="b" className="bg-gray-200">Panel B</div>*/}

        </ReactGridLayout>
    );


}

export default Dashboard;