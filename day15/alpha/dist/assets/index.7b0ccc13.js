const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};f();const d=n=>document.querySelector(n),u=d(".add-items"),l=d(".plates"),i=JSON.parse(localStorage.getItem("alpha_items")||"[]");function m(n){n.preventDefault();const t=n.target,o=t.querySelector("[name=item]");if(!o)throw new Error("element is null");const e={text:o.value,done:!1};i.push(e),a(i,l),localStorage.setItem("alpha_items",JSON.stringify(i)),t.reset()}function a(n,t){if(!t)throw new Error("element is null");t.innerHTML=n.map((o,s)=>`
    <li>
    <input type="checkbox" data-index=${s} id="item${s}" ${o.done?"checked":""} />
    <label for="item${s}">${o.text}</label>
  </li>
    `).join("")}function p(n){if(!n.target)throw new Error("element is null");const t=n.target,o=Number(t.dataset.index);i[o].done=!i[o].done,localStorage.setItem("alpha_items",JSON.stringify(i)),a(i,l)}if(!u||!l)throw new Error("element is null");u.addEventListener("submit",m);l.addEventListener("click",p);a(i,l);