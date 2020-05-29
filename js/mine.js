let allData = [];
let httpReq = new XMLHttpRequest();
let category = "general";
let country = "us";
dataInfo(country , category);

function dataInfo(country , category)
{
    httpReq.open("Get" , `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2821be8d2114413f9f23e6353332b411`);
    httpReq.send();
    httpReq.onreadystatechange = function()
    {
        if(httpReq.readyState == 4 && httpReq.status == 200)
        {
            allData = JSON.parse(httpReq.response).articles;
            displayData();
        }
    }
};


let links = document.querySelectorAll(".nav-link");
for(let i=0 ; i<links.length ; i++)
{
    links[i].addEventListener("click", function(e){
        category = e.target.text;
        dataInfo(country , category);
    })
};


let countries = document.querySelectorAll(".dropdown-item");
for(let i=0 ; i<countries.length ; i++)
{
    countries[i].addEventListener("click", function(e){
        country = e.target.text;
        dataInfo(country , category);
    })
};


function displayData()
{
    let temp =``;
    for(let i=0 ; i<allData.length ; i++)
    {
        temp +=`<div class="col-md-3">
                    <div class="items">
                        <img src="${allData[i].urlToImage}" class="img-fluid"/>
                        <h5>${allData[i].title}</h5>
                        <p>${allData[i].description}</p>
                    </div>
                </div>`

        document.getElementById("dataRow").innerHTML = temp;
    }
};