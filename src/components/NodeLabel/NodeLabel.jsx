import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PersonCardMini from '../PersonCardMini/PersonCardMini';

class NodeLabel extends PureComponent {
    render() {
        const { className, nodeData, addPersonTrigger } = this.props;
        return (
            <div className={className}>
                <PersonCardMini
                    person={nodeData}
                    addPersonTrigger={addPersonTrigger}
                    key={nodeData.id}
                />
            </div>
        );
    }
}

NodeLabel.propTypes = {
    className: PropTypes.string.isRequired,
    addPersonTrigger: PropTypes.func,
    nodeData: PropTypes.shape({
        url: PropTypes.number,
        parent: PropTypes.object,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        maidenName: PropTypes.string,
        birthDate: PropTypes.string.isRequired,
        deathDate: PropTypes.string,

    }),
};

NodeLabel.defaultProps = {
    nodeData: null,
    addPersonTrigger: null,
};

export default NodeLabel;
