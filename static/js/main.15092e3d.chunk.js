(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(3),o=n.n(i),s=(n(13),n(4)),c=n(5),d=n(6),l=n(8),u=n(7),h=(n(14),n(0)),b=function(e){return Object(h.jsx)("div",{id:"toolbar",children:e.text})},j=function(e){return Object(h.jsx)("div",{className:"grow-wrap",children:Object(h.jsx)("textarea",{id:"editor",name:e.name,value:e.value,onChange:e.onChange})})},v=n(16);v.setOptions({breaks:!0});var f=function(e){return Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:v(e.value)},id:"preview"})},m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,a=t.value;r.setState(Object(s.a)({},n,a))},r.state={text:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{id:"editordiv",children:[Object(h.jsx)(b,{text:"Editor"}),Object(h.jsx)(j,{name:"text",value:this.state.text,onChange:function(t){return e.handleChange(t)}})]}),Object(h.jsxs)("div",{id:"previewdiv",children:[Object(h.jsx)(b,{text:"Previewer"}),Object(h.jsx)(f,{value:this.state.text})]})]})}}]),n}(a.a.Component);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.15092e3d.chunk.js.map