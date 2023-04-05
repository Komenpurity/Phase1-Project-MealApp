    document.addEventListener("DOMContentLoaded",() => {

    // fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken")
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php") 
        .then(response => response.json())
        .then( data => {
            console.log(data) 
            displayAll(data)
        })

    })


  