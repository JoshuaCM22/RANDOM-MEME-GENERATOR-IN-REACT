(this.webpackJsonprandom_meme_generator_in_react=this.webpackJsonprandom_meme_generator_in_react||[]).push([[0],{3:function(e,t,a){e.exports=a(9)},8:function(e,t,a){},9:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),l=a(2),o=a.n(l);class s extends n.Component{constructor(){super(),this.handleChange=e=>{const t=e.target,a=t.name,n=t.value;this.setState({[a]:n})},this.handleClick=()=>{let e=Math.floor(Math.random()*this.state.allMemeImgs.length);this.setState({randomImg:this.state.allMemeImgs[e].url})},this.state={fontSize:"26",topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]}}componentDidMount(){fetch("https://api.imgflip.com/get_memes").then(e=>e.json()).then(e=>{const t=e.data.memes;this.setState({allMemeImgs:t})})}render(){return m.a.createElement("div",null,m.a.createElement("div",{className:"memeForm"},m.a.createElement("h1",null,"Random Meme Generator"),m.a.createElement("input",{type:"text",name:"topText",placeholder:"Enter here your top text",onChange:this.handleChange,value:this.state.topText}),m.a.createElement("br",null),m.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Enter here your bottom text",onChange:this.handleChange,value:this.state.bottomText}),m.a.createElement("br",null),m.a.createElement("label",null,"Font Size: "),m.a.createElement("input",{type:"number",name:"fontSize",onChange:this.handleChange,value:this.state.fontSize}),m.a.createElement("button",{onClick:this.handleClick},"Generate new meme")),m.a.createElement("div",{className:"meme"},m.a.createElement("h2",{style:{fontSize:Number(this.state.fontSize)},className:"top"},this.state.topText),m.a.createElement("img",{src:this.state.randomImg,alt:""}),m.a.createElement("h2",{style:{fontSize:Number(this.state.fontSize)},className:"bottom"},this.state.bottomText)))}}a(8);function r(){return m.a.createElement(s,null)}o.a.render(m.a.createElement(r,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.646d82de.chunk.js.map