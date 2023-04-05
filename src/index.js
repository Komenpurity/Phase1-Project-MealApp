    document.addEventListener("DOMContentLoaded",() => {

    // fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken")
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php") 
        .then(response => response.json())
        .then( data => {
            console.log(data) 
            displayAll(data)
        })

    })

    let displayCategories = document.getElementById("display-categories") 

    //display all 
    function displayAll(data){
        data.categories.forEach(element => {
            console.log(element) 

            displayCategories.innerHTML += `
                    <h5 ${element.idCategory}>${element.strCategory}</h5>
                    <img src = ${element.strCategoryThumb}> 
                    <p>${element.strCategoryDescription}</p>
            `
        });
    }