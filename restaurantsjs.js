//setting the data for all the restaurants
let restaurantData = [{
        name: 'Barrio',
        mode: 'Walkable',
        distance: '0.3',
        logo: 'barriologo.jpg',
        summary: 'Tacos are their specialty',
        website: 'https://barrio-tacos.com/location/barrio-portsmouth',
        yelp: 'https://www.yelp.com/biz/barrio-portsmouth',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d14784834-Reviews-Barrio-Portsmouth_New_Hampshire.html',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Barrio,+Vaughan+Street,+Portsmouth,+NH/@43.0797615,-70.7677705,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf098ccd0a59:0x638419366b50e4f6!2m2!1d-70.7629833!2d43.0799994!3e2',
    },
    {
        name: 'Rooftop at Envio',
        mode: 'Walkable',
        distance: '0.3',
        logo: 'enviologo.jpg',
        summary: 'Drinks and Appetizers with a view of the city',
        website: 'https://www.rooftopportsmouth.com/',
        yelp: 'https://www.yelp.com/biz/rooftop-at-the-envio-portsmouth-2?osq=rooftop+at+envio',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d20115690-Reviews-Rooftop_at_The_Envio-Portsmouth_New_Hampshire.html',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Rooftop+at+The+Envio,+Vaughan+Street,+Portsmouth,+NH/@43.0797615,-70.7674894,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9ad89e7f4d:0x5b17ccd8a59d5b4c!2m2!1d-70.762421!2d43.0797459!3e2',
    },
    {
        name: 'Green Elephant',
        mode: 'Walkable',
        distance: '0.4',
        logo: 'greenelephantlogo.jpg',
        summary: 'Vegetarian and Vegan',
        website: 'https://www.greenelephantnh.com/',
        yelp: 'https://www.yelp.com/biz/green-elephant-portsmouth',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d8657507-Reviews-Green_Elephant-Portsmouth_New_Hampshire.html',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Green+Elephant+Vegetarian+Bistro+%26+Bar,+Portwalk+Place,+Portsmouth,+NH/@43.0789114,-70.7669103,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bba1d0bf1:0xcc537bb0eead071d!2m2!1d-70.7613527!2d43.0781121!3e2',
    },
    {
        name: 'BRGR Bar',
        mode: 'Walkable',
        distance: '0.4',
        logo: 'brgrlogo.jpg',
        summary: "Burgers",
        website: 'https://www.brgr-bar.com/',
        yelp: "https://www.yelp.com/biz/brgr-bar-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d6278438-Reviews-BRGR_Bar-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/BRGR+Bar,+Portwalk+Place,+Portsmouth,+NH/@43.0789114,-70.76683,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bc9ecb8db:0x5e70b41df507e3a2!2m2!1d-70.7611022!2d43.078236!3e2",
    },{
        name: 'Dos Amigos',
        mode: 'Walkable',
        distance: '0.5',
        logo: 'dosamigoslogo.jpg',
        summary: "Burritos",
        website: 'https://www.dosamigosburritos.com/',
        yelp: "https://www.yelp.com/biz/dos-amigos-burritos-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d835641-Reviews-Dos_Amigos_Burritos-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Dos+Amigos+Burritos+-+Portsmouth,+Portwalk+Place,+Portsmouth,+NH/@43.0788076,-70.7666399,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0dc6a60ff7:0x499dbd49926298aa!2m2!1d-70.760814!2d43.0776429!3e2",
    },{
        name: 'Shalimar India',
        mode: 'Walkable',
        distance: '0.5',
        logo: 'shalimarlogo.jpg',
        summary: "Indian",
        website: 'https://shalimarindia.com/',
        yelp: "https://www.yelp.com/biz/shalimar-india-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412842-Reviews-Shalimar_India_Restaurant-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Shalimar+India,+Hanover+Street,+Portsmouth,+NH/@43.0785986,-70.768487,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0ba2ca2493:0x591f384e80606f50!2m2!1d-70.760028!2d43.077225!3e2",
    },
    {
        name: 'Durbar Square',
        mode: 'Walkable',
        distance: '0.7',
        logo: 'durbarlogo.jpg',
        summary: 'Nepali Vegetarian Friendly Vegan Options',
        website: 'http://www.durbarsquareportsmouth.com/',
        yelp: 'https://www.yelp.com/biz/durbar-square-restaurant-portsmouth?osq=durbar+squaare',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d2413812-Reviews-Durbar_Square_Restaurant-Portsmouth_New_Hampshire.html',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Durbar+Square+Restaurant,+Market+Street,+Portsmouth,+NH/@43.0778605,-70.7672364,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c6da6ed89:0x836ad8e345857cf3!2m2!1d-70.757577!2d43.0773378!3e2',
    },
    {
        name: 'Ristorante Massimo',
        mode: 'Walkable',
        distance: '0.8',
        logo: 'massimologo.jpg',
        summary: 'Italian',
        website: 'https://ristorantemassimo.com/',
        yelp: 'https://www.yelp.com/biz/ristorante-massimo-portsmouth?osq=massimo',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d659447-Reviews-Ristorante_Massimo-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Massimo's+-+Ristorante+Massimo,+Penhallow+Street,+Portsmouth,+NH/@43.0776389,-70.7665442,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c3818b215:0xf0bf1bca27cab65!2m2!1d-70.7561424!2d43.0771685!3e2",
    }, {
        name: '5 Thai Bistro',
        mode: 'Walkable',
        distance: '0.8',
        logo: '5Thailogo.jpg',
        summary: 'Thai',
        website: 'https://www.5thaibistro.com/',
        yelp: 'https://www.yelp.com/biz/5-thai-bistro-portsmouth-2',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3958086-Reviews-5_Thai_Bistro-Portsmouth_New_Hampshire.html',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/5+Thai+Bistro,+Pleasant+Street,+Portsmouth,+NH/@43.0776389,-70.7671397,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c8a5bce9f:0x46fc7f31c2b7db62!2m2!1d-70.7574526!2d43.0762255!3e2',
    }, {
        name: "Lexie's Joint",
        mode: 'Walkable',
        distance: '0.8',
        logo: 'lexieslogo.jpg',
        summary: 'Burgers',
        website: 'https://www.peaceloveburgers.com/portsmouth',
        yelp: 'https://www.yelp.com/biz/lexies-joint-portsmouth',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1891877-Reviews-Lexie_s_Joint-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Lexie's+Joint,+Islington+Street,+Portsmouth,+NH/@43.076848,-70.7688886,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9fe01264e3:0x5627b4dc5201421a!2m2!1d-70.7646676!2d43.0737238!3e2",
    }, {
        name: 'Cure',
        mode: 'Walkable',
        distance: '0.9',
        logo: 'curelogo.jpg',
        summary: 'Amazing selections, from the mushroom forrester to the duck breast',
        website: 'https://www.curerestaurantportsmouth.com/',
        yelp: 'https://www.yelp.com/biz/cure-portsmouth',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d6453722-Reviews-Cure-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cure,+State+Street,+Portsmouth,+NH/@43.0774206,-70.7664432,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c8ad4500b:0xdcb9e05c8b2781af!2m2!1d-70.756068!2d43.076507!3e2",
    },{
        name: '',
        mode: '',
        distance: '',
        logo: '',
        summary: "",
        website: '',
        yelp: "",
        tripadvisor: '',
        directions: "",
    },
];


