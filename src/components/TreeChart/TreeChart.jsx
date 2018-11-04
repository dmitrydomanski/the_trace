import React, { Component } from 'react';
import Tree from 'react-d3-tree';
// import axios from 'axios';
import Modal from '../UI/Modal/Modal';
import AddPersonForm from '../AddPerson/AddPersonForm';
import NodeLabel from '../NodeLabel/NodeLabel';

class TreeChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // nodes: null,
            error: null,
            isLoaded: false,
            persons: [],
            addingPerson: false,
        };
    }

    async componentDidMount() {
        fetch('http://localhost:3001/api/getpersons')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        persons: result.data,
                    });
                },
            );
    }

    addPersonCancelHandler = () => {
        this.setState({
            addingPerson: false,
        });
    }

    render() {
        const { persons, addingPerson, error, isLoaded } = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
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
                    data={persons}
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
