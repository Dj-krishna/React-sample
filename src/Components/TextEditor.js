import React, { useEffect } from 'react'
import '../Components/style.css'

const TextEditor = () => {

    useEffect(() => {
        formatBold();
        formatUnderline();
        formatItalic();
        formatColor();
    }, []);


    const formatBold = () => {
        const boldBtn = document.querySelector('#bold-btn');

        if (boldBtn) {
            boldBtn.addEventListener('click', () => {
                document.execCommand('bold')
            })
        }
    }

    const formatUnderline = () => {
        const underlineBtn = document.querySelector('#underline-btn');

        if (underlineBtn) {
            underlineBtn.addEventListener('click', () => {
                document.execCommand('underline')
            })
        }
    }
    const formatItalic = () => {
        const italicBtn = document.querySelector('#italic-btn');

        if (italicBtn) {
            italicBtn.addEventListener('click', () => {
                document.execCommand('italic')
            })
        }
    }
    const formatColor = () => {
        const colorBtn = document.querySelector('#color-btn');

        if (colorBtn) {
            colorBtn.addEventListener('input', () => {
                document.execCommand('foreColor', false, colorBtn.value)
            })
        }
    }

    return (
        <div className='container'>
            <div className='controls'>
                <div className='main-controls'>
                    <div className='dropdown'>
                        <button className='btn btn-primary dropdown-toggle' data-bs-toggle='dropdown'>Files</button>
                        <div className='dropdown-menu'>
                            <button className='dropdown-item'>New</button>
                            <button className='dropdown-item'>Save ad TXT</button>
                            <button className='dropdown-item'>Save as PDF</button>
                        </div>
                    </div>
                    <input type='text' id='filename-input' className='form-control' value='untitled' />
                </div>
                <div className='control-btn-container'>
                    <button id='bold-btn' className='btn btn-dark control-btn'>B</button>&nbsp;
                    <button id='underline-btn' className='btn btn-dark control-btn'>U</button>&nbsp;
                    <button id='italic-btn' className='btn btn-dark control-btn'>I</button>&nbsp;
                    <button id='fontsize-btn' className='btn btn-dark control-btn'>font size</button>&nbsp;
                    <button id='heading-btn' className='btn btn-dark control-btn'>H</button>&nbsp;
                    <button id='center-btn' className='btn btn-dark control-btn'>C</button>&nbsp;
                    <button id='left-btn' className='btn btn-dark control-btn'>L</button>&nbsp;
                    <button id='right-btn' className='btn btn-dark control-btn'>R</button>&nbsp;
                    <input id='color-btn' type='color' className='control-btn' />
                </div>
            </div>
            <div id='content' contentEditable='true' suppressContentEditableWarning='true' spellCheck='false'>
                Install Bootstrap’s source Sass and JavaScript files via npm, Composer, or Meteor.
                Package managed installs don’t include documentation or our full build scripts.
                You can also use our npm template repo to quickly generate a Bootstrap project via npm.
            </div>
        </div>
    )
}

export default TextEditor
