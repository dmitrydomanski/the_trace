import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PersonCardMini from '../PersonCardMini/PersonCardMini';
import Person from '../../models/Person';

class NodeLabel extends PureComponent {
    render() {
        const { className, nodeData } = this.props;
        let person = new Person();
        person = {
            ...nodeData,
        };
        // const person = Object.create(Person, nodeData);
        // console.log(person);
        return (
            <div className={className}>
                <PersonCardMini
                    url={person.imageUrl}
                    parent={person.parentId}
                    firstName={person.firstName}
                    lastName={person.lastName}
                    birthDate={person.birthDate}
                    deathDate={person.deathDate}
                    maidenName={person.maidenName}
                    key={person.id}
                />
            </div>
        );
    }
}

NodeLabel.propTypes = {
    className: PropTypes.string.isRequired,
    nodeData: PropTypes.shape({
        url: PropTypes.number,
        parent: PropTypes.instanceOf(Person),
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        maidenName: PropTypes.string,
        birthDate: PropTypes.string.isRequired,
        deathDate: PropTypes.string,

    }),
    // nodeData: PropTypes.object,
};

NodeLabel.defaultProps = {
    nodeData: null,
};

export default NodeLabel;
