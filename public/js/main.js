

const searchBtn = document.getElementById("searchBtn");

getQuery = async () => {
    event.preventDefault();
    let url = "https://random-data-api.com/api/name/random_name"
    const data = await fetch(url)
    var actData = await data.json();
    console.log('actData :>> ', actData);
    console.log("after")  
}

searchBtn.addEventListener("click", getQuery)