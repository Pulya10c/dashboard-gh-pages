(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(47)},30:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),s=n(9),o=n.n(s),u=n(10),i=n(4),m=n(5),d=n(7),h=n(6),f=n(8),p=n(22),E=(n(30),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){n.setState({selectedMentor:e}),n.props.onMentorSelection(e.value),localStorage.setItem("Mentor-Dashboard",JSON.stringify(e))},n.state={selectedMentor:localStorage.getItem("Mentor-Dashboard")?JSON.parse(localStorage.getItem("Mentor-Dashboard")):{value:null,label:null}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.onMentorSelection(this.state.selectedMentor.value);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.selectedMentor,t=this.props.data,n=Object.keys(t.mentors).map(function(e){return{value:t.mentors[e].mentorGithub,label:t.mentors[e].mentorGithub}});return r.a.createElement(p.a,{value:e,onChange:this.handleChange,options:n})}}]),t}(a.Component)),b=function(e){var t=e.nameClass;return r.a.createElement("td",{className:t},t)},k=function(e){var t=e.student;return r.a.createElement("th",null,r.a.createElement("a",{target:"_blank",href:t.linkGithub},t.student))},v=(n(43),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).HeadListTasks=function(e,t){return r.a.createElement("tr",{key:e.mentors[t].id},r.a.createElement("th",null,"Name tasks"),e.mentors[t].students.map(function(e){return r.a.createElement(k,{key:e.id,student:e})}))},n.listTasks=function(e,t){return Object.keys(e.tasks).map(function(n){return r.a.createElement("tr",{key:e.tasks[n].id},r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",href:e.tasks[n].link},n)),e.mentors[t].students.map(function(e){return r.a.createElement(b,{key:e.tasks[n].id,nameClass:e.tasks[n].className})}))})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,n=this.props,a=n.data,l=n.mentor;return a&&l?(t=this.HeadListTasks(a,l),e=this.listTasks(a,l)):(t=r.a.createElement("tr",null,r.a.createElement("td",null,"not students")),e=r.a.createElement("tr",null,r.a.createElement("td",null,"not data"))),r.a.createElement("table",null,r.a.createElement("tbody",null,t,e))}}]),t}(a.Component)),g=function(){return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"green"},"xxxx"),r.a.createElement("td",{className:"white"},"- checked by mentor  "),r.a.createElement("td",{className:"yellow"},"xxxx"),r.a.createElement("td",{className:"white"},"- students working on tdat task now  "),r.a.createElement("td",{className:"gray"},"xxxx"),r.a.createElement("td",{className:"white"},"- task in todo state  "),r.a.createElement("td",{className:"pink"},"xxxx"),r.a.createElement("td",{className:"white"},"- need to check  "),r.a.createElement("td",{className:"red"},"xxxx"),r.a.createElement("td",{className:"white"},"- checked by mentime for checking is gone and no mark from mentor  "))))},x=(n(45),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,data:null,mentor:null},n.onMentorSelection=function(e){n.setState({mentor:e})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data.json").then(function(e){return e.json()}).then(function(e){t.setState({data:e,isLoading:!1})}).catch(function(e){return console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,n=e.isLoading,l=e.mentor;return n?r.a.createElement("div",null,r.a.createElement("h3",null,"Loading...")):r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"headline"},r.a.createElement("h1",null,"Mentor dashboard")),r.a.createElement("div",{className:"wrapper-search"},r.a.createElement("p",null,"Select mentor: "),r.a.createElement(E,{data:t,onMentorSelection:this.onMentorSelection})),r.a.createElement(v,{mentor:l,data:t}),r.a.createElement(g,null))}}]),t}(a.Component));c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.d2d093e1.chunk.js.map