function makeCard() {
    currentRestarantCard = '<div class="card border-secondary text-center"> \
<h5 class="text-center m-1">' + (i+1) + '.   <i class="fas fa-walking"></i> ' + restaurantData[i].mode + ' - ' + restaurantData[i].distance + ' miles</h5> \
<img class="card-img-top" src="./assets/images/restaurants/' + restaurantData[i].logo + '" alt="' + restaurantData[i].name + ' restaurant logo"> \
    <div class="card-body"> \
        <h5 class="card-title">' + restaurantData[i].summary + '</h5> \
        <a href="' + restaurantData[i].website + '" class="btn btn-warning m-1"><i class="fas fa-utensils"></i> ' + restaurantData[i].name + ' website</a> \
        <a href="' + restaurantData[i].yelp + '" class="btn btn-danger m-1"><i class="fab fa-yelp"></i> Yelp</a> \
        <a href="' + restaurantData[i].tripadvisor + '" class="btn btn-success m-1"><i class="fab fa-tripadvisor"></i> Tripadvisor</a> \
        <a href="' + restaurantData[i].directions + '" class="btn text-white bg-secondary m-1"><i class="fas fa-walking"></i> Walking directions</a> \
    </div> \
</div>';
}

//restaurant card structure
for (i = 0; i < restaurantData.length; i++) {
    makeCard();
    //paste each iterated card into restaurant div
    document.getElementById("restaurantsdiv").innerHTML +=
        currentRestarantCard;
}