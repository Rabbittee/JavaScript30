const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};u();const d=o=>document.querySelector(o),f=d(".add-items"),l=d(".plates"),i=JSON.parse(localStorage.getItem("alpha_items")||"[]");function m(o){o.preventDefault();const t=o.target,n=t.querySelector("[name=item]");if(!n)throw new Error("element is null");const e={text:n.value,done:!1};i.push(e),a(i,l),localStorage.setItem("alpha_items",JSON.stringify(i)),t.reset()}function a(o,t){if(!t)throw new Error("element is null");t.innerHTML=o.map((n,s)=>`
    <li>
    <input type="checkbox" data-index=${s} id="item${s}" ${n.done?"checked":""} />
    <label for="item${s}">${n.text}</label>
  </li>
    `).join("")}function p(o){if(!o.target)throw new Error("element is null");const t=o.target,n=Number(t.dataset.index);i[n].done=!i[n].done,localStorage.setItem("alpha_items",JSON.stringify(i)),a(i,l)}f.addEventListener("submit",m);l.addEventListener("click",p);a(i,l);