const h=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};h();const y=document.querySelector("header"),x=()=>{y.innerHTML=`<nav class="bg-white bg-opacity-75 fixed top-0 w-full">
  <ul class="flex justify-between p-4">
    <li><h1 class="text-2xl">alpha's js 30 days</h1></li>
    <li><a class="hover:text-blue-500 text-xl" href="https://github.com/Rabbittee/JavaScript30/tree/main/day10/alpha">Github</a></li>
  </ul>
  </nav>`};x();let i=[];i=JSON.parse(localStorage.getItem("todolist")||"[]");let l=[];l=JSON.parse(localStorage.getItem("completelist")||"[]");const a=e=>document.querySelector(e),u=a(".in-progress"),f=a(".complete"),p=a("#todo"),v=a("form");function m(e,o){o==="todo"?g(i,l,e):g(l,i,e),c()}function g(e,o,r){const n=e.findIndex(t=>t.id===r);o.push(e[n]),e.splice(n,1)}function L(e){if(e.preventDefault(),!p.value)return;const o={id:Date.now(),title:p.value};i.push(o),c()}v.addEventListener("submit",L);u.addEventListener("click",e=>{var n;const o=e.target,r=(n=o.parentNode)==null?void 0:n.parentNode;if(o.classList.contains("delete"))b(e);else if(r.classList.contains("todo-item")){const t=Number(r.dataset.key);m(t,"todo")}});f.addEventListener("click",e=>{var n;const o=e.target,r=(n=o.parentNode)==null?void 0:n.parentNode;if(o.classList.contains("delete"))b(e);else if(r.classList.contains("complete-item")){const t=Number(r.dataset.key);m(t,"complete")}});function c(){u.textContent="",f.textContent="",localStorage.setItem("todolist",JSON.stringify(i)),localStorage.setItem("completelist",JSON.stringify(l)),N()}c();function b(e){const r=e.target.parentNode,n=Number(r.dataset.key),t=i.findIndex(s=>s.id===n);r.classList.contains("todo-item")?i.splice(t,1):l.splice(t,1),c()}function N(){S(),w()}function S(){i.map(e=>{const o=`<li class="flex bg-zinc-50 rounded-lg p-4 justify-between items-center todo-item animate-fadeIn" data-key="${e.id}">
  
    <div class="flex justify-center items-center space-x-4">
    <button
    class="toggle text-gray-400 border border-gray-400 rounded-full w-6 h-6 flex justify-center items-center active:scale-90 transition-all duration-300"
    >
    \u2713
  </button> 
      <label class="text-gray-600">${e.title}</label>
    </div>
    <button
      class="delete text-red-500 border border-red-500 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300"
      
    >
      Delete
    </button>
    </li>`;u.insertAdjacentHTML("afterbegin",o)})}function w(){l.map(e=>{const o=`<li class="flex bg-zinc-50 rounded-lg p-4 justify-between items-center complete-item animate-fadeIn " data-key="${e.id}">
  
    <div class="flex justify-center items-center space-x-4">
    <button
    class="toggle text-teal-400 border border-teal-400 rounded-full w-6 h-6 flex justify-center items-center active:scale-90 transition-all duration-300"
    >
    \u2713
  </button> 
      <label class="text-teal-600 line-through">${e.title}</label>
    </div>
    <button
      class="delete text-red-500 border border-red-500 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300 "
      
    >
      Delete
    </button>
    </li>`;f.insertAdjacentHTML("afterbegin",o)})}
