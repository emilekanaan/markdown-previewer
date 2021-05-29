import React from 'react';

let marked = require('marked')
marked.setOptions({ breaks:true });


let Preview = (props) => {
    return (
        <div 
            dangerouslySetInnerHTML={{ __html: marked(props.value)}}
            id='preview'
        >
            
        </div>
    )
}

export default Preview;