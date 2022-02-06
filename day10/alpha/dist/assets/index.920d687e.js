const x=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};x();const y=document.querySelector("header"),v=()=>{y.innerHTML=`<nav class="bg-white bg-opacity-75 fixed top-0 w-full">
  <ul class="flex justify-between p-4">
    <li><h1 class="text-2xl">alpha's js 30 days</h1></li>
    <li><a class="hover:text-blue-500 text-xl" href="https://github.com/Rabbittee/JavaScript30/tree/main/day10/alpha">Github</a></li>
  </ul>
  </nav>`};v();let r=[];r=JSON.parse(localStorage.getItem("todolist")||"[]");let l=[];l=JSON.parse(localStorage.getItem("completelist")||"[]");const a=e=>document.querySelector(e),c=a(".in-progress"),d=a(".complete"),m=a("#todo"),L=a("form");function p(e,t){t==="todo"?g(r,l,e):g(l,r,e),u()}function g(e,t,o){const i=e.findIndex(n=>n.id===o);t.push(e[i]),e.splice(i,1)}function N(e){if(e.preventDefault(),!m.value)return;const t={id:Date.now(),title:m.value};r.push(t),u()}L.addEventListener("submit",N);c.addEventListener("click",e=>{var i;const t=e.target,o=(i=t.parentNode)==null?void 0:i.parentNode;if(t.classList.contains("delete"))b(e);else if(o.classList.contains("todo-item")){const n=Number(o.dataset.key);p(n,"todo")}});d.addEventListener("click",e=>{var i;const t=e.target,o=(i=t.parentNode)==null?void 0:i.parentNode;if(t.classList.contains("delete"))b(e);else if(o.classList.contains("complete-item")){const n=Number(o.dataset.key);p(n,"complete")}});function u(){c.textContent="",d.textContent="",localStorage.setItem("todolist",JSON.stringify(r)),localStorage.setItem("completelist",JSON.stringify(l)),S()}u();function b(e){e.target.parentNode.classList.add("animate-fadeOut")}c.addEventListener("animationend",e=>{h(e,r)});d.addEventListener("animationend",e=>{h(e,l)});function h(e,t){if(e.animationName!=="fadeOut")return;const o=a(".animate-fadeOut"),i=Number(o.dataset.key),n=t.findIndex(s=>s.id===i);t.splice(n,1),u()}function S(){w(),I()}function w(){let e="";r.map(t=>{e+=`<li class="flex bg-zinc-50 rounded-lg p-4 justify-between items-center todo-item animate-fadeIn" data-key="${t.id}">
  
    <div class="flex justify-center items-center space-x-4">
    <button
    class="toggle text-gray-400 border border-gray-400 rounded-full w-6 h-6 flex justify-center items-center active:scale-90 transition-all duration-300"
    >
    \u2713
  </button> 
      <label class="text-gray-600">${t.title}</label>
    </div>
    <button
      class="delete text-red-500 border border-red-500 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300"
      
    >
      Delete
    </button>
    </li>`}),c.innerHTML=e}function I(){let e="";l.map(t=>{e+=`<li class="flex bg-zinc-50 rounded-lg p-4 justify-between items-center complete-item animate-fadeIn " data-key="${t.id}">
  
    <div class="flex justify-center items-center space-x-4">
    <button
    class="toggle text-teal-400 border border-teal-400 rounded-full w-6 h-6 flex justify-center items-center active:scale-90 transition-all duration-300"
    >
    \u2713
  </button> 
      <label class="text-teal-600 line-through">${t.title}</label>
    </div>
    <button
      class="delete text-red-500 border border-red-500 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300 "
      
    >
      Delete
    </button>
    </li>`}),d.innerHTML=e}
