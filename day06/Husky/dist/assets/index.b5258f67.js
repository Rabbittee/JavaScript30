var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&a)for(var n of a(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r};import{m as c}from"./vendor.7bd7ec62.js";const m=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};m();const g=async e=>{const t=await fetch(e);if(!t.ok)throw new Error(t.statusText);return await t.json()},y=e=>e.map(t=>{const o=t,{rank:r}=o,n=l(o,["rank"]);return n.growth_from_2000_to_2013=Number(n.growth_from_2000_to_2013.slice(0,-1)),n.population=Number(n.population),n}),h=(e,t)=>e.reduce((r,n)=>{const o=t(n);return o<r.min&&(r.min=o),o>r.max&&(r.max=o),r},{max:-1/0,min:1/0}),v="pk.eyJ1Ijoic2hpaGNoaWhzdSIsImEiOiJja3lwODhxdTIwN2wxMm5vMXprZXE5aDhuIn0.zHD30PgCppbeuOWqYlzFQQ",u="#43A047",p="#E53935",x="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",_=(e,t)=>{t!==void 0&&(e=e.filter(t));const r=e.map(n=>({type:"Feature",geometry:{type:"Point",coordinates:[n.longitude,n.latitude]},properties:n}));return{type:"FeatureCollection",features:r}},w=e=>{const t=h(e,o=>o.population),r=["interpolate",["linear"],["get","population"],t.min,5,t.max,20];return{"circle-color":["interpolate",["linear"],["get","growth_from_2000_to_2013"],-10,p,0,"#FFFFFF",30,u],"circle-radius":r,"circle-opacity":.7}},F=e=>{const t=e.growth_from_2000_to_2013>0?u:p,r=e.growth_from_2000_to_2013>0?"164 144 128 104 92 144":"164 116 128 156 92 116";return`
<div class="p-2">
  <div class="flex gap-2 items-center">
      <div class="flex flex-col items-center">
        <svg width="60" height="60" fill="#000000" viewBox="0 0 256 256">
          <circle cx="128" cy="128" r="96" fill="${t}" stroke="#FFF" stroke-width="16"></circle>

          <polyline points="${r}" fill="none" stroke="#FFF" stroke-width="16"></polyline>
        </svg>
        <p class="${e.growth_from_2000_to_2013>0?"text-green-600":"text-red-600"}">${e.growth_from_2000_to_2013}%</p>
      </div>
      <div class="flex flex-col">
          <div class="flex flex-row justify-between">
              <p class="text-xl">${e.city}</p>
          </div>
          <p class="text-gray-400 text-sm">${e.state}</p>
          <p class="text-gray-900 text-sm">total\uFF1A${e.population}</p>
      </div>
  </div>
</div>
  `},b=(e,t)=>({enter:o=>{e.getCanvas().style.cursor="pointer";const s=o.features[0].geometry.coordinates.slice(),i=F(o.features[0].properties);for(;Math.abs(o.lngLat.lng-s[0])>180;)s[0]+=o.lngLat.lng>s[0]?360:-360;t.setLngLat(s).setHTML(i).addTo(e)},leave:()=>{e.getCanvas().style.cursor="",t.remove()}}),L=async e=>{c.accessToken=v;const t=new c.Map({container:"map",style:"mapbox://styles/mapbox/dark-v10",bounds:e});return new Promise(r=>{t.on("load",()=>{r(t)})})},M=(e,t)=>(e.addSource("point",{type:"geojson",data:_(t)}),e.addLayer({id:"point",source:"point",type:"circle",paint:w(t)}),e),k=e=>{const t=new c.Popup({closeButton:!1,closeOnClick:!1}),{enter:r,leave:n}=b(e,t);return e.on("mouseenter","point",r),e.on("mouseleave","point",n),e},E=[[-130,49],[-62,23]],P=e=>{const t=document.querySelector('input[name="search"]'),r=n=>{const o=n.target.value;e.setFilter("point",["in",["downcase",o],["downcase",["get","city"]]])};t.addEventListener("change",r),t.addEventListener("keyup",r)},I=[L(E),g(x).then(y)];Promise.all(I).then(([e,t])=>M(e,t)).then(k).then(P);
