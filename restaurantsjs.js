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
    },{
        name: 'Earth Eagle',
        mode: 'Walkable',
        distance: '0.5',
        logo: 'eartheaglelogo.jpg',
        summary: "American, Brew Pub",
        website: 'https://www.eartheaglebrewings.com/',
        yelp: "https://www.yelp.com/biz/earth-eagle-brewings-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d6596756-Reviews-Earth_Eagle_Brewings-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Earth+Eagle+Brewings,+High+Street,+Portsmouth,+NH/@43.0789419,-70.7683285,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bfa9db5f3:0x83625780fde7c6d1!2m2!1d-70.759711!2d43.0792766!3e2",
    },{
        name: 'Row 34',
        mode: 'Walkable',
        distance: '0.5',
        logo: 'row34logo.jpg',
        summary: "American, Bar, Seafood",
        website: 'https://www.row34.com/',
        yelp: "https://www.yelp.com/biz/row-34-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d8148046-Reviews-Row_34-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Row+34,+Portwalk+Place,+Portsmouth,+NH/@43.0786918,-70.7665123,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bba37e057:0xdb46e8b9bda7532b!2m2!1d-70.7605335!2d43.0773501!3e2",
    },{
        name: 'Bridge Street Bistrot',
        mode: 'Walkable',
        distance: '0.5',
        logo: 'bridgestreetlogo.jpg',
        summary: "French, European, Wine Bar",
        website: 'http://www.bridgestreetbistrot.com/',
        yelp: "https://www.yelp.com/biz/bridge-street-bistrot-and-wine-bar-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d4452253-Reviews-Bridge_Street_Bistrot_Wine_Bar-Portsmouth_New_Hampshire.html',
        directions: "",
    },{
        name: "Jumpin' Jay's",
        mode: 'Walkable',
        distance: '0.6',
        logo: 'jumpinjaylogo.jpg',
        summary: "Fish is their specialty",
        website: 'https://www.jumpinjays.com/',
        yelp: "https://www.yelp.com/biz/jumpin-jays-fish-cafe-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412840-Reviews-Jumpin_Jay_s_Fish_Cafe-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Jumpin'+Jay's+Fish+Cafe,+Congress+Street,+Portsmouth,+NH/@43.077798,-70.7686655,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b3d9e98cd:0x6155a48c29e1d9c1!2m2!1d-70.7604574!2d43.0756238!3e2",
    },{
        name: 'The Friendly Toast',
        mode: 'Walkable',
        distance: '0.6',
        logo: 'friendlytoastlogo.jpg',
        summary: "American, Vegetarian Friendly, Vegan Options",
        website: 'https://thefriendlytoast.com/location/portsmouth-nh/',
        yelp: "https://www.yelp.com/biz/the-friendly-toast-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d509599-Reviews-The_Friendly_Toast-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Friendly+Toast,+Congress+Street,+Portsmouth,+NH/@43.0778605,-70.7682528,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b73022143:0x719da32f368a9b8e!2m2!1d-70.759811!2d43.076242!3e2",
    },{
        name: 'FlatBread',
        mode: 'Walkable',
        distance: '0.6',
        logo: 'flatbreadlogo.jpg',
        summary: "Pizza",
        website: 'https://flatbreadcompany.com/locations/portsmouth-nh/',
        yelp: "https://www.yelp.com/biz/flatbread-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d616656-Reviews-Flatbread_Company-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Flatbread+Company,+Congress+Street,+Portsmouth,+NH/@43.077824,-70.768526,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b11450011:0x308bbb94cb0f8004!2m2!1d-70.7601061!2d43.0757574!3e2",
    },{
        name: 'Cafe Mediterraneo',
        mode: 'Walkable',
        distance: '0.6',
        logo: 'mediterraneologo.jpg',
        summary: "Italian, Mediterranean, Vegetarian Friendly",
        website: 'https://www.cafe-mediterraneo.com/',
        yelp: "https://www.yelp.com/biz/cafe-mediterraneo-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412832-Reviews-Cafe_Mediterraneo-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cafe+Mediterraneo,+Congress+Street,+Portsmouth,+NH/@43.0778605,-70.7682528,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b72c68977:0xbbb0e6c5b7d71e42!2m2!1d-70.7600324!2d43.076341!3e2",
    },{
        name: 'Thirsty Moose',
        mode: 'Walkable',
        distance: '0.6',
        logo: 'thirstymooselogo.jpg',
        summary: "American, Bar, Pub",
        website: 'https://www.thirstymoosetaphouse.com/portsmouth/',
        yelp: "https://www.yelp.com/biz/thirsty-moose-taphouse-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3381540-Reviews-Thirsty_Moose_Taphouse_Portsmouth-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Thirsty+Moose+Tap+House+-+Portsmouth,+Congress+Street,+Portsmouth,+NH/@43.0778605,-70.7677341,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c77968efd:0xfc782c8906beb72!2m2!1d-70.7585687!2d43.0767951!3e2",
    },{
        name: 'Cava',
        mode: 'Walkable',
        distance: '0.7',
        logo: 'cavalogo.jpg',
        summary: "Tapas and Wine Bar",
        website: 'https://www.cavatapasandwinebar.com/',
        yelp: "https://www.yelp.com/biz/cava-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1509002-Reviews-Cava-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cava,+Commercial+Alley,+Portsmouth,+NH/@43.0778605,-70.7669477,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c13f0bedf:0xa47d27fcadaca02b!2m2!1d-70.7569528!2d43.0776583!3e2",
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
    },{
        name: 'Black Trumpet',
        mode: 'Walkable',
        distance: '0.7',
        logo: 'blacktrumpetlogo.jpg',
        summary: "Vegetarian Friendly, Gluten Free Options",
        website: 'https://www.blacktrumpetbistro.com/',
        yelp: "https://www.yelp.com/biz/black-trumpet-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d672234-Reviews-Black_Trumpet_Bistro-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Black+Trumpet,+Ceres+Street,+Portsmouth,+NH/@43.0786133,-70.7670305,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0ea623ab2f:0x3642cef4f728b3aa!2m2!1d-70.757678!2d43.078674!3e2",
    },{
        name: 'Surf',
        mode: 'Walkable',
        distance: '0.7',
        logo: 'surflogo.jpg',
        summary: "Seafood, Sushi",
        website: 'https://www.surfseafood.com/',
        yelp: "https://www.yelp.com/biz/surf-restaurant-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d2199055-Reviews-Surf-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Surf+Portsmouth,+Bow+Street,+Portsmouth,+NH/@43.0788887,-70.7665173,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0e85e4eee7:0x6e4b5e2552e05131!2m2!1d-70.7561105!2d43.078935!3e2",
    },{
        name: 'River House',
        mode: 'Walkable',
        distance: '0.7',
        logo: 'riverhouselogo.jpg',
        summary: "Seafood, American (Traditional), Cocktail Bars",
        website: 'https://riverhouse53bow.com/',
        yelp: "https://www.yelp.com/biz/the-river-house-portsmouth-5",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1556896-Reviews-The_River_House_Restaurant-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/River+House,+Bow+Street,+Portsmouth,+NH/@43.0788887,-70.7667675,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0e9e92d645:0x9c7122ac48d9ba9a!2m2!1d-70.7566757!2d43.0788002!3e2",
    },{
        name: 'Moxy',
        mode: 'Walakble',
        distance: '0.7',
        logo: 'moxylogo.jpg',
        summary: "American (Traditional), Tapas/Small Plates, Bars",
        website: 'https://moxyrestaurant.com/',
        yelp: "https://www.yelp.com/biz/moxy-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3347983-Reviews-Moxy-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Moxy,+Penhallow+Street,+Portsmouth,+NH/@43.0778605,-70.7666615,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c3d6c9e29:0x9dc48c605f8921c7!2m2!1d-70.7568305!2d43.0777893!3e2",
    },{
        name: "Rudi's Portsmouth",
        mode: 'Walkable',
        distance: '0.7',
        logo: 'rudilogo.jpg',
        summary: "American, Bar, Pub",
        website: 'https://www.rudisportsmouth.com/',
        yelp: "https://www.yelp.com/biz/rudis-portsmouth-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d675129-Reviews-Rudi_s_Portsmouth-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Rudi's+Portsmouth,+High+Street,+Portsmouth,+NH/@43.0778605,-70.7675031,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c772fe23d:0xaa584aa1a3afe834!2m2!1d-70.758363!2d43.077185!3e2",
    },{
        name: 'Old Ferry Landing',
        mode: 'Walkalble',
        distance: '0.7',
        logo: 'oldferrylogo.jpg',
        summary: "Seafood, Bars, Juice Bars & Smoothies",
        website: 'http://oldferrylanding.com/',
        yelp: "https://www.yelp.com/biz/old-ferry-landing-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412895-Reviews-Old_Ferry_Landing-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Old+Ferry+Landing,+Ceres+Street,+Portsmouth,+NH/@43.0786133,-70.7669854,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0ea0a13d3d:0x748bb6b735b74f52!2m2!1d-70.7570249!2d43.07877!3e2",
    },{
        name: 'Portsmouth Brewery',
        mode: 'Walkable',
        distance: '0.7',
        logo: 'portsmouthbrewerylogo.jpg',
        summary: "American, Brew Pub, Pub",
        website: 'https://portsmouthbrewery.com/',
        yelp: "https://www.yelp.com/biz/the-portsmouth-brewery-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412805-Reviews-Portsmouth_Brewery-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Portsmouth+Brewery,+Market+Street,+Portsmouth,+NH/@43.0788887,-70.7672433,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c1a9d397b:0x2831df19d2764f6e!2m2!1d-70.7577747!2d43.0779123!3e2",
    },{
        name: 'The Oar House',
        mode: 'Walkable',
        distance: '0.7',
        logo: 'oarhouselogo.jpg',
        summary: "Seafood, Pizza, Salad",
        website: 'http://www.portsmouthoarhouse.com/',
        yelp: "https://www.yelp.com/biz/the-oar-house-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d449136-Reviews-The_Oar_House-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Oar+House,+Ceres+Street,+Portsmouth,+NH/@43.0786133,-70.7672918,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0eadbed5f1:0xfb73abf66c6038e7!2m2!1d-70.7580064!2d43.0789125!3e2",
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
        name: "Colby's",
        mode: 'Walkable',
        distance: '0.8',
        logo: 'colbyslogo.jpg',
        summary: "Breakfast and Lunch",
        website: 'https://colbysportsmouthnh.com/',
        yelp: "https://www.yelp.com/biz/colbys-breakfast-and-lunch-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d616592-Reviews-Colby_s_Breakfast_Lunch-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Colby's+Breakfast+%26+Lunch,+Daniel+Street,+Portsmouth,+NH/@43.0781107,-70.7662424,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c32dad8f5:0x6db50774e37741f5!2m2!1d-70.7555388!2d43.0774445!3e2",
    },{
        name: 'Book and Bar',
        mode: 'Walkable',
        distance: '0.8',
        logo: 'bookandbarlogo.jpg',
        summary: "Bars, Bookstores, Coffee & Tea",
        website: 'http://www.bookandbar.com/',
        yelp: "https://www.yelp.com/biz/portsmouth-book-and-bar-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3815814-Reviews-Portsmouth_Book_and_Bar-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Portsmouth+Book+%26+Bar,+Pleasant+Street,+Portsmouth,+NH/@43.0776389,-70.7671083,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c8a5bcf17:0x13268c15a55e062!2m2!1d-70.7573231!2d43.0759966!3e2",
    },{
        name: 'The Roundabout',
        mode: 'Walkable',
        distance: '0.8',
        logo: 'roundaboutlogo.jpg',
        summary: "Basic Diner Food",
        website: 'https://www.roundaboutdiner.com/',
        yelp: "https://www.yelp.com/biz/roundabout-diner-and-lounge-portsmouth-6",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1791532-Reviews-The_Roundabout_Diner_Lounge-Portsmouth_New_Hampshire.html',
        directions: "",
    },{
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
        name: 'STREET',
        mode: 'Walkable',
        distance: '1.0',
        logo: 'streetlogo.jpg',
        summary: "Bar, Vegetarian Friendly, Vegan Options",
        website: 'https://www.streetfood360.com/',
        yelp: "https://www.yelp.com/biz/street-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3251688-Reviews-Street_Food_360-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/STREET+eat%2Fdrink+360,+Islington+Street,+Portsmouth,+NH/@43.0745029,-70.7760124,15z/data=!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9b1bc0b6f7:0x499f50d15ba39a85!2m2!1d-70.7732358!2d43.069034!3e2",
    },{
        name: "Geno's",
        mode: 'Walkable',
        distance: '1.3',
        logo: 'genologo.jpg',
        summary: "Sandwiches, Soup",
        website: 'http://www.genoschowder.com/',
        yelp: "https://www.yelp.com/biz/genos-chowder-and-sandwich-shop-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412922-Reviews-Geno_s_Chowder_Sandwich_Shop-Portsmouth_New_Hampshire.html',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Geno's+Chowder+%26+Sandwich+Shop,+Mechanic+Street,+Portsmouth,+NH/@43.0770695,-70.7676275,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf12e0604ad5:0xf09d494047955fac!2m2!1d-70.7495329!2d43.0742353!3e2",
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