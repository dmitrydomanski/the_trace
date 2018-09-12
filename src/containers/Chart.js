import React, { Component } from 'react';
import Tree from 'react-d3-tree';

import data from './data';
import NodeLabel from '../components/NodeLabel';

class FamilyTree extends Component {

    state = {
        nodes: null,
        persons: data
    }

    omitKey = (object, omitKey) => {
        return Object.keys(object).reduce((result, key) => {
            if (key !== omitKey) {
                result[key] = object[key];
            }
            // console.log(result);
            return result;
        }, {});
    }

    stratifyTree = (array) => {
        // const treeData = this.state.persons;
        return array.map(el => {
            return {
                id: el.id,
                attrs: this.omitKey(el, 'id'),
                children: array.filter(person => person.parentId === el.id)
            }
        });
    }

    createDataTree = (dataSet) => {
        let hashTable = Object.create(null);
        dataSet.forEach(aData => hashTable[aData.id] = {...aData, children: []});
        let DataTree = [];
        dataSet.forEach(aData => {
            if (aData.parentId) {
                hashTable[aData.parentId].children.push(hashTable[aData.id])}
                else {
                    DataTree.push(hashTable[aData.id])
                }
        })
        return DataTree;
    } 

    sortByBirthDate = (array) => {
       return array.map(member => {
            return { ...member, birthYear: +member.birthDate.split('').slice(-4).join('') }
        }).sort((a, b) => a.birthYear - b.birthYear);
    }

    componentDidMount() {
        console.log(this.createDataTree(this.state.persons));
        // console.log(this.state.persons);
    }

    render() {
        const treeData = this.createDataTree(this.state.persons);
        return (
            <div id="treeWrapper" style={{ width: '1500px', height: '1500px' }}>
                <Tree
                    data={treeData}
                    nodeSize={{x:400, y: 400}}
                    orientation={'vertical'}
                    allowForeignObjects
                    collapsible={false}
                    translate={{x: 1200, y: -300}}
                    zoom={0.7}
                    nodeLabelComponent={{
                        render: <NodeLabel className='myLabelComponentInSvg' />,
                        // foreignObjectWrapper: {
                        //     y: 96
                        // }
                    }} />

            </div>
        )
    }

}

export default FamilyTree;