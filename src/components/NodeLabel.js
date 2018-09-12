import React, { PureComponent } from 'react';
import PersonCardMini from '../components/PersonCardMini/PersonCardMini';

class NodeLabel extends PureComponent {
    render() {
      const {className, nodeData} = this.props
      return (
        <div className={className}>
          <PersonCardMini
                // url={`../../../assets/${nodeData.imageUrl}.jpg`}
                url={nodeData.imageUrl}
                firstName={nodeData.firstName}
                lastName={nodeData.lastName}
                birthDate={nodeData.birthDate}
                deathDate={nodeData.deathDate}
                maidenName={nodeData.maidenName}
                key={nodeData.id}/>
          {/* {nodeData._children && 
            <button>{nodeData._collapsed ? 'Expand' : 'Collapse'}</button>
          } */}
        </div>
      )
    }
  }

  export default NodeLabel;