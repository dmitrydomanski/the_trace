import React, { Component } from 'react';

// import MemberCard from '../../components/MemberCard/MemberCard';
// import NewMemberCard from '../../components/NewMemberCard/NewMemberCard';
import PersonCardMini from '../../components/PersonCardMini/PersonCardMini';
import Aux from '../../hoc/Aux/Aux';

class FamilyTree extends Component {
    state = {
        members: [
            { id: 1, firstName: 'Dmitry', lastName: 'Domanski', gender: 'male', maidenName: '', matrimonialStatus: 'm', birthDate: '06/10/1982', deathDate: null },
            // { id: 2, firstName: 'Anastasia', lastName: 'Domanski', gender: 'male', maidenName: 'Shchurok', matrimonialStatus: 'm', birthDate: '17/01/1982', deathDate: null },
            // { id: 3, firstName: 'Vera', lastName: 'Domanski', gender: 'female', maidenName: null , matrimonialStatus: 'k', birthDate: '23/10/2006', deathDate: null },
            { id: 4, firstName: 'Adam', lastName: 'Domanski', gender: 'male', maidenName: null, matrimonialStatus: 'k', birthDate: '06/10/2008', deathDate: null },
            // { id: 5, firstName: 'Daniel', lastName: 'Domanski', gender: 'male', maidenName: null, matrimonialStatus: 'k', birthDate: '14/12/2009', deathDate: null },
            // { id: 6, firstName: 'Roza', lastName: 'Domanski', gender: 'female', maidenName: null, matrimonialStatus: 'k', birthDate: '17/10/2017', deathDate: null },
            // { id: 7, firstName: 'Bella', lastName: 'Domanski', gender: 'female', maidenName: 'Talalay', matrimonialStatus: 'd', birthDate: '17/01/1934', deathDate: '07/09/2001' }
            { id: 8, firstName: 'Andrey', lastName: 'Domanski', gender: 'male', maidenName: null, matrimonialStatus: 'k', birthDate: '15/07/1960', deathDate: null },
            { id: 9, firstName: 'Victor', lastName: 'Domanski', gender: 'male', maidenName: null, matrimonialStatus: 'k', birthDate: '11/04/1932', deathDate: '2010' }

        ]
    }

    render() {

        const sortedMembers = this.state.members.map(member => {
            return { ...member, birthYear: +member.birthDate.split('').slice(-4).join('') };
        }).sort((a, b) => a.birthYear - b.birthYear);

        let members = sortedMembers.map(member => {
            return <PersonCardMini
                url={member.id}
                firstName={member.firstName}
                lastName={member.lastName}
                birthDate={member.birthDate}
                deathDate={member.deathDate}
                maidenName={member.maidenName}
                key={member.id} />;
        });

        return (
            <Aux>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {members}
                </div>
            </Aux>
        );
    }
}

export default FamilyTree;