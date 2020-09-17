
let restaurantCard = '';

let restaurantData = [
    {name: 'Barrio',
    mode: 'Walkable',
    distance: '0.3',
    logo: 'barriologo.jpg',
    summary: 'Tacos are their specialty',
    website: 'https://barrio-tacos.com/location/barrio-portsmouth',
    yelp: 'https://www.yelp.com/biz/barrio-portsmouth',
    tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d14784834-Reviews-Barrio-Portsmouth_New_Hampshire.html',
    directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Barrio,+Vaughan+Street,+Portsmouth,+NH/@43.0797615,-70.7677705,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf098ccd0a59:0x638419366b50e4f6!2m2!1d-70.7629833!2d43.0799994!3e2',
},
    {name: 'Rooftop at Envio',
    mode: 'Walkable',
    distance: '0.3',
    logo: 'enviologo.jpg',
    summary: 'Drinks and Appetizers with a view of the city',
    website: 'https://www.rooftopportsmouth.com/',
    yelp: 'https://www.yelp.com/biz/rooftop-at-the-envio-portsmouth-2?osq=rooftop+at+envio',
    tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d20115690-Reviews-Rooftop_at_The_Envio-Portsmouth_New_Hampshire.html',
    directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Rooftop+at+The+Envio,+Vaughan+Street,+Portsmouth,+NH/@43.0797615,-70.7674894,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9ad89e7f4d:0x5b17ccd8a59d5b4c!2m2!1d-70.762421!2d43.0797459!3e2',
},
{name: 'Green Elephant',
    mode: 'Walkable',
    distance: '0.4',
    logo: 'greenelephantlogo.jpg',
    summary: 'Vegetarian and Vegan',
    website: 'https://www.greenelephantnh.com/',
    yelp: 'https://www.yelp.com/biz/green-elephant-portsmouth',
    tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d8657507-Reviews-Green_Elephant-Portsmouth_New_Hampshire.html',
    directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Green+Elephant+Vegetarian+Bistro+%26+Bar,+Portwalk+Place,+Portsmouth,+NH/@43.0789114,-70.7669103,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bba1d0bf1:0xcc537bb0eead071d!2m2!1d-70.7613527!2d43.0781121!3e2',
},
];




//restaurant card structrue
for (i = 0; i < restaurantData.length; i++) {
currentRestarantCard = '<div class="card border-secondary text-center"> \
<h5 class="text-center m-1"><i class="fas fa-walking"></i> '+ restaurantData[i].mode +' - '+ restaurantData[i].distance +' miles</h5> \
<img class="card-img-top" src="./assets/images/restaurants/'+ restaurantData[i].logo +'" alt="'+ restaurantData[i].name +' restaurant logo"> \
    <div class="card-body"> \
        <h5 class="card-title">'+ restaurantData[i].summary +'</h5> \
        <a href="'+ restaurantData[i].website +'" class="btn btn-warning m-1"><i class="fas fa-utensils"></i> '+ restaurantData[i].name +' website</a> \
        <a href="'+ restaurantData[i].yelp +'" class="btn btn-danger m-1"><i class="fab fa-yelp"></i> Yelp</a> \
        <a href="'+ restaurantData[i].tripadvisor +'" class="btn btn-success m-1"><i class="fab fa-tripadvisor"></i> Tripadvisor</a> \
        <a href="'+ restaurantData[i].directions +'" class="btn text-white bg-secondary m-1"><i class="fas fa-walking"></i> Walking directions</a> \
    </div> \
</div>';
//paste each iterated card into restaurant div
document.getElementById("restaurantsdiv").innerHTML +=
    currentRestarantCard;
}