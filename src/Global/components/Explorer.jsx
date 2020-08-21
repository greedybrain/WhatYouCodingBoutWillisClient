import React from 'react'
import ExplorerNavbar from './ExplorerNavbar'

const Explorer = ({ renderRightNavItemLook }) => {
    return (
        <>
            <div className="navbar border border-solid border-black-500">
                <ExplorerNavbar renderRightNavItemLook={renderRightNavItemLook} />
            </div>
            {/* SocialIcons  */}
        </>
    )
}

export default Explorer
