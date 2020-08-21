import React from 'react'
import Header from './Header'
import InnerEditorContainer from './InnerEditorContainer'
import Footer from './Footer'


const EditorContainer = () => {
    return (
        <div className="editor-container h-screen font-mono">
            <header className="header flex justify-between pl-2 items-center bg-gray-700">
                <Header />
            </header>
            <section className="inner-editor-container border border-solid border-black flex w-full">
                <InnerEditorContainer />
            </section>
            <footer className="flex justify-between px-2">
                <Footer />
            </footer>
        </div>
    )
}

export default EditorContainer
