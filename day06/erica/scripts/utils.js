export const $ = ($) => document.querySelector($);
export const commas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
