import{u as v}from"./useSocket.baf0e129.js";import{r as t,d as l,j as r,F as g,a as o,L as y}from"./app.0b963a75.js";import{P as S}from"./FlashMessage.7487a345.js";import{T as a}from"./Typography.1e60e37c.js";import{T as b}from"./TextField.e42411c6.js";import{C as T}from"./Card.72744c5a.js";import{J as C}from"./Link.32309b03.js";import{B as d}from"./useForwardedInput.a1a091b8.js";import{C as w}from"./CssVarsProvider.9f8a6919.js";import"./useId.708cf8ef.js";const m=route("advice.index"),I=i=>{const[c,p]=t.exports.useState({}),[N,h]=t.exports.useState(""),[u,n]=t.exports.useState(i.topic.data);t.exports.useEffect(()=>{n(i.topic.data)},[i.topic]),v({channel:"topic",event:"TopicEvent"},e=>{e.type==="created"&&n(s=>[e.topic,...s])},!1);const f=t.exports.useCallback(e=>{p(s=>({...s,...e})),l.Inertia.get(m,e,{replace:!0,preserveState:!0,only:["topic"]})},[]);t.exports.useEffect(()=>{c.length>0&&l.Inertia.get(m,newQuery,{replace:!0,preserveState:!0,only:["data"]})},[c]);const x=_.debounce(e=>{h(e),f({page:1,q:e})},100);return r(g,{children:o(w,{children:[r(a,{fontWeight:"lg",level:"h5",children:"Topic"}),o("div",{className:"md:w-5/6 sm:w-full mx-auto mt-5",children:[r("div",{className:"d-flex",children:r("div",{className:"w-3/12 mb-9",children:r(b,{placeholder:"Search Here...",size:"lg",startDecorator:r(S,{className:"w-4"}),onChange:e=>x(e.target.value)})})}),u.map(e=>o(T,{color:"primary",variant:"outlined",className:"mt-5",row:!0,sx:{minWidth:"320px",gap:2,"&:hover":{boxShadow:"md",borderColor:"neutral.outlinedHoverBorder"}},children:[r(C,{overlay:!0,component:y,method:"GET",underline:"none",href:route("advice.show",e.id),sx:{color:"text.tertiary"}}),r(d,{children:o(d,{sx:{ml:.5},children:[r(a,{level:"h2",fontSize:"lg",id:"card-description",mb:.5,children:e.title}),r(a,{level:"body1",children:e.description}),r(a,{fontSize:"sm","aria-describedby":"card-description",mb:1})]})})]}))]})]})})};export{I as default};
