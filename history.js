//javascript file for cards for all restaurants 
listAll();

//restaurant card structure
function listAll() {
    for (i = 0; i < (restaurantData.length - 1); i++) {
        console.log(restaurantData[i].name)
        document.getElementById("secondrestaurantsdiv").innerHTML +=
        '<div class="card border-secondary text-center"> \
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
}

