const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const debounce = (delay,func) =>{
    let timer
    return (payload) => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>func(payload),delay)
    }
}
const select = (target) => document.querySelector(target);
const searchBar = select("input.search")
const list = select("ul.suggestions");

function highLight(keyword,content){
    const regex = new RegExp(`(${keyword})`,"gi");
    return content.replace(regex,"<span class='hl'>$1</span>")
}

async function handleSearch(keyword){
    try{
        const payload = await fetch(url);
        const tourSeries = await payload.json();
        if(tourSeries && Array.isArray(tourSeries)){
            const result = tourSeries.filter(
                tour=>tour.city.includes(keyword)
            )
            .map(
                tour=>{
                    return `
                        <li>
                            <span class="name">${highLight(keyword,tour.city)}</span>
                            <span class="population">${tour.population}</span>
                        </li>
                    `
                }
            ).join("")
            list.innerHTML = result;
        }
    }catch(err){
        console.warn(err)
    }
}
searchBar.addEventListener("change",function({target:{value}}){
    debounce(600,handleSearch)(value)
})