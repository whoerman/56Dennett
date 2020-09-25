//javascript file for picking restaurants from prompted options

// adding the buttons for want food, drink, or both
function introButtons() {
    //the variable to structrue the choices
    let introButtonDiv =
        '<div class="card border-secondary text-center"> \
        <h5>How can we help you?</h5> \
        <div class="card-body"> \
            <button id="hungrybutton" type="button" class="btn btn-success text-center m-1"><i class="fas fa-utensils"></i> I want some food</button> \
            <button id="thirstybutton" type="button" class="btn btn-warning text-center m-1"><i class="fas fa-beer"></i> I need a drink</button> \
            <button id="bothbutton" type="button" class="btn btn-info text-center m-1"><i class="fas fa-utensils"></i> I want both!! <i class="fas fa-beer"></i></button> \
        </div> \
    </div>'
    //placing the buttons in the top div
    document.getElementById("toprestaurantsdiv").innerHTML = introButtonDiv;

    //event listener and process for food button
    document.getElementById("hungrybutton").addEventListener('click', function () {
        console.log("hungry")
        //getting rid of the intro desciption (from the html)
        document.getElementById("introdiv").innerHTML = "";
        //getting rid of the needs buttuns
        document.getElementById("toprestaurantsdiv").innerHTML = "";
        //moving on to the choice of meal
        mealOptionsButtons();
    });

    //event listener and process for drink button
    document.getElementById("thirstybutton").addEventListener('click', function () {
        console.log("thirsty")
    });

    //event listener and process for both food and drink button
    document.getElementById("bothbutton").addEventListener('click', function () {
        console.log("both")
    });
}

//starting the choice process
introButtons();


function mealOptionsButtons() {

    //emptying out the divs again
    document.getElementById("headTitle").innerHTML = "";
    document.getElementById("toprestaurantsdiv").innerHTML = "";

    //formatting and placing the intro comment for the meal buttons
    let hungryIntro =
        '<div class="card border-secondary bg-info text-center p-3"> \
    <blockquote class="blockquote mb-0"> \
        <h5><i class="fas fa-utensils"></i> Portsmouth has lots of options for food. Give me a few more details.</h5> \
    </blockquote> \
    </div>'
    document.getElementById("toprestaurantsdiv").innerHTML = hungryIntro;

    //formatting and placing the meal buttons
    let mealButtons =
        '<div class="card border-secondary text-center"> \
        <div class="card-body"> \
        <h5>What meal or snack do you want?</h5> \
        <button id="breakfastbutton" type="button" class="btn btn-secondary text-center m-1"><i class="fas fa-coffee"></i> Full Breakfast</button> \
        <button id="amSnackbutton" type="button" class="btn btn-secondary text-center m-1"><i class="fas fa-coffee"></i> Morning Treats</button> \
        <button id="lunchbutton" type="button" class="btn btn-secondary text-center m-1"><i class="fas fa-utensils"></i> Lunch</button> \
        <button id="treatbutton" type="button" class="btn btn-secondary text-center m-1"><i class="fas fa-ice-cream"></i> Ice Cream or a Treat</button> \
        <button id="dinnerbutton" type="button" class="btn btn-secondary text-center m-1"><i class="fas fa-utensils"></i> Dinner</button> \
        <button id="snackbutton" type="button" class="btn btn-secondary text-center m-1"><i class="fas fa-utensils"></i> Snack</button> \
        </div> \
    </div>'
    document.getElementById("secondrestaurantsdiv").innerHTML = mealButtons;


    //event listener and process for full breakfast button
    document.getElementById("breakfastbutton").addEventListener('click', function () {
        document.getElementById("toprestaurantsdiv").innerHTML = "";
        document.getElementById("toprestaurantsdiv").innerHTML = "Breakfast";
        console.log("breakfast")
    });

    //event listener and process morning treat button
    document.getElementById("amSnackbutton").addEventListener('click', function () {
        document.getElementById("toprestaurantsdiv").innerHTML = "";
        document.getElementById("toprestaurantsdiv").innerHTML = "Morning treat";
        console.log("Morning Treat")
    });

    //event listener and process lunch button
    document.getElementById("lunchbutton").addEventListener('click', function () {
        document.getElementById("toprestaurantsdiv").innerHTML = "";
        document.getElementById("toprestaurantsdiv").innerHTML = "Lunch";
        console.log("lunch");
    });

    //event listener and process ice cream button
    document.getElementById("lunchbutton").addEventListener('click', function () {
        document.getElementById("toprestaurantsdiv").innerHTML = "";
        document.getElementById("toprestaurantsdiv").innerHTML = "Ice Cream";
        console.log("ice cream");
    });

    //event listener and process dinner button
    document.getElementById("dinnerbutton").addEventListener('click', function () {
        document.getElementById("toprestaurantsdiv").innerHTML = "";
        document.getElementById("toprestaurantsdiv").innerHTML = "Dinner";
        console.log("dinner")
    });

    //event listener and process snack button
    document.getElementById("snackbutton").addEventListener('click', function () {
        document.getElementById("toprestaurantsdiv").innerHTML = "";
        document.getElementById("toprestaurantsdiv").innerHTML = "Snack";
        console.log("snack")
    });
}






