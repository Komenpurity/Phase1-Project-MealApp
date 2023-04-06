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
                <div class="p-2">
                    <h5 ${element.idCategory}>${element.strCategory}</h5>
                    <img src = ${element.strCategoryThumb}> 
                </div>
            `
        });
    }


    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=d") 
        .then(response => response.json())
        .then( data => {
            //console.log(data) 
            displayFoodDetails(data)
        })

        let foodDetails = document.getElementById("food-details")

    //diplay food details starting with letter D
    function displayFoodDetails(data){
        
        data.meals.forEach(element => {
            foodDetails.innerHTML += `
                <div class="m-4">
                    <img src= ${element.strMealThumb} class="img-fluid card-img-top"/>
                    <h5 class="card-title" data-id = ${element.idMeal}>${element.strMeal}</h5>
                    <p class="card-text">${element.strCategory}</p>
                    <button data-id = ${element.idMeal}  id = "recipe" class="btn btn-success">Recipe</button>
                <div>
            `
            let recipeBtn = foodDetails.querySelectorAll("button#recipe") 

            recipeBtn.forEach(element => {
                element.addEventListener("click",(event) => {
                    console.log("clicked") 
                })
            })
        })
    }

 //fetching form data 
 function form (){
    let input = document.querySelector("input#categories")
    let btn = document.getElementById("search")

    btn.addEventListener("click",(event) => {
        event.preventDefault()
        formData(input.value) 
        input.value = "" 
    })
 }
form() 

    //filter meals by categories eg Goat,Lamb,Seafood,Side
function formData (category){ 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        filterByCategories(data)
    })
}

    let filter = document.getElementById("filter-categories")
    
    function filterByCategories(data){
        data.meals.forEach(element => {
            filter.innerHTML += `
            <div class=" col-sm-6">
                <img src= ${element.strMealThumb} class="img-fluid card-img-top"/>
                <h5 class="card-title" data-id = ${element.idMeal}>${element.strMeal}</h5>
            <div>
            `
        })
    }
