import React, { useEffect, useState } from 'react'

import '../../ComponentCss/Modal.css'

import ReactDOM from 'react-dom'

/**
 * Dynamic Modal allows an element, title, and setState function to be passed
 * @param {*} param0 
 * @returns 
 */
function Modal({childElement=null, title=null, setState, backgroundColor='white'}) {
    const root = document.getElementById('App-header')

    const handleClose = (e) => {
        const {name, className} = e.target
        
        if(name === undefined && className === "popupOverlay") setState(null)
    }

    return ( 
        <div onClick={handleClose} className='popupOverlay' name='overlay'> 
            <button className='closeBtn' onClick={() => setState(null)}>
                Close
            </button>
            <div className='popupCenter'>
                <div className={`modal ${backgroundColor}`}>
                    <div className='modalHeader'>
                        {title === null ? null : 
                            <h5 className='modalHeading'>
                                {title}
                            </h5>
                        }
                        {childElement !== null ? childElement : null}
                    </div>
                </div>
            </div>
        </div>)
}

export default Modal