import{j as n,r as o}from"./app.0b963a75.js";function p({message:e,className:r=""}){return e?n("p",{className:"text-sm text-red-600 "+r,children:e}):null}function x({type:e="text",name:r,value:s,className:u,autoComplete:i,required:c,isFocused:f,handleChange:a}){const t=o.exports.useRef();return o.exports.useEffect(()=>{f&&t.current.focus()},[]),n("div",{className:"flex flex-col items-start",children:n("input",{type:e,name:r,value:s,className:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm py-2 outline-none focus:outline-none "+u,ref:t,autoComplete:i,required:c,onChange:d=>a(d)})})}export{p as I,x as T};
