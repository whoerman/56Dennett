
let restaurantCard = '';

let mode = 'Walkable';

let restaurantData = {
    name: 'Barrio',
    mode: 'Walkable',
    distance: '0.3',
    website: 'https://barrio-tacos.com/location/barrio-portsmouth',
    tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d14784834-Reviews-Barrio-Portsmouth_New_Hampshire.html',
    directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Barrio,+Vaughan+Street,+Portsmouth,+NH/@43.0797615,-70.7677705,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf098ccd0a59:0x638419366b50e4f6!2m2!1d-70.7629833!2d43.0799994!3e2',
};



restarantCard = '<div class="card border-secondary text-center"> \
<h5 class="text-center m-1"><i class="fas fa-walking"></i> '+ restaurantData.mode +' - '+ restaurantData.distance +' miles</h5> \
<img class="card-img-top" src="./assets/images/restaurants/'+ restaurantData.name +'logo.jpg" alt="'+ restaurantData.name +' restaurant logo"> \
    <div class="card-body"> \
        <h5 class="card-title">Tacos are their specialty</h5> \
        <a href="'+ restaurantData.website +'" class="btn btn-warning m-1"><i class="fas fa-utensils"></i> '+ restaurantData.name +' website</a> \
        <a href="'+ restaurantData.tripadvisor +'" class="btn btn-success m-1"><i class="fab fa-tripadvisor"></i> Tripadvisor</a> \
        <a href="'+ restaurantData.directions +'" class="btn text-white bg-secondary m-1"><i class="fas fa-walking"></i> Walking directions</a> \
    </div> \
</div>';

document.getElementById("restaurantsdiv").innerHTML +=
    restarantCard;
