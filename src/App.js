import React from 'react'
import './App.css';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Footer from './components/Footer.js';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: placeholder,

    }
  }
  
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='general'>
        <div className="App">
          <div id='editordiv'>
            <Toolbar 
              text='Editor'
            />
            <Editor 
              name='text'
              value={this.state.text}
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div id='previewdiv'>
            <Toolbar 
              text='Previewer'
            />
            <Preview 
              value={this.state.text}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
