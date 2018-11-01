import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import firebase from '../../Config/config';
import 'firebase/database';
import data from '../../data';
import Modal from '../UI/Modal/Modal';
import AddPersonForm from '../AddPerson/AddPersonForm';
import NodeLabel from '../NodeLabel/NodeLabel';

class TreeChart extends Component {
    constructor(props) {
        super(props);
        this.database = firebase.database().ref().child('persons');

        this.state = {
            // nodes: null,
            persons: data,
            addingPerson: false,
        };
    }

    async componentDidMount() {
        let { persons } = this.state;

        const modifiedPersons = await Promise.all(persons.map((person) => {
            const num = person.id;
            if (typeof num !== 'number') {
                return null;
            }
            return import(`../../assets/${person.id}.jpg`);
        }))
            .then((personsImages) => {
                persons = persons.map((person, index) => ({
                    ...person,
                    imageUrl: personsImages[index],
                }));
                return persons;
            });

        this.setState({
            persons: modifiedPersons,
        });
    }

    createDataTree = (dataSet) => {
        const hashTable = Object.create(null);
        dataSet.forEach((aData) => {
            hashTable[aData.id] = {
                ...aData, children: [],
            };
        });
        const DataTree = [];
        dataSet.forEach((aData) => {
            if (aData.parentId) {
                hashTable[aData.parentId].children.push(hashTable[aData.id]);
            } else {
                DataTree.push(hashTable[aData.id]);
            }
        });
        return DataTree;
    }

    sortByBirthDate = array => array.map(person => (
        {
            ...person,
            name: person.id.toString(),
            birthYear: +person.birthDate.split('').slice(-4).join(''),
        })).sort((a, b) => a.birthYear - b.birthYear);

    addPersonCancelHandler = () => {
        this.setState({
            addingPerson: false,
        });
    }

    addPerson = () => {
        this.database.push().set({
            firstName: 'Dmitry',
            lastName: 'Domanski',
            gender: 'male',
            birthDate: '06/10/1982',
            deathDate: null,
            parentId: null,
        });
    }

    render() {
        const { persons, addingPerson } = this.state;
        const treeData = this.createDataTree(this.sortByBirthDate(persons));
        return (
            <div
                id="treeWrapper"
                style={{
                    width: '1500px', height: '1500px',
                }}
            >
                <Modal show={addingPerson} modalClosed={this.addPersonCancelHandler}>
                    <AddPersonForm />
                </Modal>
                <Tree
                    data={treeData}
                    nodeSize={{
                        x: 330, y: 450,
                    }}
                    orientation="vertical"
                    allowForeignObjects
                    collapsible={false}
                    translate={{
                        x: 800, y: 200,
                    }}
                    zoom={0.4}
                    nodeLabelComponent={{
                        render: <NodeLabel className="myLabelComponentInSvg" />,
                        foreignObjectWrapper: {
                            y: 24,
                        },
                    }}
                />

            </div>
        );
    }
}

export default TreeChart;
