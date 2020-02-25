import React from 'react';
import { connect } from 'react-redux';
import './index.css';

import NotesGrid from '../../containers/NotesGrid';
import { getPinnedNotes, getNotes, openEditModal, pinNote, unpinNote } from '../../store/actions';

class Display extends React.Component {
    componentDidMount() {
        this.props.getPinnedNotes();
        this.props.getNotes();
    }

    render() {
        const { pinnedNotes, notes, openEditModal, pinNote, unpinNote} = this.props;
        return (
            <div className="main-section">
            { 
                pinnedNotes.length > 0
                    ? (
                        <NotesGrid
                            title="PINNED"
                            notes={pinnedNotes}
                            onNoteClick={openEditModal}
                            onPinClick={pinNote}
                            onUnpinClick={unpinNote}
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
                    onPinClick={pinNote}
                    onUnpinClick={unpinNote}
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
    pinNote:pinNote,
    unpinNote: unpinNote,
    getPinnedNotes: getPinnedNotes,
    getNotes: getNotes,
    openEditModal: openEditModal,
})(Display);
