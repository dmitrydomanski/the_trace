import React, { Component } from 'react';
import Tree from 'react-d3-tree';
// import axios from 'axios';
import Modal from '../UI/Modal/Modal';
import AddPersonForm from '../AddPerson/AddPersonForm';
import NodeLabel from '../NodeLabel/NodeLabel';
import Loader from '../UI/Loader/Loader';

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

    componentDidMount() {
        fetch('http://localhost:3001/api/getpersons')
            .then(res => res.json())
            .then(
                (result) => {
                    setTimeout(() => {
                        this.setState({
                            isLoaded: true,
                            persons: result.data,
                        });
                    }, 1500);
                },
            );
    }

    addPersonCancelHandler = () => {
        this.setState({
            addingPerson: false,
        });
    }

    addPersonHandler = (parent) => {
        this.setState({
            addingPerson: true,
        });
        console.log(parent);
    }

    render() {
        const { persons, addingPerson, error, isLoaded } = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return (
                <Modal show={!isLoaded}>
                    <Loader />
                </Modal>
            );
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
                        render: <NodeLabel
                            className="nodeLabel"
                            addPersonTrigger={this.addPersonHandler}
                        />,
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
