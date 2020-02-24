import React from 'react';
import { connect } from 'react-redux';
import './index.css';

import NotesGrid from '../../containers/NotesGrid';
import { getPinnedNotes, getNotes, openEditModal } from '../../store/actions';

class Display extends React.Component {
    componentDidMount() {
        this.props.getPinnedNotes();
        this.props.getNotes();
    }

    render() {
        const { pinnedNotes, notes, openEditModal } = this.props;
        console.log(this.props);
        return (
            <div className="main-section">
            { 
                pinnedNotes.length > 0
                    ? (
                        <NotesGrid
                            title="PINNED"
                            notes={pinnedNotes}
                            onNoteClick={openEditModal}
                            sizeDefinitions = {{
                                tall: 5,
                                taller: 60,
                                tallest: 100
                            }}
                        />
                    )
                    : null
            }	
                <NotesGrid
                    title="OTHERS"
                    notes={notes}
                    onNoteClick={openEditModal}
                />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        pinnedNotes: state.notes_state.pinnedNotes,
        notes: state.notes_state.notes
    };
}
  
export default connect(mapStateToProps, {
    getPinnedNotes: getPinnedNotes,
    getNotes: getNotes,
    openEditModal: openEditModal,
})(Display);
