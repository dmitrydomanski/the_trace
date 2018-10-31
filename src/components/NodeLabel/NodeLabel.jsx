import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PersonCardMini from '../PersonCardMini/PersonCardMini';

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
    nodeData: PropTypes.node.isRequired,
};

export default NodeLabel;
