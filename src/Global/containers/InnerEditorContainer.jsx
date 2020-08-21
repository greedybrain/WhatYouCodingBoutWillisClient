import React from 'react'
import Explorer from '../components/Explorer'
import WorkspacesContainer from './WorkspacesContainer'

const InnerEditorContainer = () => {
    return (
        <>
            <div className="explorer border border-solid border-red-500 w-10">
                <Explorer/>
            </div>
            <div className="workspaces-container w-full">
                <WorkspacesContainer />
            </div>
        </>
    )
}

export default InnerEditorContainer
