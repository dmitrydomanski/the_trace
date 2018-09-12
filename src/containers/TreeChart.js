import React, { Component } from 'react';
import * as d3 from "d3";
import data from './data'

// import PersonCardMini from '../components/PersonCardMini/PersonCardMini';
// import Aux from '../hoc/Aux/Aux';

class TreeChart extends Component {

    state = {
        nodes: null,
        persons: data
    }

    componentDidMount() {
        const treeData = this.state.persons.map(person => {
            const obj = { id: person.id, parentId: person.parentId };
            return obj
        });

        const width = 600, height = 600;
        const tree = d3.tree().size([height, width - 160]);
        console.log(tree);
        const root = d3.stratify()
            .id(function (d) { return d.id; })
            .parentId(function (d) { return d.parentId; })(treeData);
        this.setState({ paths: tree(root).links() });
        this.setState({ nodes: root.descendants() });
    }

    render() {

        // const persons = this.state.persons.map(person => {
        //     return { ...person, birthYear: +person.birthDate.split('').slice(-4).join('') }
        // }).sort((a, b) => a.birthYear - b.birthYear);

        let paths = this.state.paths && this.state.paths.map(item => {
            let d = d3
                .linkVertical()
                .x((d) => {
                    // console.log(d)
                    return d.x;
                })
                .y((d) => {
                    return d.y;
                });
            return <path
                fill="none"
                stroke="#97a6ff"
                strokeWidth="2px"
                className='link' d={d(item)} />
        })

        let nodes = this.state.nodes && this.state.nodes.map((node, i) => {
            return <g key={node.id}  style={{width: '200px', height: '300px', backgroundColor: 'red'}} className={"node" + node.children ? " node--internal" : " node--leaf"}
                transform={`translate(${node.y}, ${node.x})`}>
                {/* <circle r="10" style={{ fill: node.children ? 'lightsteelblue' : 'red' }} />
                <text y="0" dy="0" textAnchor="middle"
                    style={{ 'fillOpacity': 1 }}>{node.id}</text> */}
                {/* <PersonCardMini
                    url={persons[i].id}
                    firstName={persons[i].firstName}
                    lastName={persons[i].lastName}
                    birthDate={persons[i].birthDate}
                    deathDate={persons[i].deathDate}
                    maidenName={persons[i].maidenName}
                    key={persons[i].id} /> */}
                    <div style={{width: '200px', height: '300px', backgroundColor: 'red'}}></div>
            </g>
        })

        return (
            <svg className="tree-chart-basic" ref={(r) => this.chartRf = r} style={{ width: '1000px', height: '1500px' }}>
                <g transform='translate(20,20)'>
                    {nodes}
                    {paths}
                </g>
            </svg>
        );
    }

}

export default TreeChart;