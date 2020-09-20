//setting the data for all the restaurants
let restaurantData = [{
        name: 'Barrio',
        location: 'https://www.google.com/maps/place/Barrio/@43.0799994,-70.7651773,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bf098ccd0a59:0x638419366b50e4f6!8m2!3d43.0799994!4d-70.7629833?hl=en&authuser=0',
        logo: 'barriologo.jpg',
        summary: 'Tacos are their specialty',
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
    },
    {
        name: 'Rooftop at Envio',
        location: '',
        logo: 'enviologo.jpg',
        summary: 'Drinks and Appetizers with a view of the city',
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
    },
    {
        name: 'Green Elephant',
        location: '',
        logo: 'greenelephantlogo.jpg',
        summary: 'Vegetarian and Vegan',
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
    },
    {
        name: 'BRGR Bar',
        location: '',
        logo: 'brgrlogo.jpg',
        summary: "Burgers",
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
        name: 'Dos Amigos',
        location: '',
        logo: 'dosamigoslogo.jpg',
        summary: "Burritos",
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
        location: '',
        logo: 'shalimarlogo.jpg',
        summary: "Indian",
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
        location: '',
        logo: 'eartheaglelogo.jpg',
        summary: "American, Brew Pub",
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
        location: '',
        logo: 'row34logo.jpg',
        summary: "American, Bar, Seafood",
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
        location: '',
        logo: 'bridgestreetlogo.jpg',
        summary: "French, European, Wine Bar",
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
        location: '',
        logo: 'lacarrtalogo.jpg',
        summary: "Mexican",
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
        name: "Jumpin' Jay's",
        location: '',
        logo: 'jumpinjaylogo.jpg',
        summary: "Fish is their specialty",
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
        location: '',
        logo: 'friendlytoastlogo.jpg',
        summary: "American, Vegetarian Friendly, Vegan Options",
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
        location: '',
        logo: 'flatbreadlogo.jpg',
        summary: "Pizza",
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
        location: '',
        logo: 'mediterraneologo.jpg',
        summary: "Italian, Mediterranean, Vegetarian Friendly",
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
        location: '',
        logo: 'thirstymooselogo.jpg',
        summary: "American, Bar, Pub",
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
        location: '',
        logo: 'franklinlogo.jpg',
        summary: "Seafood, American (New), Tapas/Small Plates",
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
        location: '',
        logo: 'goatlogo.jpg',
        summary: "Burgers, Whiskey Bars, Music Venues",
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
        location: '',
        logo: 'souperylogo.jpg',
        summary: "Soup",
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
        location: '',
        logo: 'districtlogo.jpg',
        summary: "American (New), Gastropubs",
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
        location: '',
        logo: 'wilderlogo.jpg',
        summary: "Cocktail Bars, Gastropubs, American (New)",
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
        name: 'Cava',
        location: '',
        logo: 'cavalogo.jpg',
        summary: "Tapas and Wine Bar",
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
    },
    {
        name: 'Durbar Square',
        location: '',
        logo: 'durbarlogo.jpg',
        summary: 'Nepali Vegetarian Friendly Vegan Options',
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
        location: '',
        logo: 'blacktrumpetlogo.jpg',
        summary: "Vegetarian Friendly, Gluten Free Options",
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
        location: '',
        logo: 'surflogo.jpg',
        summary: "Seafood, Sushi",
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
        location: '',
        logo: 'riverhouselogo.jpg',
        summary: "Seafood, American (Traditional), Cocktail Bars",
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
        location: '',
        logo: 'moxylogo.jpg',
        summary: "American (Traditional), Tapas/Small Plates, Bars",
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
        location: '',
        logo: 'rudilogo.jpg',
        summary: "American, Bar, Pub",
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
        location: '',
        logo: 'oldferrylogo.jpg',
        summary: "Seafood, Bars, Juice Bars & Smoothies",
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
        location: '',
        logo: 'portsmouthbrewerylogo.jpg',
        summary: "American, Brew Pub, Pub",
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
        location: '',
        logo: 'oarhouselogo.jpg',
        summary: "Seafood, Pizza, Salad",
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
        location: '',
        logo: 'librarylogo.jpg',
        summary: "Steakhouses, Sandwiches",
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
        name: 'Portsmouth Gas Light',
        location: '',
        logo: 'gaslightlogo.jpg',
        summary: "Pizza, American (New), Dance Clubs",
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
        location: '',
        logo: 'martingalelogo.jpg',
        summary: "Seafood, Venues & Event Spaces, American (Traditional)",
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
        location: '',
        logo: 'kitchenlogo.jpg',
        summary: "Sandwiches, American (New)",
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
        location: '',
        logo: 'pocologo.jpg',
        summary: "Mexican, Bars",
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
        location: '',
        logo: 'pinkbamboologo.jpg',
        summary: "Chinese, Hot Pot, Bars",
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
    },
    {
        name: 'Ristorante Massimo',
        location: '',
        logo: 'massimologo.jpg',
        summary: 'Italian',
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
        location: '',
        logo: '5Thailogo.jpg',
        summary: 'Thai',
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
        location: '',
        logo: 'lexieslogo.jpg',
        summary: 'Burgers',
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
        location: '',
        logo: 'colbyslogo.jpg',
        summary: "Breakfast and Lunch",
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
        location: '',
        logo: 'bookandbarlogo.jpg',
        summary: "Bars, Bookstores, Coffee & Tea",
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
        location: '',
        logo: 'roundaboutlogo.jpg',
        summary: "Basic Diner Food",
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
        name: 'Clipper tavern',
        location: '',
        logo: 'clipperlogo.jpg',
        summary: "Burgers, American (New), Bars",
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
        name: 'Cure',
        location: '',
        logo: 'curelogo.jpg',
        summary: 'Amazing selections, from the mushroom forrester to the duck breast',
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
        location: '',
        logo: 'ralieghlogo.jpg',
        summary: "Wine Bars, American (New), Specialty Food",
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
        location: '',
        logo: 'fezziwiglogo.jpg',
        summary: "Cafes",
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
        location: '',
        logo: 'domologo.jpg',
        summary: "Sushi Bars, Japanese, Thai",
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
        name: 'STREET',
        location: '',
        logo: 'streetlogo.jpg',
        summary: "Bar, Vegetarian Friendly, Vegan Options",
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
        location: '',
        logo: 'cornerstonelogo.jpg',
        summary: "Pizza, Burgers",
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
        location: '',
        logo: 'botanicalogo.jpg',
        summary: "French, Cocktail Bars, Desserts",
        pages: {
            website: 'https://www.botanicanh.com/',
            facebook: 'https://www.facebook.com/botanicanh',
            yelp: "https://www.yelp.com/biz/botanica-portsmouth-4",
            tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g46209-d16811505-Reviews-Botanica_Restaurant_and_Gin_Bar-Portsmouth_New_Hampshire.html',    
        },
        dennett: {
            mode: 'Walakable',
            distance: '1,0',
            directions: "https://www.google.com/maps/dir/56+Dennett+St,+Portsmouth,+NH+03801,+USA/Botanica+Restaurant+and+Gin+Bar,+Brewery+Lane+%23105,+Portsmouth,+NH/@43.0783828,-70.7627218,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e2bfa123522ebf:0x9d1eb0015bd0fbb0!2m2!1d-70.7681287!2d43.0795147!1m5!1m1!1s0x89e2bf2f1247d21b:0x8789f09b7bcbd09c!2m2!1d-70.7705775!2d43.0697703!3e2?hl=en&authuser=0"
        }
    }, {
        name: 'Cafe Espresso',
        location: '',
        logo: 'cafeespressologo.jpg',
        summary: "Breakfast & Brunch, Burgers, Sandwiches",
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
        name: "MoJo's BBQ Shack",
        location: '',
        logo: 'mojologo.jpg',
        summary: "Barbeque, Sports Bars",
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
        name: "Sander's Seafod",
        location: '',
        logo: 'sanderslogo.jpg',
        summary: "Seafood Markets",
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
        name: "Geno's",
        location: '',
        logo: 'genologo.jpg',
        summary: "Sandwiches, Soup",
        pages:{
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
        location: '',
        logo: '',
        summary: "",
        pages: {
            website: '',
            facebook: '',
            yelp: "",
            tripadvisor: '',    
        },
        dennett: {
            mode: '',
            distance: '',
            directions: "",
        },
    },
];


// Cafe Kilim
// Mr Kim 
// Red rover creamery
// Ceres street bakery
// The Hammer
// Ceo's Gelato
// Mos 
// elephantine
// tj
// cafe van solln 
// danieal street tavern
// harpoon williy
// lazy jack
// annabelle   
// spring hill tavern
// izzy
// the striker
// cup of joe
// tuscan Market 
// popovers 
// the works 
// bennetts 
// green room 
// mr wish 
// the goods
// maisson naverre 
// dwyers
// legends
// juicery 
// darlenns 
// luigis
// white Heron 
// breadbox 
// wrap shack 





function makeCard() {
    currentRestarantCard = '<div class="card border-secondary text-center"> \
<h5 class="text-center m-1">' + (i + 1) + '.   <i class="fas fa-walking"></i> ' + restaurantData[i].dennett.mode + ' - ' + restaurantData[i].dennett.distance + ' miles</h5> \
<img class="card-img-top" src="./assets/images/restaurants/' + restaurantData[i].logo + '" alt="' + restaurantData[i].name + ' restaurant logo"> \
    <div class="card-body"> \
        <h5 class="card-title">' + restaurantData[i].summary + '</h5> \
        <a href="' + restaurantData[i].pages.website + '" class="btn btn-warning m-1"><i class="fas fa-utensils"></i> ' + restaurantData[i].name + ' website</a> \
        <a href="' + restaurantData[i].pages.facebook + '" class="btn btn-primary m-1"><i class="fab fa-facebook"></i> Facebook</a> \
        <a href="' + restaurantData[i].pages.yelp + '" class="btn btn-danger m-1"><i class="fab fa-yelp"></i> Yelp</a> \
        <a href="' + restaurantData[i].pages.tripadvisor + '" class="btn btn-success m-1"><i class="fab fa-tripadvisor"></i> Tripadvisor</a> \
        <a href="' + restaurantData[i].dennett.directions + '" class="btn text-white bg-secondary m-1"><i class="fas fa-walking"></i> Walking directions</a> \
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