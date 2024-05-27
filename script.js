var recipesArray = [];
var links = document.querySelectorAll(".nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        getRecipes(e.target.text);
    });
}
getData();
// ======== استدعاء الفنكنشن العام =========
async function getData() {
    await getRecipes('pasta');
}
// ========= الفنكنشن اللي بجيب الريسيبيز======
async function getRecipes(meal) {
    var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    recipesArray = await response.json();
    recipesArray = recipesArray.recipes;
    dislayData();
}
function dislayData() {
    var cols = ``;
    for (var i = 0; i < recipesArray.length; i++) {
        cols += `
        <div class="col-md-3">
        <div class="recipes">
        
        <img class="w-100 h-75"
        
        src="${recipesArray[i].image_url}"/>
        <h2>${recipesArray[i].title} </h2> 
        <a class="btn btn-dark "href="${recipesArray[i].source_url} ">Source</a>

        
        <a class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"
         href="${recipesArray[i].image_url}" onclick="getDetails(${recipesArray[i].recipe_id})"> 
        Details</a>
        </div>      
        </div> `;
    }
    document.getElementById("postRow").innerHTML = cols;
}
async function getDetails(recipe_id) {
    console.log(recipe_id);
    var response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`);
    var result = await response.json();
    var arrayofDetails = result.recipe;

    var ingredients = arrayofDetails.ingredients;
     var list=``;
      for(var i=0;i<ingredients.length; i++){ 
    list+=`
     <li> 
      ${ingredients[i]};
    </li>
    `;
      }

    var data = `
       <img src="${arrayofDetails.image_url}" class="w-100"/>
       <h2>${arrayofDetails.title} </h2>
       <ul>${list}</ul>
 `;


    document.getElementById("recipeId").innerHTML = data;
}





let ages=[10,20,40];
let test=ages.filter((x)=> x>10);
console.log(test); // 20








