let datecon=document.querySelector(".datecon");
let imgs=document.querySelector(".imgs");
let titleh1=document.querySelector(".titleh1");
let explanation=document.querySelector(".explanation");


let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    let isdate=document.querySelector(".isdate");
    currentdate(isdate.value);
    isdate.value="";
    
});
function addSearchToHistory(event) {
    
	const searchHistoryList = document.getElementById('listitem');
	searchHistoryList.innerHTML = '';
	abc.forEach(search => {
		let b=search.slice(9,19);
       
        const li = document.createElement('li');
    
        var a=document.createElement('a');
        a.textContent=b;
        a.setAttribute('href',`? date=${b}`);
		
        li.appendChild(a);
        a.classList.add("hero");
		searchHistoryList.appendChild(li);
	});

let hero=document.querySelectorAll(".hero");
for(let i=0; i<hero.length; i++){
hero[i].addEventListener('click', (event) => {
    event.preventDefault();
    let a=event.target.innerHTML;
    let ab=a.slice(0,10);
    
    currentdate(ab);
   
});
}
}

let apikey="hYum7Xn55T7pNnLlR3n0kLiVKOUh2UaPG5h9bO5s";
let apiUrl="https://api.nasa.gov/planetary/apod";

let abc=[];

async function currentdate(data){
        
    let response=await fetch(apiUrl+`?api_key=${apikey}`+`&date=${data}`);
    
    let file= await response.json();
    getImageOfTheDay(file);
    
    saveSearch(data);
    addSearchToHistory(data);
}
function getImageOfTheDay(file){
    datecon.innerHTML=`Picture on ${file.date}`;
    imgs.src=`${file.url}`;
    titleh1.innerHTML=`${file.title}`;
    explanation.innerHTML=`${file.explanation}`;
}
function saveSearch(data){
    abc.push(`{"date":"${data}"}`);
    localStorage.setItem("session",`[${abc}]`);
}
start();
 async function start(){
    let response=await fetch(apiUrl+`?api_key=${apikey}`);
    
    let file= await response.json();
    getCurrentImageOfTheDay(file);
}
function getCurrentImageOfTheDay(file){
    datecon.innerHTML=`Picture on ${file.date}`;
    imgs.src=`${file.url}`;
    titleh1.innerHTML=`${file.title}`;
    explanation.innerHTML=`${file.explanation}`;
}