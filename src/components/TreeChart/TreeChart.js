import React, { Component } from 'react';
import Tree from 'react-d3-tree';
// import { withRouter } from 'react-router-dom';
import { DB_CONFIG } from '../../Config/config';
import data from '../../data';
import NodeLabel from '../NodeLabel/NodeLabel';
import firebase from 'firebase'

class TreeChart extends Component {

    constructor(props) {
        console.log(firebase);
        super(props);
        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(DB_CONFIG);
        }
        this.db = firebase.database().ref().child('persons');
        this.state = {
            nodes: null,
            persons: data
        }
    }

    createDataTree = (dataSet) => {
        let hashTable = Object.create(null);
        dataSet.forEach(aData => hashTable[aData.id] = { ...aData, children: [] });
        let DataTree = [];
        dataSet.forEach(aData => {
            if (aData.parentId) {
                hashTable[aData.parentId].children.push(hashTable[aData.id])
            }
            else {
                DataTree.push(hashTable[aData.id])
            }
        })
        return DataTree;
    }

    sortByBirthDate = (array) => {
        return array.map(person => {
            return { ...person, imageUrl: person.id, name: person.id.toString(), birthYear: +person.birthDate.split('').slice(-4).join('') }
        }).sort((a, b) => a.birthYear - b.birthYear);
    }

    componentDidMount() {
        const prevPersons = this.state.persons;

        this.db.on('child_added', snap => {
            prevPersons.push({
                id: snap.key,
                firstName: snap.val().firstName,
                lastName: snap.val().lastName,
                gender: snap.val().gender,
                birthDate: snap.val().birthDate,
                deathDate: snap.val().deathDate,
                parentId: snap.val().parentId

            })
        })
    }

    render() {
        const treeData = this.createDataTree(this.sortByBirthDate(this.state.persons));
        return (
            <div id="treeWrapper" style={{ width: '1500px', height: '1500px' }}>
                <Tree
                    data={treeData}
                    nodeSize={{ x: 300, y: 400 }}
                    orientation={'vertical'}
                    allowForeignObjects
                    collapsible={false}
                    translate={{ x: 600, y: 200 }}
                    zoom={0.4}
                    nodeLabelComponent={{
                        render: <NodeLabel className='myLabelComponentInSvg' />,
                        // foreignObjectWrapper: {
                        //     y: 24
                        // }
                    }} />

            </div>
        )
    }

}

// export default withRouter(TreeChart);
export default TreeChart;