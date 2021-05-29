import React from 'react';

let Editor = (props) => {
    return (
        <div className='grow-wrap'>
            <textarea 
                id='editor'
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Editor;