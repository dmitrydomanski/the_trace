import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PersonCardMini from '../PersonCardMini/PersonCardMini';
// import Person from '../../models/Person';

class NodeLabel extends PureComponent {
    render() {
        const { className, nodeData } = this.props;
        return (
            <div className={className}>
                <PersonCardMini
                    url={nodeData.imageUrl}
                    parent={nodeData.parentId}
                    firstName={nodeData.firstName}
                    lastName={nodeData.lastName}
                    birthDate={nodeData.birthDate}
                    deathDate={nodeData.deathDate}
                    maidenName={nodeData.maidenName}
                    key={nodeData.id}
                />
            </div>
        );
    }
}

NodeLabel.propTypes = {
    className: PropTypes.string.isRequired,
    nodeData: PropTypes.shape({
        url: PropTypes.number,
        parent: PropTypes.object,
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
