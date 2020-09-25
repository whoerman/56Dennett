//setting the data for all the restaurants
let restaurantData = [{
    name: 'Barrio',
    location: {
        google: 'https://www.google.com/maps/place/Barrio/@43.0799994,-70.7651773,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf098ccd0a59:0x638419366b50e4f6!8m2!3d43.0799994!4d-70.7629833?hl=en&authuser=0',
        latitude: "43.0799994",
        longitude: "-70.7651773",
    },
    logo: 'barriologo.jpg',
    summary: 'Hip cantina with tacos & cocktails',
    pages: {
        website: 'https://barrio-tacos.com/location/barrio-portsmouth',
        facebook: 'https://www.facebook.com/BarrioNewEngland',
        yelp: 'https://www.yelp.com/biz/barrio-portsmouth',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d14784834-Reviews-Barrio-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.3',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Barrio,+Vaughan+Street,+Portsmouth,+NH/@43.0797615,-70.7677705,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf098ccd0a59:0x638419366b50e4f6!2m2!1d-70.7629833!2d43.0799994!3e2',
    },
}, {
    name: 'Rooftop at Envio',
    location: {
        google: 'https://www.google.com/maps/place/Rooftop+at+The+Envio/@43.0797459,-70.764615,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9ad89e7f4d:0x5b17ccd8a59d5b4c!8m2!3d43.0797459!4d-70.762421?hl=en&authuser=0',
        latitude: "43.0797459",
        longitude: "-70.764615",
    },
    logo: 'enviologo.jpg',
    summary: 'Drinks and food with a view of the city',
    pages: {
        website: 'https://www.rooftopportsmouth.com/',
        facebook: 'https://www.facebook.com/rooftopportsmouth',
        yelp: 'https://www.yelp.com/biz/rooftop-at-the-envio-portsmouth-2?osq=rooftop+at+envio',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d20115690-Reviews-Rooftop_at_The_Envio-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.3',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Rooftop+at+The+Envio,+Vaughan+Street,+Portsmouth,+NH/@43.0797615,-70.7674894,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9ad89e7f4d:0x5b17ccd8a59d5b4c!2m2!1d-70.762421!2d43.0797459!3e2',
    }
}, {
    name: 'Green Elephant',
    location: {
        google: 'https://www.google.com/maps/place/Green+Elephant+Vegetarian+Bistro+%26+Bar/@43.0781121,-70.7635467,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0bba1d0bf1:0xcc537bb0eead071d!8m2!3d43.0781121!4d-70.7613527?hl=en&authuser=0',
        latitude: "43.0781121",
        longitude: "-70.7635467",
    },
    logo: 'greenelephantlogo.jpg',
    summary: 'Creative, vegetarian Asian fare & drinks',
    pages: {
        website: 'https://www.greenelephantnh.com/',
        facebook: 'https://www.facebook.com/greenelephantnh',
        yelp: 'https://www.yelp.com/biz/green-elephant-portsmouth',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d8657507-Reviews-Green_Elephant-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.4',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Green+Elephant+Vegetarian+Bistro+%26+Bar,+Portwalk+Place,+Portsmouth,+NH/@43.0789114,-70.7669103,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bba1d0bf1:0xcc537bb0eead071d!2m2!1d-70.7613527!2d43.0781121!3e2',
    }
}, {
    name: 'BRGR Bar',
    location: {
        google: 'https://www.google.com/maps/place/BRGR+Bar/@43.078236,-70.7632962,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0bc9ecb8db:0x5e70b41df507e3a2!8m2!3d43.078236!4d-70.7611022?hl=en&authuser=0',
        latitude: "43.078236",
        longitude: "-70.7632962",
    },
    logo: 'brgrlogo.jpg',
    summary: "Wide variety of eclectic burgers",
    pages: {
        website: 'https://www.brgr-bar.com/',
        facebook: 'https://www.facebook.com/BRGRBAR',
        yelp: "https://www.yelp.com/biz/brgr-bar-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d6278438-Reviews-BRGR_Bar-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.4',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/BRGR+Bar,+Portwalk+Place,+Portsmouth,+NH/@43.0789114,-70.76683,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bc9ecb8db:0x5e70b41df507e3a2!2m2!1d-70.7611022!2d43.078236!3e2",
    }
}, {
    name: 'Statey Bar & Grill',
    location: {
        google: "https://www.google.com/maps/place/Statey+Bar+%26+Grill/@43.0772534,-70.7645269,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bfeea6f2dc1b:0x5f26444ca97a19c9!8m2!3d43.0772534!4d-70.7623329?hl=en&authuser=0",
        latitude: "43.0772534",
        longitude: "-70.7645269",
    },
    logo: 'stateylogo.jpg',
    summary: "Seafood & pub food in a sport bar atmosphere",
    pages: {
        website: 'https://www.thestateybar.com/',
        facebook: 'https://www.facebook.com/thestatestreetsaloon',
        yelp: "https://www.yelp.com/biz/the-statey-bar-and-grill-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d14174003-Reviews-Statey_Bar_Grill-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.4',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Statey+Bar+%26+Grill,+238+Deer+St,+Portsmouth,+NH+03801/@43.0786129,-70.7672445,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bfeea6f2dc1b:0x5f26444ca97a19c9!2m2!1d-70.7623329!2d43.0772534!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Dos Amigos',
    location: {
        google: 'https://www.google.com/maps/place/Dos+Amigos+Burritos+-+Portsmouth/@43.0776429,-70.763008,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0dc6a60ff7:0x499dbd49926298aa!8m2!3d43.0776429!4d-70.760814?hl=en&authuser=0',
        latitude: "43.0776429",
        longitude: "-70.763008",
    },
    logo: 'dosamigoslogo.jpg',
    summary: "Counter-serve spot for Mexican eats",
    pages: {
        website: 'https://www.dosamigosburritos.com/',
        facebook: 'https://www.facebook.com/DosAmigosBurritos',
        yelp: "https://www.yelp.com/biz/dos-amigos-burritos-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d835641-Reviews-Dos_Amigos_Burritos-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Dos+Amigos+Burritos+-+Portsmouth,+Portwalk+Place,+Portsmouth,+NH/@43.0788076,-70.7666399,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0dc6a60ff7:0x499dbd49926298aa!2m2!1d-70.760814!2d43.0776429!3e2",
    }
}, {
    name: 'Shalimar India',
    location: {
        google: 'https://www.google.com/maps/place/Shalimar+India/@43.077225,-70.762222,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0ba2ca2493:0x591f384e80606f50!8m2!3d43.077225!4d-70.760028?hl=en&authuser=0',
        latitude: "43.077225",
        longitude: "-70.762222",
    },
    logo: 'shalimarlogo.jpg',
    summary: "Cozy spot for eclectic north Indian fare",
    pages: {
        website: 'https://shalimarindia.com/',
        facebook: 'https://www.facebook.com/Shalimar-India-in-Portsmouth-NH-03801-211030320491',
        yelp: "https://www.yelp.com/biz/shalimar-india-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412842-Reviews-Shalimar_India_Restaurant-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Shalimar+India,+Hanover+Street,+Portsmouth,+NH/@43.0785986,-70.768487,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0ba2ca2493:0x591f384e80606f50!2m2!1d-70.760028!2d43.077225!3e2",
    }
}, {
    name: 'Earth Eagle',
    location: {
        google: 'https://www.google.com/maps/place/Earth+Eagle+Brewings/@43.0792766,-70.761905,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0bfa9db5f3:0x83625780fde7c6d1!8m2!3d43.0792766!4d-70.759711?hl=en&authuser=0',
        latitude: "43.0792766",
        longitude: "-70.761905",
    },
    logo: 'eartheaglelogo.jpg',
    summary: "Upbeat nook for craft brews and pub eats",
    pages: {
        website: 'https://www.eartheaglebrewings.com/',
        facebook: 'https://www.facebook.com/eartheaglebrewings',
        yelp: "https://www.yelp.com/biz/earth-eagle-brewings-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d6596756-Reviews-Earth_Eagle_Brewings-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Earth+Eagle+Brewings,+High+Street,+Portsmouth,+NH/@43.0789419,-70.7683285,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bfa9db5f3:0x83625780fde7c6d1!2m2!1d-70.759711!2d43.0792766!3e2",
    }
}, {
    name: 'Row 34',
    location: {
        google: 'https://www.google.com/maps/place/Row+34/@43.0773501,-70.7627275,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0bba37e057:0xdb46e8b9bda7532b!8m2!3d43.0773501!4d-70.7605335?hl=en&authuser=0',
        latitude: "43.0773501",
        longitude: "-70.7627275",
    },
    logo: 'row34logo.jpg',
    summary: "Modern oyster bar with draft craft beer",
    pages: {
        website: 'https://www.row34.com/',
        facebook: 'https://www.facebook.com/Row34NH',
        yelp: "https://www.yelp.com/biz/row-34-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d8148046-Reviews-Row_34-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Row+34,+Portwalk+Place,+Portsmouth,+NH/@43.0786918,-70.7665123,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bba37e057:0xdb46e8b9bda7532b!2m2!1d-70.7605335!2d43.0773501!3e2",
    }
}, {
    name: 'Bridge Street Bistrot',
    location: {
        google: 'https://www.google.com/maps/place/Bridge+Street+Bistrot+%26+Wine+Bar/@43.0763292,-70.7640548,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0afcb68d55:0xdca894136fe70bd0!8m2!3d43.0763292!4d-70.7618608?hl=en&authuser=0',
        latitude: "43.0763292",
        longitude: "-70.7640548",
    },
    logo: 'bridgestreetlogo.jpg',
    summary: "Homey spot for classic French cuisine",
    pages: {
        website: 'http://www.bridgestreetbistrot.com/',
        facebook: 'https://www.facebook.com/Bridge-Street-Bistrot-Wine-Bar-116311568396226',
        yelp: "https://www.yelp.com/biz/bridge-street-bistrot-and-wine-bar-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d4452253-Reviews-Bridge_Street_Bistrot_Wine_Bar-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Bridge+Street+Bistrot+%26+Wine+Bar,+Bridge+Street,+Portsmouth,+NH/@43.0783828,-70.7627218,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0afcb68d55:0xdca894136fe70bd0!2m2!1d-70.7618608!2d43.0763292!3e2?hl=en&authuser=0",
    }
}, {
    name: 'La Carreta',
    location: {
        google: 'https://www.google.com/maps/place/La+Carreta+Mexican+Restaurant/@43.0771598,-70.7625623,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf43f4476eaf:0x85aabbb760c608a!8m2!3d43.0771598!4d-70.7603683?hl=en&authuser=0',
        latitude: "43.0771598",
        longitude: "-70.7625623",
    },
    logo: 'lacarrtalogo.jpg',
    summary: "Relaxed, vibrant Maxican kitchen",
    pages: {
        website: 'https://lacarretamex.com/portsmouth/',
        facebook: 'https://www.facebook.com/La-Carreta-Portsmouth-1361120723928411',
        yelp: "https://www.yelp.com/biz/la-carreta-restaurante-mexicano-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d17471724-Reviews-La_Carreta-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/La+Carreta+Mexican+Restaurant,+Hanover+Street,+Portsmouth,+NH/@43.0781677,-70.768385,16z/data=!3m2!4b1!5s0x89e2bf9b9ce6beaf:0x290ab22deaff8c29!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf43f4476eaf:0x85aabbb760c608a!2m2!1d-70.7603683!2d43.0771598!3e2?hl=en&authuser=0",
    }
}, {
    name: "Dwyer's Pub",
    location: {
        google: "https://www.google.com/maps/place/Dwyer's+Pub/@43.0767271,-70.7644021,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bfe08cc8fdc3:0x152d96556f9ee887!8m2!3d43.0767271!4d-70.7622081?hl=en&authuser=0",
        latitude: "43.0767271",
        longitude: "-70.7644021",
    },
    logo: 'dwyerlogo.jpg',
    summary: "Comfortable, casual pub serving quality food & drink",
    pages: {
        website: 'https://dwyerspubportsmouth.com/',
        facebook: 'https://www.facebook.com/Dwyers-Pub-108032330637155',
        yelp: "https://www.yelp.com/biz/dwyers-pub-portsmouth",
        tripadvisor: "",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Dwyer's+Pub,+96+Bridge+St,+Portsmouth,+NH+03801/@43.0783497,-70.7672445,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bfe08cc8fdc3:0x152d96556f9ee887!2m2!1d-70.7622081!2d43.0767271!3e2?hl=en&authuser=0",
    },
}, {
    name: "Legend's Billiards",
    location: {
        google: "https://www.google.com/maps/place/Legends+Billiards+%26+Tavern/@43.077281,-70.762136,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0ba2ca2493:0x225acb8698c55f97!8m2!3d43.077281!4d-70.759942?hl=en&authuser=0",
        latitude: "43.077281",
        longitude: "-70.762136",
    },
    logo: 'legendslogo.jpg',
    summary: "Beer, Pub food, Billiards & darts",
    pages: {
        website: 'http://www.legendsbilliards.com/?fbclid=IwAR1rYOVcu0ZbrjT8KWOzDKyomr7X6AykmJ-KCPsqOho4rXT-KlJw6blpfC8',
        facebook: 'https://www.facebook.com/Legends-Billiards-Tavern-311850082172989',
        yelp: "https://www.yelp.com/biz/legends-billiards-and-tavern-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d4572009-Reviews-Legends_Billiards_and_Tavern-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Legends+Billiards+%26+Tavern,+80+Hanover+St,+Portsmouth,+NH+03801/@43.0786572,-70.768444,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0ba2ca2493:0x225acb8698c55f97!2m2!1d-70.759942!2d43.077281!3e2?hl=en&authuser=0",
    },
}, {
    name: 'The Goods',
    location: {
        google: "https://www.google.com/maps/place/The+Goods/@43.0766667,-70.7619162,17z/data=!3m2!4b1!5s0x89e2bf0b9faa7ad9:0xef7a489526963475!4m5!3m4!1s0x89e2bf0b9f6225b5:0x6bb9626e0970633d!8m2!3d43.0766667!4d-70.7597222?hl=en&authuser=0",
        latitude: "43.0766667",
        longitude: "-70.7619162",
    },
    logo: 'goodslogo.jpg',
    summary: "Rustic spot with cafe fare & coffee",
    pages: {
        website: 'http://www.thegoodsnh.com/',
        facebook: 'https://www.facebook.com/goodsmarketandcafe',
        yelp: "https://www.yelp.com/biz/the-goods-market-and-cafe-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d11896536-Reviews-The_Goods-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Goods,+29+Vaughan+Mall,+Portsmouth,+NH+03801/@43.0781677,-70.7683341,16z/data=!3m2!4b1!5s0x89e2bf0b9faa7ad9:0xef7a489526963475!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b9f6225b5:0x6bb9626e0970633d!2m2!1d-70.7597222!2d43.0766667!3e2?hl=en&authuser=0",
    },
}, {
    name: 'The Green Room',
    location: {
        google: "https://www.google.com/maps/place/The+Green+Room/@43.0768005,-70.7619252,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bfb05ff15487:0x4676b6c233b99f12!8m2!3d43.0768005!4d-70.7597312?hl=en&authuser=0",
        latitude: "43.0768005",
        longitude: "-70.7619252",
    },
    logo: 'greenroomlogo.jpg',
    summary: "Organic juices & light breakfast and lunch",
    pages: {
        website: 'http://greenroomnh.com/portsmouth/',
        facebook: 'https://www.facebook.com/Greenroomportsmouth',
        yelp: "https://www.yelp.com/biz/the-green-room-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d19120171-Reviews-Green_Room-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Green+Room,+41+Vaughan+Mall,+Portsmouth,+NH+03801/@43.0783587,-70.7683386,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bfb05ff15487:0x4676b6c233b99f12!2m2!1d-70.7597312!2d43.0768005!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Mr, Wish',
    location: {
        google: "https://www.google.com/maps/place/Mr.+Wish/@43.0768166,-70.7618157,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0edb8c3b7f:0xf329c921ec42567b!8m2!3d43.0768166!4d-70.7596217?hl=en&authuser=0",
        latitude: "43.0768166",
        longitude: "-70.7618157",
    },
    logo: 'mrwishlogo.jpg',
    summary: "Boba (bubble teas), all natural fruit teas and smoothies",
    pages: {
        website: 'https://www.mrwishusa.com/',
        facebook: 'https://www.facebook.com/MrWishPortsmouth',
        yelp: "https://www.yelp.com/biz/mr-wish-portsmouth",
        tripadvisor: "",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.5',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Mr.+Wish,+37+Vaughan+Mall,+Portsmouth,+NH+03801/@43.0783487,-70.7682838,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0edb8c3b7f:0xf329c921ec42567b!2m2!1d-70.7596217!2d43.0768166!3e2?hl=en&authuser=0",
    },
}, {
    name: "Jumpin' Jay's",
    location: {
        google: "https://www.google.com/maps/place/Jumpin'+Jay's+Fish+Cafe/@43.0756238,-70.7626514,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b3d9e98cd:0x6155a48c29e1d9c1!8m2!3d43.0756238!4d-70.7604574?hl=en&authuser=0",
        latitude: "43.0756238",
        longitude: "-70.7626514",
    },
    logo: 'jumpinjaylogo.jpg',
    summary: "Slick, sophisticated seafood specialist",
    pages: {
        website: 'https://www.jumpinjays.com/',
        facebook: 'https://www.facebook.com/jumpinjays',
        yelp: "https://www.yelp.com/biz/jumpin-jays-fish-cafe-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412840-Reviews-Jumpin_Jay_s_Fish_Cafe-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Jumpin'+Jay's+Fish+Cafe,+Congress+Street,+Portsmouth,+NH/@43.077798,-70.7686655,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b3d9e98cd:0x6155a48c29e1d9c1!2m2!1d-70.7604574!2d43.0756238!3e2",
    }
}, {
    name: 'The Friendly Toast',
    location: {
        google: 'https://www.google.com/maps/place/The+Friendly+Toast/@43.076242,-70.762005,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b73022143:0x719da32f368a9b8e!8m2!3d43.076242!4d-70.759811?hl=en&authuser=0',
        latitude: "43.076242",
        longitude: "-70.762005",
    },
    logo: 'friendlytoastlogo.jpg',
    summary: "Funky, vegan-friendly American kitchen",
    pages: {
        website: 'https://thefriendlytoast.com/location/portsmouth-nh/',
        facebook: 'https://www.facebook.com/TheFriendlyToastPortsmouth',
        yelp: "https://www.yelp.com/biz/the-friendly-toast-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d509599-Reviews-The_Friendly_Toast-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Friendly+Toast,+Congress+Street,+Portsmouth,+NH/@43.0778605,-70.7682528,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b73022143:0x719da32f368a9b8e!2m2!1d-70.759811!2d43.076242!3e2",
    }
}, {
    name: 'FlatBread',
    location: {
        google: 'https://www.google.com/maps/place/Flatbread+Company/@43.0757574,-70.7623001,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b11450011:0x308bbb94cb0f8004!8m2!3d43.0757574!4d-70.7601061?hl=en&authuser=0',
        latitude: "43.0757574",
        longitude: "-70.7623001",
    },
    logo: 'flatbreadlogo.jpg',
    summary: "Wood-fired pizzas made in clay ovens",
    pages: {
        website: 'https://flatbreadcompany.com/locations/portsmouth-nh/',
        facebook: 'https://www.facebook.com/FlatbreadPortsmouth',
        yelp: "https://www.yelp.com/biz/flatbread-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d616656-Reviews-Flatbread_Company-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Flatbread+Company,+Congress+Street,+Portsmouth,+NH/@43.077824,-70.768526,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b11450011:0x308bbb94cb0f8004!2m2!1d-70.7601061!2d43.0757574!3e2",
    }
}, {
    name: 'Cafe Mediterraneo',
    location: {
        google: 'https://www.google.com/maps/place/Cafe+Mediterraneo/@43.076341,-70.7622264,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b72c68977:0xbbb0e6c5b7d71e42!8m2!3d43.076341!4d-70.7600324?hl=en&authuser=0',
        latitude: "43.076341",
        longitude: "-70.7622264",
    },
    logo: 'mediterraneologo.jpg',
    summary: "Bistro-like Italian restaurant with bar",
    pages: {
        website: 'https://www.cafe-mediterraneo.com/',
        facebook: 'https://www.facebook.com/Cafe-Mediterraneo-115135168575391',
        yelp: "https://www.yelp.com/biz/cafe-mediterraneo-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412832-Reviews-Cafe_Mediterraneo-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cafe+Mediterraneo,+Congress+Street,+Portsmouth,+NH/@43.0778605,-70.7682528,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b72c68977:0xbbb0e6c5b7d71e42!2m2!1d-70.7600324!2d43.076341!3e2",
    }
}, {
    name: 'Thirsty Moose',
    location: {
        google: 'https://www.google.com/maps/place/Thirsty+Moose+Tap+House+-+Portsmouth/@43.0767951,-70.7607627,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c77968efd:0xfc782c8906beb72!8m2!3d43.0767951!4d-70.7585687?hl=en&authuser=0',
        latitude: "43.0767951",
        longitude: "-70.7607627",
    },
    logo: 'thirstymooselogo.jpg',
    summary: "Wide variety of beers on tap with pub food",
    pages: {
        website: 'https://www.thirstymoosetaphouse.com/portsmouth/',
        facebook: 'https://www.facebook.com/ThirstyMooseTapHouse',
        yelp: "https://www.yelp.com/biz/thirsty-moose-taphouse-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3381540-Reviews-Thirsty_Moose_Taphouse_Portsmouth-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Thirsty+Moose+Tap+House+-+Portsmouth,+Congress+Street,+Portsmouth,+NH/@43.0778605,-70.7677341,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c77968efd:0xfc782c8906beb72!2m2!1d-70.7585687!2d43.0767951!3e2",
    }
}, {
    name: 'The Franklin',
    location: {
        google: 'https://www.google.com/maps/place/The+Franklin/@43.0767542,-70.7614991,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b9cb937ad:0x3184ff8b758db85d!8m2!3d43.0767542!4d-70.7593051?hl=en&authuser=0',
        latitude: "43.0767542",
        longitude: "-70.7614991",
    },
    logo: 'franklinlogo.jpg',
    summary: "Sleek haunt for local seafood and tapas",
    pages: {
        website: 'https://franklinrestaurant.com/',
        facebook: 'https://www.facebook.com/thefranklinnh',
        yelp: "https://www.yelp.com/biz/the-franklin-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d8537521-Reviews-The_Franklin-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Franklin,+Fleet+Street,+Portsmouth,+NH/@43.0778605,-70.7679637,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b9cb937ad:0x3184ff8b758db85d!2m2!1d-70.7593051!2d43.0767542!3e2",
    }
}, {
    name: 'The Goat',
    location: {
        google: 'https://www.google.com/maps/place/The+Goat,+Portsmouth/@43.0758086,-70.762543,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b11499b8d:0xb278d170e0345ea4!8m2!3d43.0758086!4d-70.760349?hl=en&authuser=0',
        latitude: "43.0758086",
        longitude: "-70.762543",
    },
    logo: 'goatlogo.jpg',
    summary: "Wppdsy American grill with live music",
    pages: {
        website: 'https://goatnh.com/portsmouth/',
        facebook: 'https://www.facebook.com/goatbarportsmouth',
        yelp: "https://www.yelp.com/biz/the-goat-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d13703021-Reviews-The_Goat-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Goat,+Portsmouth,+Congress+Street,+Portsmouth,+NH/@43.077824,-70.7682528,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b11499b8d:0xb278d170e0345ea4!2m2!1d-70.760349!2d43.0758086!3e2",
    }
}, {
    name: 'The Soupery',
    location: {
        google: 'https://www.google.com/maps/place/The+Soupery+%7C+Juicery+Pops/@43.0782505,-70.7607393,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0bf8187d9b:0xbacd2b3fcaa24f13!8m2!3d43.0782505!4d-70.7585453?hl=en&authuser=0',
        latitude: "43.0782505",
        longitude: "-70.7607393",
    },
    logo: 'souperylogo.jpg',
    summary: "Counter based specialty soups",
    pages: {
        website: 'http://www.wickedgoodsoup.com/',
        facebook: 'https://www.facebook.com/souperynh',
        yelp: "https://www.yelp.com/biz/the-soupery-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d6524175-Reviews-The_Soupery-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Soupery+%7C+Juicery+Pops,+51+Hanover+St,+Portsmouth,+NH+03801/@43.0786691,-70.7677083,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bf8187d9b:0xbacd2b3fcaa24f13!2m2!1d-70.7585453!2d43.0782505!3e2?hl=en&authuser=0",
    }
}, {
    name: 'The District',
    location: {
        google: 'https://www.google.com/maps/place/The+District/@43.076406,-70.7619777,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b73892081:0xd25f58049edb18e!8m2!3d43.076406!4d-70.7597837?hl=en&authuser=0',
        latitude: "43.076406",
        longitude: "-70.7619777",
    },
    logo: 'districtlogo.jpg',
    summary: "Farm-to-fork eatery with bar & patio",
    pages: {
        website: 'http://www.thedistrictnh.com/',
        facebook: 'https://www.facebook.com/TheDistrictNH',
        yelp: "https://www.yelp.com/biz/the-district-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d2358983-Reviews-The_District-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+District,+Congress+Street,+Portsmouth,+NH/@43.0778605,-70.7682528,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b73892081:0xd25f58049edb18e!2m2!1d-70.7597837!2d43.076406!3e2?hl=en&authuser=0",
    }
}, {
    name: 'The Wilder',
    location: {
        google: 'https://www.google.com/maps/place/The+Wilder/@43.0771722,-70.7618523,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b99c6603d:0x4810401c775b7d31!8m2!3d43.0771722!4d-70.7596583?hl=en&authuser=0',
        latitude: "43.0771722",
        longitude: "-70.7618523",
    },
    logo: 'wilderlogo.jpg',
    summary: "New American dishes & craft cocktails",
    pages: {
        website: 'https://www.wilderportsmouth.com/',
        facebook: 'https://www.facebook.com/wilderportsmouth',
        yelp: "https://www.yelp.com/biz/the-wilder-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d13342659-Reviews-The_Wilder-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Wilder,+Fleet+Street,+Portsmouth,+NH/@43.0786028,-70.7682553,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b99c6603d:0x4810401c775b7d31!2m2!1d-70.7596583!2d43.0771722!3e2?hl=en&authuser=0",
    }
}, {
    name: "Lazy Jack's",
    location: {
        google: "https://www.google.com/maps/place/Lazy+Jack's/@43.0790909,-70.7601056,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0eafab1a3f:0xc8bc7e790c650043!8m2!3d43.0790909!4d-70.7579116?hl=en&authuser=0",
        latitude: "43.0790909",
        longitude: "-70.7601056",
    },
    logo: 'lazyjacklogo.jpg',
    summary: "Casual waterfron dining and drinks",
    pages: {
        website: 'https://lazyjackswateringhole.com/',
        facebook: 'https://www.facebook.com/lazyjackswateringhole',
        yelp: "https://www.yelp.com/biz/lazy-jacks-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d8439450-Reviews-Lazy_Jacks-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Lazy+Jack's,+54+Ceres+St,+Portsmouth,+NH+03801/@43.0788887,-70.7672918,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0eafab1a3f:0xc8bc7e790c650043!2m2!1d-70.7579116!2d43.0790909!3e2?hl=en&authuser=0",
    },
}, {
    name: 'La Maison Navarre',
    location: {
        google: "https://www.google.com/maps/place/La+Maison+Navarre+-+Pastry,+Bistro,+Wine+Bar/@43.0763444,-70.762344,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x89e2bf0b0d4864c1:0x161bc7565dc26839!2sLa+Maison+Navarre+-+Pastry,+Bistro,+Wine+Bar!8m2!3d43.0763444!4d-70.76015!10e1!3m4!1s0x89e2bf0b0d4864c1:0x161bc7565dc26839!8m2!3d43.0763444!4d-70.76015?hl=en&authuser=0",
        latitude: "43.0763444",
        longitude: "-70.762344",
    },
    logo: 'lamaissonnaveerelogo.jpg',
    summary: "French fare, wine & macarons",
    pages: {
        website: 'http://www.mnpastry.com/',
        facebook: 'https://www.facebook.com/La-Maison-Navarre-981397091882666',
        yelp: "https://www.yelp.com/biz/la-maison-navarre-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d8527226-Reviews-La_Maison_Navarre-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/La+Maison+Navarre+-+Pastry,+Bistro,+Wine+Bar,+121+Congress+Street,+Portsmouth,+NH+03801/@43.0778605,-70.7682528,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b0d4864c1:0x161bc7565dc26839!2m2!1d-70.76015!2d43.0763444!3e2?hl=en&authuser=0",
    },
}, {
    name: "Bennett's Sandwich Shop",
    location: {
        google: "https://www.google.com/maps/place/Bennett's+Sandwich+Shop/@43.0767,-70.760949,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b8142140f:0x6562e6c34d4e1e03!8m2!3d43.0767!4d-70.758755?hl=en&authuser=0",
        latitude: "43.0767",
        longitude: "-70.760949",
    },
    logo: 'bennettslogo.jpg',
    summary: "Award Winning Sandwiches & fresh Maine lobby rolls! ",
    pages: {
        website: 'https://www.bennettssandwichshop.com/',
        facebook: 'https://www.facebook.com/Bennettssandwichshop',
        yelp: "https://www.yelp.com/biz/bennetts-sandwich-shop-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d8435306-Reviews-Bennett_s_Sandwich_Shop-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Bennett's+Sandwich+Shop,+41+Congress+Street,+Portsmouth,+NH+03801/@43.0778605,-70.7678012,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b8142140f:0x6562e6c34d4e1e03!2m2!1d-70.758755!2d43.0767!3e2?hl=en&authuser=0",
    },
}, {
    name: 'The Juicery',
    location: {
        google: "https://www.google.com/maps/place/The+Juicery/@43.0817125,-70.8017924,14z/data=!4m8!1m2!2m1!1sthe+juicery!3m4!1s0x89e2bf0bf7a0ebdb:0x6b6475d003bb5cf6!8m2!3d43.0781749!4d-70.7586688?hl=en&authuser=0",
        latitude: "43.0817125",
        longitude: "-70.8017924",
    },
    logo: 'juicerylogo.jpg',
    summary: "Smoothies, juices & health-minded eats",
    pages: {
        website: 'https://juicery.com/',
        facebook: 'https://www.facebook.com/portsmouthJuicery',
        yelp: "https://www.yelp.com/biz/the-juicery-portsmouth?osq=The+Juicery",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d829642-Reviews-Juicery-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.6',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Juicery,+55+Hanover+St,+Portsmouth,+NH+03801/@43.0786386,-70.7677782,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0bf7a0ebdb:0x6b6475d003bb5cf6!2m2!1d-70.7586688!2d43.0781749!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Cava',
    location: {
        google: 'https://www.google.com/maps/place/Cava/@43.0776583,-70.7591468,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c13f0bedf:0xa47d27fcadaca02b!8m2!3d43.0776583!4d-70.7569528?hl=en&authuser=0',
        latitude: "43.0776583",
        longitude: "-70.7591468",
    },
    logo: 'cavalogo.jpg',
    summary: "Innovative tapas & wine in a warm space",
    pages: {
        website: 'https://www.cavatapasandwinebar.com/',
        facebook: 'https://www.facebook.com/CavaTapasAndWineBar',
        yelp: "https://www.yelp.com/biz/cava-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1509002-Reviews-Cava-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cava,+Commercial+Alley,+Portsmouth,+NH/@43.0778605,-70.7669477,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c13f0bedf:0xa47d27fcadaca02b!2m2!1d-70.7569528!2d43.0776583!3e2",
    }
}, {
    name: 'Durbar Square',
    location: {
        google: 'https://www.google.com/maps/place/Durbar+Square+Restaurant/@43.0773378,-70.759771,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c6da6ed89:0x836ad8e345857cf3!8m2!3d43.0773378!4d-70.757577?hl=en&authuser=0',
        latitude: "43.0773378",
        longitude: "-70.759771",
    },
    logo: 'durbarlogo.jpg',
    summary: 'Himalayan cuisine in a warm atmosphere',
    pages: {
        website: 'http://www.durbarsquareportsmouth.com/',
        facebook: 'https://www.facebook.com/durbarsquarerestaurant1',
        yelp: 'https://www.yelp.com/biz/durbar-square-restaurant-portsmouth?osq=durbar+squaare',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d2413812-Reviews-Durbar_Square_Restaurant-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Durbar+Square+Restaurant,+Market+Street,+Portsmouth,+NH/@43.0778605,-70.7672364,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c6da6ed89:0x836ad8e345857cf3!2m2!1d-70.757577!2d43.0773378!3e2',
    }
}, {
    name: 'Black Trumpet',
    location: {
        google: 'https://www.google.com/maps/place/Black+Trumpet/@43.078674,-70.759872,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0ea623ab2f:0x3642cef4f728b3aa!8m2!3d43.078674!4d-70.757678?hl=en&authuser=0',
        latitude: "43.078674",
        longitude: "-70.759872",
    },
    logo: 'blacktrumpetlogo.jpg',
    summary: "Cozy spot for refined global fare & wine",
    pages: {
        website: 'https://www.blacktrumpetbistro.com/',
        facebook: 'https://www.facebook.com/blacktrumpet',
        yelp: "https://www.yelp.com/biz/black-trumpet-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d672234-Reviews-Black_Trumpet_Bistro-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Black+Trumpet,+Ceres+Street,+Portsmouth,+NH/@43.0786133,-70.7670305,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0ea623ab2f:0x3642cef4f728b3aa!2m2!1d-70.757678!2d43.078674!3e2",
    }
}, {
    name: 'Surf',
    location: {
        google: 'https://www.google.com/maps/place/Surf+Portsmouth/@43.078935,-70.7583045,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0e85e4eee7:0x6e4b5e2552e05131!8m2!3d43.078935!4d-70.7561105?hl=en&authuser=0',
        latitude: "43.078935",
        longitude: "-70.7583045",
    },
    logo: 'surflogo.jpg',
    summary: "Innovative seafood on the waterfront",
    pages: {
        website: 'https://www.surfseafood.com/',
        facebook: 'https://www.facebook.com/SurfPortsmouthNH',
        yelp: "https://www.yelp.com/biz/surf-restaurant-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d2199055-Reviews-Surf-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Surf+Portsmouth,+Bow+Street,+Portsmouth,+NH/@43.0788887,-70.7665173,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0e85e4eee7:0x6e4b5e2552e05131!2m2!1d-70.7561105!2d43.078935!3e2",
    }
}, {
    name: 'River House',
    location: {
        google: 'https://www.google.com/maps/place/River+House/@43.0788002,-70.7588697,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0e9e92d645:0x9c7122ac48d9ba9a!8m2!3d43.0788002!4d-70.7566757?hl=en&authuser=0',
        latitude: "43.0788002",
        longitude: "-70.7588697",
    },
    logo: 'riverhouselogo.jpg',
    summary: "Unfussy coastal cooking and river views",
    pages: {
        website: 'https://riverhouse53bow.com/',
        facebook: 'https://www.facebook.com/RiverHousePortsmouth',
        yelp: "https://www.yelp.com/biz/the-river-house-portsmouth-5",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1556896-Reviews-The_River_House_Restaurant-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/River+House,+Bow+Street,+Portsmouth,+NH/@43.0788887,-70.7667675,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0e9e92d645:0x9c7122ac48d9ba9a!2m2!1d-70.7566757!2d43.0788002!3e2",
    }
}, {
    name: 'Moxy',
    location: {
        google: 'https://www.google.com/maps/place/Moxy/@43.0777893,-70.7590245,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c3d6c9e29:0x9dc48c605f8921c7!8m2!3d43.0777893!4d-70.7568305?hl=en&authuser=0',
        latitude: "43.0777893",
        longitude: "-70.7590245",
    },
    logo: 'moxylogo.jpg',
    summary: "Modern American tapas in smart digs",
    pages: {
        website: 'https://moxyrestaurant.com/',
        facebook: 'https://www.facebook.com/moxyrestaurant',
        yelp: "https://www.yelp.com/biz/moxy-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3347983-Reviews-Moxy-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walakble',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Moxy,+Penhallow+Street,+Portsmouth,+NH/@43.0778605,-70.7666615,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c3d6c9e29:0x9dc48c605f8921c7!2m2!1d-70.7568305!2d43.0777893!3e2",
    }
}, {
    name: "Rudi's Portsmouth",
    location: {
        google: "https://www.google.com/maps/place/Rudi's+Portsmouth/@43.077185,-70.760557,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c772fe23d:0xaa584aa1a3afe834!8m2!3d43.077185!4d-70.758363?hl=en&authuser=0",
        latitude: "43.077185",
        longitude: "-70.760557",
    },
    logo: 'rudilogo.jpg',
    summary: "New American cuisine & live jazz",
    pages: {
        website: 'https://www.rudisportsmouth.com/',
        facebook: 'https://www.facebook.com/rudisportsmouth',
        yelp: "https://www.yelp.com/biz/rudis-portsmouth-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d675129-Reviews-Rudi_s_Portsmouth-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Rudi's+Portsmouth,+High+Street,+Portsmouth,+NH/@43.0778605,-70.7675031,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c772fe23d:0xaa584aa1a3afe834!2m2!1d-70.758363!2d43.077185!3e2",
    }
}, {
    name: 'Old Ferry Landing',
    location: {
        google: 'https://www.google.com/maps/place/Old+Ferry+Landing/@43.07877,-70.7592189,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0ea0a13d3d:0x748bb6b735b74f52!8m2!3d43.07877!4d-70.7570249?hl=en&authuser=0',
        latitude: "43.07877",
        longitude: "-70.7592189",
    },
    logo: 'oldferrylogo.jpg',
    summary: "Waterfront seafood diner with a deck",
    pages: {
        website: 'http://oldferrylanding.com/',
        facebook: 'https://www.facebook.com/Old-Ferry-Landing-167224509050',
        yelp: "https://www.yelp.com/biz/old-ferry-landing-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412895-Reviews-Old_Ferry_Landing-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkalble',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Old+Ferry+Landing,+Ceres+Street,+Portsmouth,+NH/@43.0786133,-70.7669854,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0ea0a13d3d:0x748bb6b735b74f52!2m2!1d-70.7570249!2d43.07877!3e2",
    }
}, {
    name: 'Portsmouth Brewery',
    location: {
        google: 'https://www.google.com/maps/place/Portsmouth+Brewery/@43.0779123,-70.7599687,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c1a9d397b:0x2831df19d2764f6e!8m2!3d43.0779123!4d-70.7577747?hl=en&authuser=0',
        latitude: "43.0779123",
        longitude: "-70.7599687",
    },
    logo: 'portsmouthbrewerylogo.jpg',
    summary: "Lively brewpub with eclectic tavern eats",
    pages: {
        website: 'https://portsmouthbrewery.com/',
        facebook: 'https://www.facebook.com/Portsmouthbrewery',
        yelp: "https://www.yelp.com/biz/the-portsmouth-brewery-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412805-Reviews-Portsmouth_Brewery-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Portsmouth+Brewery,+Market+Street,+Portsmouth,+NH/@43.0788887,-70.7672433,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c1a9d397b:0x2831df19d2764f6e!2m2!1d-70.7577747!2d43.0779123!3e2",
    }
}, {
    name: 'The Oar House',
    location: {
        google: 'https://www.google.com/maps/place/The+Oar+House/@43.0789125,-70.7602004,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0eadbed5f1:0xfb73abf66c6038e7!8m2!3d43.0789125!4d-70.7580064?hl=en&authuser=0',
        latitude: "43.0789125",
        longitude: "-70.7602004",
    },
    logo: 'oarhouselogo.jpg',
    summary: "Quaint, waterfront seafood house & pub",
    pages: {
        website: 'http://www.portsmouthoarhouse.com/',
        facebook: 'https://www.facebook.com/OarHouseRestaurant',
        yelp: "https://www.yelp.com/biz/the-oar-house-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d449136-Reviews-The_Oar_House-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Oar+House,+Ceres+Street,+Portsmouth,+NH/@43.0786133,-70.7672918,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0eadbed5f1:0xfb73abf66c6038e7!2m2!1d-70.7580064!2d43.0789125!3e2",
    }
}, {
    name: 'Library',
    location: {
        google: 'https://www.google.com/maps/place/Library+Restaurant/@43.0752713,-70.7616932,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0b469763ad:0x23bfc651b711a2c8!8m2!3d43.0752713!4d-70.7594992?hl=en&authuser=0',
        latitude: "43.0752713",
        longitude: "-70.7616932",
    },
    logo: 'librarylogo.jpg',
    summary: "Upscale steakhouse with history",
    pages: {
        website: 'https://libraryrestaurant.com/',
        facebook: 'https://www.facebook.com/libraryrestaurant',
        yelp: "https://www.yelp.com/biz/library-restaurant-at-the-rockingham-house-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d544207-Reviews-The_Library-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Library+Restaurant,+State+Street,+Portsmouth,+NH/@43.0774206,-70.7679161,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0b469763ad:0x23bfc651b711a2c8!2m2!1d-70.7594992!2d43.0752713!3e2",
    }
}, {
    name: 'Tuscan Market',
    location: {
        google: "https://www.google.com/maps/place/Tuscan+Market/@43.0770389,-70.7594951,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2c07ecdcb35c5:0x5fcf3eba0f640928!8m2!3d43.0770389!4d-70.7573011?hl=en&authuser=0",
        latitude: "43.0770389",
        longitude: "-70.7594951",
    },
    logo: 'tuscanlogo.jpg',
    summary: "Italian fare & counter-style supplies",
    pages: {
        website: 'http://www.tuscanbrands.com/Market/Portsmouth/',
        facebook: 'https://www.facebook.com/pages/Tuscan%20Market/475454349946783/',
        yelp: "https://www.yelp.com/biz/tuscan-market-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d21184351-Reviews-Tuscan_Market-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Tuscan+Market,+14+Market+Square,+Portsmouth,+NH+03801/@43.0781107,-70.7671235,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2c07ecdcb35c5:0x5fcf3eba0f640928!2m2!1d-70.7573011!2d43.0770389!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Portsmouth Gas Light',
    location: {
        google: 'https://www.google.com/maps/place/Portsmouth+Gas+Light+Co./@43.0780983,-70.7599149,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c1b99f18d:0x325e9379facc0c8d!8m2!3d43.0780983!4d-70.7577209?hl=en&authuser=0',
        latitude: "43.0780983",
        longitude: "-70.7599149",
    },
    logo: 'gaslightlogo.jpg',
    summary: "Pub, pizzaria & club in an 1837 building",
    pages: {
        website: 'https://www.portsmouthgaslight.com/',
        facebook: 'https://www.facebook.com/portsmouthgaslightco',
        yelp: "https://www.yelp.com/biz/portsmouth-gas-light-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d459054-Reviews-Portsmouth_Gas_Light_Co-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Portsmouth+Gas+Light+Co.,+Market+Street,+Portsmouth,+NH/@43.0788887,-70.7672457,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c1b99f18d:0x325e9379facc0c8d!2m2!1d-70.7577209!2d43.0780983!3e2",
    }
}, {
    name: 'Martingale Wharf',
    location: {
        google: 'https://www.google.com/maps/place/Martingale+Wharf/@43.0789431,-70.7582932,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0e8586e5f5:0x22098f26fe8e8c14!8m2!3d43.0789431!4d-70.7560992?hl=en&authuser=0',
        latitude: "43.0789431",
        longitude: "-70.7582932",
    },
    logo: 'martingalelogo.jpg',
    summary: "Sleek, waterfront New American dining",
    pages: {
        website: 'https://www.martingalewharf.com/',
        facebook: 'https://www.facebook.com/martingale.wharf.restaurant',
        yelp: "https://www.yelp.com/biz/martingale-wharf-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3397212-Reviews-Martingale_Wharf_Restaurant-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Martingale+Wharf,+99+Bow+St+suite+w,+Portsmouth,+NH+03801/@43.0786386,-70.7665173,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0e8586e5f5:0x22098f26fe8e8c14!2m2!1d-70.7560992!2d43.0789431!3e2?hl=en&authuser=0",
    }
}, {
    name: 'The Kitchen',
    location: {
        google: 'https://www.google.com/maps/place/The+Kitchen/@43.0743491,-70.7662062,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf755a4ae42d:0x2fb7c3268575de3b!8m2!3d43.0743491!4d-70.7640122?hl=en&authuser=0',
        latitude: "43.0743491",
        longitude: "-70.7662062",
    },
    logo: 'kitchenlogo.jpg',
    summary: "Cozy, modern sandwich shop",
    pages: {
        website: 'https://www.thekitchenportsmouth.com/',
        facebook: 'https://www.facebook.com/TheKitchenNH',
        yelp: "https://www.yelp.com/biz/the-kitchen-eatery-and-catering-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d2155492-Reviews-The_Kitchen-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Kitchen,+Islington+Street,+Portsmouth,+NH/@43.0771383,-70.7688886,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf755a4ae42d:0x2fb7c3268575de3b!2m2!1d-70.7640122!2d43.0743491!3e2?hl=en&authuser=0",
    }
}, {
    name: 'Pocos Bow Street Cantina',
    location: {
        google: "https://www.google.com/maps/place/Poco's+Bow+Street+Cantina/@43.078656,-70.759197,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0e9fea7d4b:0x3756c1a4e8495088!8m2!3d43.078656!4d-70.757003?hl=en&authuser=0",
        latitude: "43.078656",
        longitude: "-70.759197",
    },
    logo: 'pocologo.jpg',
    summary: "Cozy Mexican spot with a riverside deck",
    pages: {
        website: 'http://www.pocosbowstreetcantina.com/',
        facebook: 'https://www.facebook.com/pocosnh',
        yelp: "https://www.yelp.com/biz/pocos-bow-street-cantina-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412925-Reviews-Poco_s_Bow_Street_Cantina-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Poco's+Bow+Street+Cantina,+Bow+Street,+Portsmouth,+NH/@43.0786386,-70.7669199,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0e9fea7d4b:0x3756c1a4e8495088!2m2!1d-70.757003!2d43.078656!3e2?hl=en&authuser=0",
    }
}, {
    name: 'Pink Bamboo',
    location: {
        google: 'https://www.google.com/maps/place/Pink+Bamboo+Hot+Pot+Cafe/@43.0781143,-70.7593064,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c22707529:0x1d9bc313e2169ba5!8m2!3d43.0781143!4d-70.7571124?hl=en&authuser=0',
        latitude: "43.0781143",
        longitude: "-70.7593064",
    },
    logo: 'pinkbamboologo.jpg',
    summary: "Chinese hot piot dining in mpodern setting",
    pages: {
        website: 'http://www.pinkbamboocafe.com/',
        facebook: 'https://www.facebook.com/PinkBambooHotPotCafe',
        yelp: "https://www.yelp.com/biz/pink-bamboo-hot-pot-cafe-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d2251850-Reviews-Pink_Bamboo-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Pink+Bamboo+Hot+Pot+Cafe,+Penhallow+Street,+Portsmouth,+NH/@43.0786386,-70.7669636,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c22707529:0x1d9bc313e2169ba5!2m2!1d-70.7571124!2d43.0781143!3e2?hl=en&authuser=0",
    }
}, {
    name: 'Caffe Kilim',
    location: {
        google: "https://www.google.com/maps/place/Caffe+Kilim/@43.0744444,-70.7660746,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf27eed61ff7:0x44c5d5dc4d1286ef!8m2!3d43.0744444!4d-70.7638806?hl=en&authuser=0",
        latitude: "43.0744444",
        longitude: "-70.7660746",
    },
    logo: 'kilimlogo.jpg',
    summary: "Art-adorned Turkish coffe shop",
    pages: {
        website: 'https://www.caffekilim.com/',
        facebook: 'https://www.facebook.com/Caffe-Kilim-and-Market-82880680383',
        yelp: "https://www.yelp.com/biz/caffe-kilim-and-market-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d412928-Reviews-Caffe_Kilim-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Caffe+Kilim,+163+Islington+St,+Portsmouth,+NH+03801/@43.0771864,-70.7688886,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf27eed61ff7:0x44c5d5dc4d1286ef!2m2!1d-70.7638806!2d43.0744444!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Elephantine Bakery',
    location: {
        google: "https://www.google.com/maps/place/Elephantine+Bakery/@43.0776717,-70.759017,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf98e03dbc19:0x18152beaa98a5804!8m2!3d43.0776717!4d-70.756823?hl=en&authuser=0",
        latitude: "43.0776717",
        longitude: "-70.759017",
    },
    logo: 'elephatinelogo.jpg',
    summary: "Artisanal bakeshop serving fine breads and pastries",
    pages: {
        website: 'https://www.elephantinebakery.com/',
        facebook: 'https://www.facebook.com/elephantinebakery',
        yelp: "https://www.yelp.com/biz/elephantine-bakery-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d15660734-Reviews-Elephantine_Bakery-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Elephantine+Bakery,+10+Commercial+Alley+%232,+Portsmouth,+NH+03801/@43.077824,-70.7668845,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf98e03dbc19:0x18152beaa98a5804!2m2!1d-70.756823!2d43.0776717!3e2?hl=en&authuser=0",
    },
}, {
    name: "The Work's",
    location: {
        google: "https://www.google.com/maps/place/The+Works+Bakery+Cafe/@43.0769246,-70.7606031,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c78ff0989:0x82132d53117b8b03!8m2!3d43.0769246!4d-70.7584091?hl=en&authuser=0",
        latitude: "43.0769246",
        longitude: "-70.7606031",
    },
    logo: 'theworkslogo.jpg',
    summary: "Cafe with breakfast, sandwiches & coffee",
    pages: {
        website: 'https://workscafe.com/locations/portsmouth/',
        facebook: 'https://www.facebook.com/The-Works-Bakery-Cafe-604103483011520',
        yelp: "https://www.yelp.com/biz/the-works-bakery-cafe-portsmouth?osq=The+Works+Bakery+%26+Cafe",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d2283234-Reviews-The_Works_Bakery_Cafe-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Works+Bakery+Cafe,+9+Congress+Street,+Portsmouth,+NH+03801/@43.0778605,-70.7676224,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c78ff0989:0x82132d53117b8b03!2m2!1d-70.7584091!2d43.0769246!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Cup of Joe',
    location: {
        google: "https://www.google.com/maps/place/Cup+of+Joe/@43.0776031,-70.7594955,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c1408325d:0x9e75127fd100c165!8m2!3d43.0776031!4d-70.7573015?hl=en&authuser=0",
        latitude: "43.0776031",
        longitude: "-70.7594955",
    },
    logo: 'cupofjoelogo.jpg',
    summary: "Coffee & quick bites in a warm spot",
    pages: {
        website: 'https://www.cupofjoenh.com/',
        facebook: 'https://www.facebook.com/cupofjoeNH',
        yelp: "https://www.yelp.com/biz/cup-of-joe-portsmouth?osq=cup+of+joe",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d14173666-Reviews-Cup_of_Joe-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cup+of+Joe,+31+Market+St,+Portsmouth,+NH+03801/@43.0778605,-70.7671237,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c1408325d:0x9e75127fd100c165!2m2!1d-70.7573015!2d43.0776031!3e2?hl=en&authuser=0",
    },
}, {
    name: 'The Striker',
    location: {
        google: "https://www.google.com/maps/place/Dolphin+Striker/@43.0784088,-70.7595356,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c1e61db1d:0x73d1345984d212d!8m2!3d43.0784088!4d-70.7573416?hl=en&authuser=0",
        latitude: "43.0784088",
        longitude: "-70.7595356",
    },
    logo: 'strikerlogo.jpg',
    summary: "Seafood-centric fare & historic feel",
    pages: {
        website: 'https://dolphinstriker.com/',
        facebook: 'https://www.facebook.com/thedolphinstriker',
        yelp: "https://www.yelp.com/biz/the-striker-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d4476278-Reviews-Dolphine_Striker-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Dolphin+Striker,+15+Bow+St,+Portsmouth,+NH+03801/@43.0778605,-70.7670889,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c1e61db1d:0x73d1345984d212d!2m2!1d-70.7573416!2d43.0784088!3e2?hl=en&authuser=0",
    },
}, {
    name: "Moe's Italian Sandwiches",
    location: {
        google: "https://www.google.com/maps/place/Moe's+Italian+Sandwiches/@43.0773115,-70.7592517,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c6ab0f4c9:0x97d483bde5d34c35!8m2!3d43.0773115!4d-70.7570577?hl=en&authuser=0",
        latitude: "43.0773115",
        longitude: "-70.7592517",
    },
    logo: 'moelogo.jpg',
    summary: "Classic Italian subs counter-style",
    pages: {
        website: 'https://www.moesitaliansandwiches.com/',
        facebook: 'https://www.facebook.com/moesitaliansandwiches',
        yelp: "https://www.yelp.com/biz/moes-italian-sandwiches-of-portsmouth-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d2329269-Reviews-Moe_s_Italian_Sandwiches-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Moe's+Italian+Sandwiches,+22+Daniel+St,+Portsmouth,+NH+03801/@43.0781107,-70.7669899,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c6ab0f4c9:0x97d483bde5d34c35!2m2!1d-70.7570577!2d43.0773115!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Popovers on the Square',
    location: {
        google: "https://www.google.com/maps/place/Popovers+On+the+Square/@43.0766044,-70.7602875,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c799a0dc3:0x22f66f7dfa37704c!8m2!3d43.0766044!4d-70.7580935?hl=en&authuser=0",
        latitude: "43.0766044",
        longitude: "-70.7602875",
    },
    logo: 'popoverlogo.jpg',
    summary: "Cozy bakery.cafe for light fare and drinks",
    pages: {
        website: 'https://www.popoversonthesquare.com/',
        facebook: 'https://www.facebook.com/PopoversPortsmouthNH',
        yelp: "https://www.yelp.com/biz/popovers-on-the-square-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d872285-Reviews-Popovers_On_The_Square-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Popovers+On+the+Square,+8+Congress+Street,+Portsmouth,+NH+03801/@43.077824,-70.7672364,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c799a0dc3:0x22f66f7dfa37704c!2m2!1d-70.7580935!2d43.0766044!3e2?hl=en&authuser=0",
    },
}, {
    name: "Annabelle's Natural Ice Cream",
    location: {
        google: "https://www.google.com/maps/place/Annabelle's+Natural+Ice+Cream/@43.0788889,-70.7602496,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0eac28f28b:0x6437917f7db5f396!8m2!3d43.0788889!4d-70.7580556?hl=en&authuser=0",
        latitude: "43.0788889",
        longitude: "-70.7602496",
    },
    logo: 'annabellelogo.jpg',
    summary: "Long-runng shop for premium scoops",
    pages: {
        website: 'https://www.annabellesicecream.com/',
        facebook: 'https://www.annabellesicecream.com/',
        yelp: "https://www.yelp.com/biz/annabelles-natural-ice-cream-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d818772-Reviews-Annabelle_s_Natural_Ice_Cream-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/43.0793849,-70.7683991/Annabelle's+Natural+Ice+Cream,+49+Ceres+St,+Portsmouth,+NH+03801/@43.0788887,-70.7674302,16z/data=!3m1!4b1!4m17!1m6!3m5!1s0x89e2bf0eac28f28b:0x6437917f7db5f396!2sAnnabelle's+Natural+Ice+Cream!8m2!3d43.0788889!4d-70.7580556!4m9!1m1!4e1!1m5!1m1!1s0x89e2bf0eac28f28b:0x6437917f7db5f396!2m2!1d-70.7580556!2d43.0788889!3e2?hl=en&authuser=0",
    },
}, {
    name: "Izzy's Frozen Yogurt & Ice Cream",
    location: {
        google: "https://www.google.com/maps/place/Izzy's+Frozen+Yogurt+%26+Ice+Cream/@43.078598,-70.7593054,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0e9ffac745:0x40facbdcd1cfb7c2!8m2!3d43.078598!4d-70.7571114?hl=en&authuser=0",
        latitude: "43.078598",
        longitude: "-70.7593054",
    },
    logo: 'izzylogo.jpg',
    summary: "Ice cream and frozen yogurt since 1992",
    pages: {
        website: 'https://www.izzysfrozenyogurtandicecreamnh.com/',
        facebook: 'https://www.facebook.com/Izzys-Frozen-Yogurt-Ice-Cream-362104891555',
        yelp: "https://www.yelp.com/biz/izzys-frozen-yogurt-and-ice-cream-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d831361-Reviews-Izzy_s_Frozen_Yogurt-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.7',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Izzy's+Frozen+Yogurt+%26+Ice+Cream,+33+Bow+St,+Portsmouth,+NH+03801/@43.0778605,-70.7669665,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0e9ffac745:0x40facbdcd1cfb7c2!2m2!1d-70.7571114!2d43.078598!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Ristorante Massimo',
    location: {
        google: "https://www.google.com/maps/place/Massimo's+-+Ristorante+Massimo/@43.0771685,-70.7583364,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c3818b215:0xf0bf1bca27cab65!8m2!3d43.0771685!4d-70.7561424?hl=en&authuser=0",
        latitude: "43.0771685",
        longitude: "-70.7583364",
    },
    logo: 'massimologo.jpg',
    summary: 'Italian fine dining in elegant quarters',
    pages: {
        website: 'https://ristorantemassimo.com/',
        facebook: 'https://www.facebook.com/RistoranteMassimo',
        yelp: 'https://www.yelp.com/biz/ristorante-massimo-portsmouth?osq=massimo',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d659447-Reviews-Ristorante_Massimo-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Massimo's+-+Ristorante+Massimo,+Penhallow+Street,+Portsmouth,+NH/@43.0776389,-70.7665442,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c3818b215:0xf0bf1bca27cab65!2m2!1d-70.7561424!2d43.0771685!3e2",
    }
}, {
    name: '5 Thai Bistro',
    location: {
        google: 'https://www.google.com/maps/place/5+Thai+Bistro/@43.0762412,-70.7588849,17z/data=!4m5!3m4!1s0x89e2bf0c8a5bce9f:0x46fc7f31c2b7db62!8m2!3d43.0762255!4d-70.7574526?hl=en&authuser=0',
        latitude: "43.0762412",
        longitude: "-70.7588849",
    },
    logo: '5Thailogo.jpg',
    summary: 'Gluten-free Thai options in a quaint setting',
    pages: {
        website: 'https://www.5thaibistro.com/',
        facebook: 'https://www.facebook.com/5ThaiBistro',
        yelp: 'https://www.yelp.com/biz/5-thai-bistro-portsmouth-2',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3958086-Reviews-5_Thai_Bistro-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: 'https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/5+Thai+Bistro,+Pleasant+Street,+Portsmouth,+NH/@43.0776389,-70.7671397,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c8a5bce9f:0x46fc7f31c2b7db62!2m2!1d-70.7574526!2d43.0762255!3e2',
    }
}, {
    name: "Lexie's Joint",
    location: {
        google: "https://www.google.com/maps/place/Lexie's+Joint/@43.0737238,-70.7668616,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9fe01264e3:0x5627b4dc5201421a!8m2!3d43.0737238!4d-70.7646676?hl=en&authuser=0",
        latitude: "43.0737238",
        longitude: "-70.7668616",
    },
    logo: 'lexieslogo.jpg',
    summary: 'Snug spot for creative burgers & beer',
    pages: {
        website: 'https://www.peaceloveburgers.com/portsmouth',
        facebook: 'https://www.facebook.com/LexiesJoint',
        yelp: 'https://www.yelp.com/biz/lexies-joint-portsmouth',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1891877-Reviews-Lexie_s_Joint-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Lexie's+Joint,+Islington+Street,+Portsmouth,+NH/@43.076848,-70.7688886,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9fe01264e3:0x5627b4dc5201421a!2m2!1d-70.7646676!2d43.0737238!3e2",
    }
}, {
    name: "Colby's",
    location: {
        google: "https://www.google.com/maps/place/Colby's+Breakfast+%26+Lunch/@43.0774445,-70.7577328,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c32dad8f5:0x6db50774e37741f5!8m2!3d43.0774445!4d-70.7555388?hl=en&authuser=0",
        latitude: "43.0774445",
        longitude: "-70.7577328",
    },
    logo: 'colbyslogo.jpg',
    summary: "Bustling daytime nook for American chow",
    pages: {
        website: 'https://colbysportsmouthnh.com/',
        facebook: 'https://www.facebook.com/Colbys-Breakfast-Lunch-121804041210665',
        yelp: "https://www.yelp.com/biz/colbys-breakfast-and-lunch-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d616592-Reviews-Colby_s_Breakfast_Lunch-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Colby's+Breakfast+%26+Lunch,+Daniel+Street,+Portsmouth,+NH/@43.0781107,-70.7662424,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c32dad8f5:0x6db50774e37741f5!2m2!1d-70.7555388!2d43.0774445!3e2",
    }
}, {
    name: 'Book and Bar',
    location: {
        google: 'https://www.google.com/maps/place/Portsmouth+Book+%26+Bar/@43.0759966,-70.7595171,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c8a5bcf17:0x13268c15a55e062!8m2!3d43.0759966!4d-70.7573231?hl=en&authuser=0',
        latitude: "43.0759966",
        longitude: "-70.7595171",
    },
    logo: 'bookandbarlogo.jpg',
    summary: "Bookshop & bar set in a circa-1860 building",
    pages: {
        website: 'http://www.bookandbar.com/',
        facebook: 'https://www.facebook.com/PortsmouthBookAndBar',
        yelp: "https://www.yelp.com/biz/portsmouth-book-and-bar-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3815814-Reviews-Portsmouth_Book_and_Bar-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Portsmouth+Book+%26+Bar,+Pleasant+Street,+Portsmouth,+NH/@43.0776389,-70.7671083,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c8a5bcf17:0x13268c15a55e062!2m2!1d-70.7573231!2d43.0759966!3e2",
    }
}, {
    name: 'The Roundabout',
    location: {
        google: 'https://www.google.com/maps/place/Roundabout+Diner+and+Lounge/@43.0731,-70.7810976,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf96d3edca43:0x9398329efbb4b47e!8m2!3d43.0731!4d-70.7789036?hl=en&authuser=0',
        latitude: "43.0731",
        longitude: "-70.7810976",
    },
    logo: 'roundaboutlogo.jpg',
    summary: "Confort food & booze in cool, diner digs",
    pages: {
        website: 'https://www.roundaboutdiner.com/',
        facebook: 'https://www.facebook.com/roundaboutdiner',
        yelp: "https://www.yelp.com/biz/roundabout-diner-and-lounge-portsmouth-6",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1791532-Reviews-The_Roundabout_Diner_Lounge-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Roundabout+Diner+and+Lounge,+Portsmouth+Traffic+Circle,+Portsmouth,+NH/@43.0783828,-70.7627218,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf96d3edca43:0x9398329efbb4b47e!2m2!1d-70.7789036!2d43.0731!3e2?hl=en&authuser=0",
    }
}, {
    name: 'Clipper Tavern',
    location: {
        google: 'https://www.google.com/maps/place/Clipper+Tavern/@43.0758098,-70.7589314,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x89e2bf0cf4766e21:0x720318a5d206bf17!2sClipper+Tavern!8m2!3d43.0758098!4d-70.7567374!10e1!3m4!1s0x89e2bf0cf4766e21:0x720318a5d206bf17!8m2!3d43.0758098!4d-70.7567374?hl=en&authuser=0',
        latitude: "43.0758098",
        longitude: "-70.7589314",
    },
    logo: 'clipperlogo.jpg',
    summary: "Classic pub food in a warm setting",
    pages: {
        website: 'https://www.clippertavernportsmouth.com/',
        facebook: 'https://www.facebook.com/clippertavern',
        yelp: "https://www.yelp.com/biz/the-clipper-tavern-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d12397623-Reviews-The_Clipper_Tavern-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Clipper+Tavern,+Pleasant+Street,+Portsmouth,+NH/@43.0773484,-70.7668417,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0cf4766e21:0x720318a5d206bf17!2m2!1d-70.7567374!2d43.0758098!3e2?hl=en&authuser=0",
    }
}, {
    name: 'The Hammer',
    location: {
        google: "https://www.google.com/maps/place/The+Hammer+Pub+and+Grille/@43.0761236,-70.759174,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bff63aa425dd:0x20c53ab8ec551669!8m2!3d43.0761236!4d-70.75698?hl=en&authuser=0",
        latitude: "43.0761236",
        longitude: "-70.759174",
    },
    logo: 'hammerlogo.jpg',
    summary: "American Pub food in the old Rusty Hammer",
    pages: {
        website: 'https://www.facebook.com/TheHammerPubandGrille',
        facebook: 'https://www.facebook.com/TheHammerPubandGrille',
        yelp: "https://www.yelp.com/biz/the-hammer-pub-and-grille-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d20202926-Reviews-The_Hammer_Pub_and_Grille-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/The+Hammer+Pub+and+Grille,+49+Pleasant+St,+Portsmouth,+NH+03801/@43.0774665,-70.7670917,16z/data=!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bff63aa425dd:0x20c53ab8ec551669!2m2!1d-70.75698!2d43.0761236!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Ceres Bakery',
    location: {
        google: "https://www.google.com/maps/place/Ceres+Bakery/@43.0770263,-70.7582417,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c48125f71:0xcf171162e48d7b94!8m2!3d43.0770263!4d-70.7560477?hl=en&authuser=0",
        latitude: "43.0770263",
        longitude: "-70.7582417",
    },
    logo: 'ceresbakerylogo.jpg',
    summary: "Gourmet light fare & dessert since 1980",
    pages: {
        website: 'https://ceresbakery.com/',
        facebook: 'https://www.facebook.com/CeresBakeryPortsmouth',
        yelp: "https://www.yelp.com/biz/ceres-bakery-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d820457-Reviews-Ceres_Bakery-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Ceres+Bakery,+51+Penhallow+St,+Portsmouth,+NH+03801/@43.0776389,-70.7664968,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c48125f71:0xcf171162e48d7b94!2m2!1d-70.7560477!2d43.0770263!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Kaffee Vonsolln',
    location: {
        google: "https://www.google.com/maps/place/Kaffee+Vonsolln/@43.07735,-70.7581357,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0dcd4cf84b:0xe712fbf47129d08a!8m2!3d43.07735!4d-70.7559417?hl=en&authuser=0",
        latitude: "43.07735",
        longitude: "-70.7581357",
    },
    logo: 'kaffeevonsollnlogo.jpg',
    summary: "Cozy coffee shop with German pastries",
    pages: {
        website: 'https://www.kaffeevonsolln.com/',
        facebook: 'https://www.facebook.com/kaffeevonsolln',
        yelp: "https://www.yelp.com/biz/kaffee-vonsolln-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d2294763-Reviews-Cafe_Vonsolln-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Kaffee+Vonsolln,+79+Daniel+St,+Portsmouth,+NH+03801/@43.0778605,-70.7664438,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0dcd4cf84b:0xe712fbf47129d08a!2m2!1d-70.7559417!2d43.07735!3e2?hl=en&authuser=0",
    },
}, {
    name: "Ceo's Gelato Bistro",
    location: {
        google: "https://www.google.com/maps/place/Ceo's+Gelato+Bistro/@43.0762146,-70.7592606,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c601443bd:0xce08ba72698f6a77!8m2!3d43.0762146!4d-70.7570666?hl=en&authuser=0",
        latitude: "43.0762146",
        longitude: "-70.7592606",
    },
    logo: 'ceologo.jpg',
    summary: "Counter for many gelato flavors",
    pages: {
        website: 'https://ceos-gelato-bistro.square.site/',
        facebook: 'https://www.facebook.com/ceosgelato',
        yelp: "https://www.yelp.com/biz/ceos-gelato-bistro-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d10636934-Reviews-Ceo_s_Gelato_Bistro-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.8',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Ceo's+Gelato+Bistro,+43+Pleasant+St,+Portsmouth,+NH+03801/@43.0776389,-70.7670063,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c601443bd:0xce08ba72698f6a77!2m2!1d-70.7570666!2d43.0762146!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Cure',
    location: {
        google: 'https://www.google.com/maps/place/Cure/@43.076507,-70.758262,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0c8ad4500b:0xdcb9e05c8b2781af!8m2!3d43.076507!4d-70.756068?hl=en&authuser=0',
        latitude: "43.076507",
        longitude: "-70.758262",
    },
    logo: 'curelogo.jpg',
    summary: 'Cozy venue for American dinner and drinks',
    pages: {
        website: 'https://www.curerestaurantportsmouth.com/',
        facebook: 'https://www.facebook.com/CureRestaurant',
        yelp: 'https://www.yelp.com/biz/cure-portsmouth',
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d6453722-Reviews-Cure-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.9',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cure,+State+Street,+Portsmouth,+NH/@43.0774206,-70.7664432,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0c8ad4500b:0xdcb9e05c8b2781af!2m2!1d-70.756068!2d43.076507!3e2",
    }
}, {
    name: 'Raleigh Wine Bar',
    location: {
        google: 'https://www.google.com/maps/place/Raleigh+Wine+Bar+%2B+Eatery/@43.0773579,-70.7563254,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0dc3b65411:0xd076b3afdd6aa692!8m2!3d43.0773579!4d-70.7541314?hl=en&authuser=0',
        latitude: "43.0773579",
        longitude: "-70.7563254",
    },
    logo: 'ralieghlogo.jpg',
    summary: "Elegant food and wine in a sleek setting",
    pages: {
        website: 'https://www.raleighwinebar.com/?fbclid=IwAR2Gqmu1E_KAnDz3_q7z8tVpshkr8AnV48feDC-9PweupIjscmlnmOKoZy4',
        facebook: 'https://www.facebook.com/raleighwinebar',
        yelp: "https://www.yelp.com/biz/raleigh-wine-bar-eatery-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d13167588-Reviews-Raleigh_Wine_Bar-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.9',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Raleigh+Wine+Bar+%2B+Eatery,+State+Street,+Portsmouth,+NH/@43.0774206,-70.7654248,16z/data=!3m2!4b1!5s0x89e2bf9b9ce6beaf:0x290ab22deaff8c29!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0dc3b65411:0xd076b3afdd6aa692!2m2!1d-70.7541314!2d43.0773579!3e2?hl=en&authuser=0",
    }
}, {
    name: "Fezziwig's",
    location: {
        google: "https://www.google.com/maps/place/Fezziwig's+Food+and+Fountain/@43.0768584,-70.7568096,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0db86e4663:0xd19f1a3ffed689f4!8m2!3d43.0768584!4d-70.7546156?hl=en&authuser=0",
        latitude: "43.0768584",
        longitude: "-70.7568096",
    },
    logo: 'fezziwiglogo.jpg',
    summary: "A charming brasserie with sandwiches and drinks",
    pages: {
        website: 'https://fezziwigs.shopsettings.com/',
        facebook: 'https://www.facebook.com/FezziwigsFoodandFountain',
        yelp: "https://www.yelp.com/biz/fezziwigs-food-and-fountain-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d12215527-Reviews-Fezziwig_s_Food_and_Fountain-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.9',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Fezziwig's+Food+and+Fountain,+State+Street,+Portsmouth,+NH/@43.0774206,-70.76575,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0db86e4663:0xd19f1a3ffed689f4!2m2!1d-70.7546156!2d43.0768584!3e2?hl=en&authuser=0",
    }
}, {
    name: 'Domo',
    location: {
        google: 'https://www.google.com/maps/place/Domo+Japanese+Restaurant/@43.0769735,-70.756567,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf0dc6e22189:0x32161f7e829be9b9!8m2!3d43.0769735!4d-70.754373?hl=en&authuser=0',
        latitude: "43.0769735",
        longitude: "-70.756567",
    },
    logo: 'domologo.jpg',
    summary: "Refined setting for sushi & grill fare",
    pages: {
        website: 'http://domoportsmouth.com/',
        facebook: 'https://www.facebook.com/DomoPortsmouth',
        yelp: "https://www.yelp.com/biz/domo-japanese-cuisine-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d7372572-Reviews-Domo-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.9',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Domo+Japanese+Restaurant,+State+Street,+Portsmouth,+NH/@43.0774206,-70.7656595,16z/data=!3m2!4b1!5s0x89e2bf9b9ce6beaf:0x290ab22deaff8c29!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf0dc6e22189:0x32161f7e829be9b9!2m2!1d-70.754373!2d43.0769735!3e2?hl=en&authuser=0",
    }
}, {
    name: "Mr Kim's",
    location: {
        google: "https://www.google.com/maps/place/Mr+Kim's/@43.0770801,-70.7569379,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf30349ef54b:0x9d5896499169afd7!8m2!3d43.0770801!4d-70.7547439?hl=en&authuser=0",
        latitude: "43.0770801",
        longitude: "-70.7569379",
    },
    logo: 'mrkimslogo.jpg',
    summary: "Korean homestyle cooking in a cozy space",
    pages: {
        website: 'https://www.mrkimsrestaurant.com/',
        facebook: 'https://www.facebook.com/mrkimsrestaurant',
        yelp: "https://www.yelp.com/biz/mr-kims-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d17691752-Reviews-Mr_Kim_s-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.9',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Mr+Kim's,+107+State+Street,+Portsmouth,+NH+03801/@43.0774206,-70.7657736,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf30349ef54b:0x9d5896499169afd7!2m2!1d-70.7547439!2d43.0770801!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Wrap Shack',
    location: {
        google: "https://www.google.com/maps/place/Wrap+Shack/@43.0730745,-70.769196,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bfd3673272cd:0x81c4ca7ccce698e2!8m2!3d43.0730745!4d-70.767002?hl=en&authuser=0",
        latitude: "43.0730745",
        longitude: "-70.769196",
    },
    logo: 'wrapshacklogo.jpg',
    summary: "Food truck with deliscious wraps",
    pages: {
        website: 'https://www.wrapshackportsmouth.com/?fbclid=IwAR3L0MNOmUNrmAEEa4AT57kpfG0_lqsF4ubTc0lqsEELsK9dTLfOPfjeSeA',
        facebook: 'https://www.facebook.com/wrapshackportsmouth',
        yelp: "",
        tripadvisor: "",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.9',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Wrap+Shack,+361+Islington+St,+Portsmouth,+NH+03801/@43.0727256,-70.7649809,16z/data=!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bfd3673272cd:0x81c4ca7ccce698e2!2m2!1d-70.767002!2d43.0730745!3e2?hl=en&authuser=0",
    },
}, {
    name: "Darleen's Subs",
    location: {
        google: "https://www.google.com/maps/place/Darleen's+Sub+%26+Pizza,+(Nikki's+Banh+Mi+Shop)/@43.0701564,-70.7740763,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9bbd7eec73:0x632c99df1a451562!8m2!3d43.0701564!4d-70.7718823?hl=en&authuser=0",
        latitude: "43.0701564",
        longitude: "-70.7740763",
    },
    logo: 'darleenlogo.jpg',
    summary: "Basic sandwich shop with pizza & banh mi",
    pages: {
        website: 'https://nikkisbanhmi.com/?fbclid=IwAR3j-ohBWhdVJWEuB3vnQOe0QY3n7HLV4eN_ekLJo2C2hapd-Oc0dXpXJds',
        facebook: 'https://www.facebook.com/NikkisBanhMi',
        yelp: "https://www.yelp.com/biz/darleens-sub-and-pizza-nikki-s-banh-mi-shop-portsmouth-2",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d413087-Reviews-Nikki_s_Bahn_Mi-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.9',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Darleen's+Sub+%26+Pizza,+(Nikki's+Banh+Mi+Shop),+697+Islington+St,+Portsmouth,+NH+03801/@43.0750411,-70.7779678,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9bbd7eec73:0x632c99df1a451562!2m2!1d-70.7718823!2d43.0701564!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Red Rover Creamery',
    location: {
        google: "https://www.google.com/maps/place/Red+Rover+Creamery/@43.0765865,-70.7574418,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf28029d8d4d:0x5a5e8cce53617ae8!8m2!3d43.0765865!4d-70.7552478?hl=en&authuser=0",
        latitude: "43.0765865",
        longitude: "-70.7574418",
    },
    logo: 'redroverlogo.jpg',
    summary: "Offering seasonal, American style ice cream & sherbet",
    pages: {
        website: 'https://www.redrovercreamery.com/',
        facebook: 'https://www.facebook.com/RedRoverCreamery',
        yelp: "https://www.yelp.com/biz/red-rover-creamery-portsmouth-2",
        tripadvisor: "",
    },
    dennett: {
        mode: 'Walkable',
        distance: '0.9',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Red+Rover+Creamery,+150+State+Street,+Portsmouth,+NH+03801/@43.0774206,-70.7660969,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf28029d8d4d:0x5a5e8cce53617ae8!2m2!1d-70.7552478!2d43.0765865!3e2?hl=en&authuser=0",
    },
}, {
    name: 'STREET',
    location: {
        google: 'https://www.google.com/maps/place/STREET+eat%2Fdrink+360/@43.069034,-70.7754298,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9b1bc0b6f7:0x499f50d15ba39a85!8m2!3d43.069034!4d-70.7732358?hl=en&authuser=0',
        latitude: "43.069034",
        longitude: "-70.7754298",
    },
    logo: 'streetlogo.jpg',
    summary: "Colorful, global kitchen & hopping bar",
    pages: {
        website: 'https://www.streetfood360.com/',
        facebook: 'https://www.facebook.com/STREETrestaurant',
        yelp: "https://www.yelp.com/biz/street-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d3251688-Reviews-Street_Food_360-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.0',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/STREET+eat%2Fdrink+360,+Islington+Street,+Portsmouth,+NH/@43.0745029,-70.7760124,15z/data=!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9b1bc0b6f7:0x499f50d15ba39a85!2m2!1d-70.7732358!2d43.069034!3e2",
    }
}, {
    name: 'Conerstone West End',
    location: {
        google: 'https://www.google.com/maps/place/Cornerstone+Artisanal+Pizza+%26+Craft+Beer/@43.0697198,-70.7729581,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9b8620d55b:0x594c7552913a9bd7!8m2!3d43.0697198!4d-70.7707641?hl=en&authuser=0',
        latitude: "43.0697198",
        longitude: "-70.7729581",
    },
    logo: 'cornerstonelogo.jpg',
    summary: "Artisanal pizza and craft beer in a hip, factory setting",
    pages: {
        website: 'https://cornerstoneportsmouth.com/',
        facebook: 'https://www.facebook.com/cornerstonewestendportsmouth',
        yelp: "https://www.yelp.com/biz/cornerstone-artisanal-pizza-and-craft-beer-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d14173601-Reviews-Cornerstone_Pizza_And_Beer-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.0',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cornerstone+Artisanal+Pizza+%26+Craft+Beer,+Brewery+Lane,+Portsmouth,+NH/@43.0747984,-70.77793,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9b8620d55b:0x594c7552913a9bd7!2m2!1d-70.7707641!2d43.0697198!3e2?hl=en&authuser=0",
    }
}, {
    name: 'Botanica',
    location: {
        google: 'https://www.google.com/maps/place/Botanica+Restaurant+and+Gin+Bar/@43.0697703,-70.7727715,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf2f1247d21b:0x8789f09b7bcbd09c!8m2!3d43.0697703!4d-70.7705775?hl=en&authuser=0',
        latitude: "43.0697703",
        longitude: "-70.7727715",
    },
    logo: 'botanicalogo.jpg',
    summary: "Sleek, specialty gin bar with French flair",
    pages: {
        website: 'https://www.botanicanh.com/',
        facebook: 'https://www.facebook.com/botanicanh',
        yelp: "https://www.yelp.com/biz/botanica-portsmouth-4",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d16811505-Reviews-Botanica_Restaurant_and_Gin_Bar-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walakable',
        distance: '1.0',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Botanica+Restaurant+and+Gin+Bar,+Brewery+Lane+%23105,+Portsmouth,+NH/@43.0783828,-70.7627218,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf2f1247d21b:0x8789f09b7bcbd09c!2m2!1d-70.7705775!2d43.0697703!3e2?hl=en&authuser=0"
    }
}, {
    name: 'Cafe Espresso',
    location: {
        google: 'https://www.google.com/maps/place/Cafe+Espresso/@43.0693633,-70.7734524,17z/data=!3m2!4b1!5s0x89e2bf9b9ce6beaf:0x290ab22deaff8c29!4m5!3m4!1s0x89e2bf9ba097e131:0xb5dc36a6533c5ee!8m2!3d43.0693633!4d-70.7712584?hl=en&authuser=0',
        latitude: "43.0693633",
        longitude: "-70.7734524",
    },
    logo: 'cafeespressologo.jpg',
    summary: "Homey, American breakfast & lunch staple",
    pages: {
        website: 'https://www.cafe--espresso.com/',
        facebook: 'https://www.facebook.com/cafeespressoportsmouth',
        yelp: "https://www.yelp.com/biz/cafe-espresso-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d616548-Reviews-Cafe_Espresso-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.0',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Cafe+Espresso,+Islington+Street,+Portsmouth,+NH/@43.0743631,-70.7759027,15z/data=!3m2!4b1!5s0x89e2bf9b9ce6beaf:0x290ab22deaff8c29!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9ba097e131:0xb5dc36a6533c5ee!2m2!1d-70.7712584!2d43.0693633!3e2?hl=en&authuser=0",
    }
}, {
    name: "Luigi's West End",
    location: {
        google: "https://www.google.com/maps/place/Luigi's+West+End+Pizzeria/@43.0688003,-70.7751743,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bfd6af4a7a01:0x5e809d304803a0e3!8m2!3d43.0688003!4d-70.7729803?hl=en&authuser=0",
        latitude: "43.0688003",
        longitude: "-70.7751743",
    },
    logo: 'luigilogo.jpg',
    summary: "Neighborhood Italian American Pizza Restaurant",
    pages: {
        website: 'https://www.luigisportsmouth.com/',
        facebook: 'https://www.facebook.com/luigiswestendpizzeria',
        yelp: "https://www.yelp.com/biz/luigis-west-end-pizzeria-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d19005931-Reviews-Luigi_s_West_End_Pizzeria-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.0',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Luigi's+West+End+Pizzeria,+801+Islington+St,+Portsmouth,+NH+03801/@43.0743476,-70.7760124,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bfd6af4a7a01:0x5e809d304803a0e3!2m2!1d-70.7729803!2d43.0688003!3e2?hl=en&authuser=0",
    },
}, {
    name: 'White Heron',
    location: {
        google: "https://www.google.com/maps/place/White+Heron+Tea+%26+Coffee/@43.0711442,-70.7728382,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9bf93f41bb:0x941f8924e5163a40!8m2!3d43.0711442!4d-70.7706442?hl=en&authuser=0",
        latitude: "43.0711442",
        longitude: "-70.7728382",
    },
    logo: 'whiteheronlogo.jpg',
    summary: "Organic java & light fair in comfy digs",
    pages: {
        website: 'https://www.whiteherontea.com/',
        facebook: 'https://www.facebook.com/whiteherontea',
        yelp: "https://www.yelp.com/biz/white-heron-tea-and-coffee-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d874514-Reviews-White_Heron_Tea_Coffee_Community-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.0',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/White+Heron+Tea+%26+Coffee,+601+Islington+St+%23103,+Portsmouth,+NH+03801/@43.0752207,-70.77793,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9bf93f41bb:0x941f8924e5163a40!2m2!1d-70.7706442!2d43.0711442!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Bread Box Pizza',
    location: {
        google: "https://www.google.com/maps/place/Bread+Box/@43.07211,-70.770625,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9e93904f65:0x213d89c603fc8c35!8m2!3d43.07211!4d-70.768431?hl=en&authuser=0",
        latitude: "43.07211",
        longitude: "-70.770625",
    },
    logo: 'breadboxlogo.jpg',
    summary: "Take-out thick crust pizza & subs",
    pages: {
        website: 'https://www.portsmouthbreadbox.net/',
        facebook: 'https://www.facebook.com/portsmouthbreadbox',
        yelp: "https://www.yelp.com/biz/the-bread-box-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d412858-Reviews-Marshall_s_Bread_Box_Deli-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.0',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Bread+Box,+460+Islington+St,+Portsmouth,+NH+03801/@43.0760411,-70.7689403,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9e93904f65:0x213d89c603fc8c35!2m2!1d-70.768431!2d43.07211!3e2?hl=en&authuser=0",
    },
}, {
    name: "Bob's Broiled Chicken",
    location: {
        google: "https://www.google.com/maps/place/Bob's+Broiled+Chicken+Restaurant/@43.0686359,-70.7733016,18z/data=!3m1!5s0x89e2bf9b04ac774f:0x895f466a7f855673!4m8!1m2!2m1!1sohana!3m4!1s0x89e2bf9b1bc0b6f7:0x6846e91d160bc0bc!8m2!3d43.0690543!4d-70.7730118?hl=en&authuser=0",
        latitude: "43.0686359",
        longitude: "-70.7733016",
    },
    logo: 'bobslogo.jpg',
    summary: "Old fashioned spot for comfort food",
    pages: {
        website: 'https://www.bobschicken.com/',
        facebook: 'https://www.facebook.com/bobschickenportsmouth',
        yelp: "https://www.yelp.com/biz/bobs-broiled-chicken-restaurant-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d412924-Reviews-Bob_s_Broiled_Chicken-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.0',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Bob's+Broiled+Chicken+Restaurant,+Gallagher's+Place,+801+Islington+St,+Portsmouth,+NH+03801/@43.0745108,-70.7760124,15z/data=!3m2!4b1!5s0x89e2bf9b04ac774f:0x895f466a7f855673!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9b1bc0b6f7:0x6846e91d160bc0bc!2m2!1d-70.7730115!2d43.0690541!3e2?hl=en&authuser=0",
    },
}, {
    name: 'Port City Coffee Roasters',
    location: {
        google: "https://www.google.com/maps/place/Port+City+Coffee+Roasters/@43.0692588,-70.7756067,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9b1bc0b6f7:0xc6ea26c46a7f7b51!8m2!3d43.0692588!4d-70.7734127?hl=en&authuser=0",
        latitude: "43.0692588",
        longitude: "-70.7756067",
    },
    logo: 'portcitylogo.jpg',
    summary: "West-end coffee, breakfast & sandwiches since 1992",
    pages: {
        website: 'https://portcitycoffee.com/',
        facebook: 'https://www.facebook.com/portcitycoffee',
        yelp: "https://www.yelp.com/biz/port-city-coffee-roasters-portsmouth",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d5953963-Reviews-Port_City_Coffee_Roasters-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.1',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Port+City+Coffee+Roasters,+801+Islington+St,+Portsmouth,+NH+03801/@43.0745596,-70.7760124,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9b1bc0b6f7:0xc6ea26c46a7f7b51!2m2!1d-70.7734127!2d43.0692588!3e2?hl=en&authuser=0",
    },
}, {
    name: "MoJo's BBQ Shack",
    location: {
        google: "https://www.google.com/maps/place/MoJo's+BBQ+Grill+%26+Tavern/@43.0698194,-70.771394,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf9b7bc513fb:0x1bfa741cd6efa168!8m2!3d43.0698194!4d-70.7692?hl=en&authuser=0",
        latitude: "43.0698194",
        longitude: "-70.771394",
    },
    logo: 'mojologo.jpg',
    summary: "Easy-going BBQ & beer pit stop",
    pages: {
        website: 'https://www.mojosportsmouth.com/',
        facebook: 'https://www.facebook.com/MoJosBBQGrillandTavern',
        yelp: "https://www.yelp.com/biz/mojos-bbq-grill-and-tavern-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1587616-Reviews-MoJo_s_BBQ_Shack-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.1',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/MoJo's+BBQ+Grill+%26+Tavern,+95+Brewery+Ln,+Portsmouth,+NH+03801/@43.0748157,-70.7760124,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9b7bc513fb:0x1bfa741cd6efa168!2m2!1d-70.7692!2d43.0698194!3e2?hl=en&authuser=0",
    }
}, {
    name: "Sander's Seafood",
    location: {
        google: 'https://www.google.com/maps/place/Sanders+Fish+Market/@43.0729505,-70.7525751,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf12cbffcbc1:0xfadd1192d1e1f98b!8m2!3d43.0729505!4d-70.7503811?hl=en&authuser=0',
        latitude: "43.0729505",
        longitude: "-70.7525751",
    },
    logo: 'sanderslogo.jpg',
    summary: "Counter service lobster rolls and seafood to cook at home",
    pages: {
        website: 'https://sanderslobster.com/',
        facebook: 'https://www.facebook.com/sandersfishmarket',
        yelp: "https://www.yelp.com/biz/sanders-lobster-company-portsmouth-2",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d1128318-Reviews-Sanders_Lobster_Company-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.2',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Sanders+Fish+Market,+Marcy+Street,+Portsmouth,+NH/@43.0764316,-70.7680516,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf12cbffcbc1:0xfadd1192d1e1f98b!2m2!1d-70.7503811!2d43.0729505!3e2?hl=en&authuser=0",
    }
}, {
    name: 'Ohana',
    location: {
        google: "https://www.google.com/maps/place/Ohana+Kitchen/@43.0864369,-70.9080129,11z/data=!3m1!5s0x89e2bf9b12d70f05:0x7796a10c4f4be26a!4m8!1m2!2m1!1sohana!3m4!1s0x89e2bf9b68394a2d:0xcd1f848b69063b4a!8m2!3d43.0678065!4d-70.7707188?hl=en&authuser=0",
        latitude: "43.0864369",
        longitude: "-70.9080129",
    },
    logo: 'ohanalogo.jpg',
    summary: "Hawaiian-inspired poké bowls and sushi burritos",
    pages: {
        website: 'https://www.ohana.kitchen/',
        facebook: 'https://www.facebook.com/Ohana-Kitchen-154678412150417',
        yelp: "https://www.yelp.com/biz/ohana-kitchen-portsmouth-2",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d14123927-Reviews-Ohana_Kitchen-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.2',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Ohana+Kitchen+800+Islington+Street,+Plaza+800,+Suite+7/@43.0739026,-70.7773988,15z/data=!3m2!4b1!5s0x89e2bf9b12d70f05:0x7796a10c4f4be26a!4m13!4m12!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9b68394a2d:0xcd1f848b69063b4a!2m2!1d-70.7707188!2d43.0678065?hl=en&authuser=0",
    },
}, {
    name: 'Portsmouth Pizza Factory',
    location: {
        google: "https://www.google.com/maps/place/Portsmouth+Pizza+Factory/@43.0671506,-70.7725023,18z/data=!4m8!1m2!2m1!1sohana!3m4!1s0x89e2bf9b1a63b947:0x5215517b9902f446!8m2!3d43.0679311!4d-70.7710645?hl=en&authuser=0",
        latitude: "43.0671506",
        longitude: "-70.7725023",
    },
    logo: 'pizzafactorylogo.jpg',
    summary: "No-frills choice for pies, subs & salads",
    pages: {
        website: 'http://www.pizzafactorynh.com/',
        facebook: 'https://www.facebook.com/Portsmouth-Pizza-Factory-350867638256895',
        yelp: "https://www.yelp.com/biz/pizza-factory-portsmouth?osq=Portsmouth+Pizza+Factory",
        tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g46209-d412894-Reviews-Portsmouth_Pizza_Factory-Portsmouth_New_Hampshire.html",
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.2',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Portsmouth+Pizza+Factory,+800+Islington+St,+Portsmouth,+NH+03801/@43.0739098,-70.7759027,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf9b1a63b947:0x5215517b9902f446!2m2!1d-70.7710643!2d43.0679309!3e2?hl=en&authuser=0",
    },
}, {
    name: "Geno's",
    location: {
        google: "https://www.google.com/maps/place/Geno's+Chowder+%26+Sandwich+Shop/@43.0742353,-70.7517269,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf12e0604ad5:0xf09d494047955fac!8m2!3d43.0742353!4d-70.7495329?hl=en&authuser=0",
        latitude: "43.0742353",
        longitude: "-70.7517269",
    },
    logo: 'genologo.jpg',
    summary: "Clam chowder & lobster roll mainstay",
    pages: {
        website: 'http://www.genoschowder.com/',
        facebook: 'https://www.facebook.com/Genos-Chowder-and-Sandwich-Shop-110407852340391',
        yelp: "https://www.yelp.com/biz/genos-chowder-and-sandwich-shop-portsmouth",
        tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d412922-Reviews-Geno_s_Chowder_Sandwich_Shop-Portsmouth_New_Hampshire.html',
    },
    dennett: {
        mode: 'Walkable',
        distance: '1.3',
        directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Geno's+Chowder+%26+Sandwich+Shop,+Mechanic+Street,+Portsmouth,+NH/@43.0770695,-70.7676275,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf12e0604ad5:0xf09d494047955fac!2m2!1d-70.7495329!2d43.0742353!3e2",
    }
}, {
    name: '',
    location: "",
    logo: '',
    summary: "",
    pages: {
        website: '',
        facebook: '',
        yelp: "",
        tripadvisor: "",
    },
    dennett: {
        mode: '',
        distance: '',
        directions: "",
    },
}, ];