function makeAllButtonCard() {
    fullCurrentRestarantCard = '<div class="card border-secondary text-center"> \
<h5 class="text-center m-1">' + (i + 1) + '.   <i class="fas fa-walking"></i> ' + restaurantData[i].dennett.mode + ' - ' + restaurantData[i].dennett.distance + ' miles</h5> \
<img class="card-img-top" src="./assets/images/restaurants/' + restaurantData[i].logo + '" alt="' + restaurantData[i].name + ' restaurant logo"> \
    <div class="card-body"> \
        <h5 class="card-title">' + restaurantData[i].summary + '</h5> \
        <a href="' + restaurantData[i].pages.website + '" class="btn btn-warning m-1"><i class="fas fa-utensils"></i> ' + restaurantData[i].name + ' website</a> \
        <a href="' + restaurantData[i].pages.facebook + '" class="btn btn-primary m-1"><i class="fab fa-facebook"></i> Facebook</a> \
        <a href="' + restaurantData[i].pages.yelp + '" class="btn btn-danger m-1"><i class="fab fa-yelp"></i> Yelp</a> \
        <a href="' + restaurantData[i].pages.tripadvisor + '" class="btn btn-success m-1"><i class="fab fa-tripadvisor"></i> Tripadvisor</a> \
        <a href="' + restaurantData[i].dennett.directions + '" class="btn text-white bg-secondary m-1"><i class="fas fa-walking"></i> Walk from 56 Dennett</a> \
        <a href="' + restaurantData[i].location.google + '" class="btn btn-info text-white m-1"><i class="fab fa-google"></i> Location (Google)</a> \
    </div> \
</div>';
}

function makeAllButtonCard() {
    fullCurrentRestarantCard = '<div class="card border-secondary text-center"> \
<h5 class="text-center m-1">' + (i + 1) + '.   <i class="fas fa-walking"></i> ' + restaurantData[i].dennett.mode + ' - ' + restaurantData[i].dennett.distance + ' miles</h5> \
<img class="card-img-top" src="./assets/images/restaurants/' + restaurantData[i].logo + '" alt="' + restaurantData[i].name + ' restaurant logo"> \
    <div class="card-body"> \
        <h5 class="card-title">' + restaurantData[i].summary + '</h5> \
        <a href="' + restaurantData[i].pages.website + '" class="btn btn-warning m-1"><i class="fas fa-utensils"></i> ' + restaurantData[i].name + ' website</a> \
        <a href="' + restaurantData[i].pages.facebook + '" class="btn btn-primary m-1"><i class="fab fa-facebook"></i> Facebook</a> \
        <a href="' + restaurantData[i].pages.yelp + '" class="btn btn-danger m-1"><i class="fab fa-yelp"></i> Yelp</a> \
        <a href="' + restaurantData[i].pages.tripadvisor + '" class="btn btn-success m-1"><i class="fab fa-tripadvisor"></i> Tripadvisor</a> \
        <a href="' + restaurantData[i].dennett.directions + '" class="btn text-white bg-secondary m-1"><i class="fas fa-walking"></i> Walk from 56 Dennett</a> \
        <a href="' + restaurantData[i].location.google + '" class="btn btn-info text-white m-1"><i class="fab fa-google"></i> Location (Google)</a> \
    </div> \
</div>';
}

function makeListButtonCard() {
    listCurrentRestarantCard = '<div class="card border-secondary text-center"> \
    <div class="card-body"> \
        <a href="' + restaurantData[i].pages.website + '" class="btn btn-warning m-1"><i class="fas fa-utensils"></i> ' + restaurantData[i].name + '</a> \
        <h5 class="text-center m-1"><i class="fas fa-walking"></i> ' + restaurantData[i].dennett.mode + ' - ' + restaurantData[i].dennett.distance + ' miles</h5> \
        </div> \
</div>';
}

//restaurant card structure
function listAll() {
    for (i = 0; i < restaurantData.length; i++) {
        if (restaurantData[i].dennett.distance === "1.0") {
            makeListButtonCard();
            //paste each iterated card into restaurant div
            document.getElementById("secondrestaurantsdiv").innerHTML +=
                listCurrentRestarantCard;
        } else {
            console.log(restaurantData[i].dennett.distance)
        }
    }
}

listAll();