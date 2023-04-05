    document.addEventListener("DOMContentLoaded",() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php") 
        .then(response => response.json())
        .then( data => {
           // console.log(data) 
            displayAll(data)
        })

    })

    let displayCategories = document.getElementById("display-categories") 

    //display all 
    function displayAll(data){
        data.categories.forEach(element => {
           // console.log(element) 

            displayCategories.innerHTML += `
                    <h5 ${element.idCategory}>${element.strCategory}</h5>
                    <img src = ${element.strCategoryThumb}> 
                    <p>${element.strCategoryDescription}</p>
            `
        });
    }


    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=d") 
        .then(response => response.json())
        .then( data => {
            console.log(data) 
            displayFoodDetails(data)
        })

     let foodDetails = document.getElementById("food-details")

    //diplay food details starting with letter C
    function displayFoodDetails(data){
        data.meals.forEach(element => {
            foodDetails.innerHTML += `
                    <img src= ${element.strMealThumb} class="img-fluid card-img-top"/>
                    <h5 class="card-title" data-id = ${element.idMeal}>${element.strMeal}</h5>
                    <p class="card-text">${element.strCategory}</p>
                    <a href="#" class="btn btn-primary">Recipe</a>
            `

        })
    }