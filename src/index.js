const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
 
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
            console.log(data) 
            displayFoodDetails(data)
        })

        let foodDetails = document.getElementById("food-details")
        
        let recipeBtn = document.querySelectorAll("button#recipe")


    //diplay food details starting with letter D
    function displayFoodDetails(data){
        
        data.meals.forEach(element => { 
           
            foodDetails.innerHTML += `
            <div class="m-4">
                <img src= ${element.strMealThumb} id="img" class="img-fluid card-img-top"/>
                <h5 class="card-title" id = "title"  data-id = ${element.idMeal}>${element.strMeal}</h5>
                <p id= "element-category"  class="card-text">Category: ${element.strCategory} </p>
                <div id="recipe"  style="display: none;">
                    <h5 class= "display-5 font-weight-bold">The Recipe</h5>
                    <p>Ingredients: ${element.strIngredient1}, ${element.strIngredient2},  ${element.strIngredient3}, ${element.strIngredient4},  ${element.strIngredient5},  ${element.strIngredient6},${element.strIngredient7},  ${element.strIngredient8}, ${element.strIngredient9} ,  ${element.strIngredient10}, ${element.strIngredient11}, ${element.strIngredient12},${element.strIngredient13}         </p>
                    <h6 class= "display-6 font-weight-bold"> Instructions </h6>
                    <p>${element.strInstructions}</p>
                    <p>Measures: ${element.strMeasure1},${element.strMeasure2},${element.strMeasure3},${element.strMeasure4},${element.strMeasure5}, ${element.strMeasure6},${element.strMeasure7},${element.strMeasure8},${element.strMeasure9},${element.strMeasure10},${element.strMeasure11},${element.strMeasure12},</p>
                    <button id="hide-recipe">X</button>
                </div>
                <button data-id = ${element.idMeal}  id = "recipe" class="btn btn-success">View Recipe</button>
                <button type="button" id= "like" class="btn btn-outline-danger" > Like! ${EMPTY_HEART} </button> 
            <div>
        `
        let recipeBtn = foodDetails.querySelectorAll("button#recipe")
        let recipe = foodDetails.querySelectorAll("div#recipe") 
        let hideRecipe = foodDetails.querySelectorAll("button#hide-recipe")
       
        hideRecipe.forEach(element => {
            element.addEventListener("click",(event) => {
                //console.log("click")
                for(let i = 0; i <= recipe.length; i++) {
                    recipe[i].style.display = "none"
                }

            })
        })

        recipeBtn.forEach(element => {
            element.addEventListener("click",(event) => {
                for(let i = 0; i <recipe.length; i++) {
                    recipe[i].style.display = "block"
                }

            })
        })
 
        let likeBtn = foodDetails.querySelectorAll("button#like")

        likeBtn.forEach(element => {
            element.addEventListener("click",(event) => {
                console.log("Like!")
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
       // console.log(data)
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
