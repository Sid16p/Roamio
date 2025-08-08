// Destinations Database and Management for Roamio Travel Website

// Comprehensive destinations database with 20+ detailed destinations
const destinations = [
    {
        id: 'paris-france',
        name: 'Paris',
        location: 'France, Europe',
        category: 'city',
        image: 'https://pixabay.com/get/g4f9479d513c18f5c051289e74f5845554b13179b999243c98c46dd74ede22bd39312b30364f004e778f0a2eb8bf86354d1767764d34918bbfbbcc9035d867845_1280.jpg',
        shortDescription: 'The City of Light offers timeless romance, world-class museums, and exquisite cuisine.',
        description: 'Paris, the capital of France, is globally renowned for its art, fashion, gastronomy, and culture. From the iconic Eiffel Tower to the world-famous Louvre Museum, Paris offers an unparalleled blend of history, romance, and sophistication. Stroll along the Seine River, explore charming neighborhoods like Montmartre, and indulge in croissants at sidewalk cafés.',
        duration: '4-7 days',
        budget: '$$$ - $$$',
        bestTime: {
            season: 'April-June, September-October',
            weather: 'Mild temperatures, fewer crowds',
            tip: 'Visit during spring or early fall for the best weather and fewer tourists.'
        },
        thingsToDo: [
            { name: 'Visit the Eiffel Tower', description: 'Ascend the iconic iron lattice tower for breathtaking city views' },
            { name: 'Explore the Louvre Museum', description: 'Marvel at the Mona Lisa and thousands of other masterpieces' },
            { name: 'Walk along the Seine River', description: 'Enjoy romantic strolls and riverside book vendors' },
            { name: 'Visit Notre-Dame Cathedral', description: 'Admire Gothic architecture and climb the towers' },
            { name: 'Explore Montmartre', description: 'Discover artists\' quarter and Sacré-Cœur Basilica' },
            { name: 'Shop on Champs-Élysées', description: 'Browse luxury boutiques and flagship stores' }
        ],
        accommodation: [
            { name: 'Hotel Plaza Athénée', type: 'Luxury', price: '$800-1200/night', description: 'Iconic palace hotel with Eiffel Tower views' },
            { name: 'Hotel des Grands Boulevards', type: 'Boutique', price: '$200-400/night', description: 'Stylish hotel in the historic 2nd arrondissement' },
            { name: 'Generator Paris', type: 'Hostel', price: '$30-80/night', description: 'Modern hostel with great social atmosphere' }
        ],
        localTips: [
            { title: 'Museum Pass', description: 'Buy a Paris Museum Pass to skip lines and save money on multiple attractions' },
            { title: 'Metro Navigation', description: 'Use the metro system efficiently - buy a weekly pass if staying longer' },
            { title: 'Dining Etiquette', description: 'Make dinner reservations in advance, especially for popular restaurants' }
        ],
        gallery: [
            'https://pixabay.com/get/g4f9479d513c18f5c051289e74f5845554b13179b999243c98c46dd74ede22bd39312b30364f004e778f0a2eb8bf86354d1767764d34918bbfbbcc9035d867845_1280.jpg',
            'https://pixabay.com/get/g8dc72eea2bf92592ce6f04aa05d6ed8e1185b64b98679af03898f834094fbd35a9fb168239f50c13c2084cf5f81c8bda151625bce18491873aad617f003f73df_1280.jpg',
            'https://pixabay.com/get/g1f07b1e5f7b9d406f981211d2158827105d55a000169e5c9b0da287f9204f9fc5e9a6cba67d8e59f2fa8cacb1907e7d442a6ca8dd57e92ddf6b2592b92fb7fa6_1280.jpg'
        ]
    },
    {
        id: 'tokyo-japan',
        name: 'Tokyo',
        location: 'Japan, Asia',
        category: 'city',
        image: 'https://pixabay.com/get/g156438527caf79c7132389830aa6ecdfc6e9cd6943a27f503f0835bd903bd32140348355efe2550839fc035e31316315c5296b695664d0a709037d8ba7e4fa3d_1280.jpg',
        shortDescription: 'A mesmerizing blend of ultra-modern innovation and ancient traditions in Japan\'s bustling capital.',
        description: 'Tokyo is a city where cutting-edge technology coexists with centuries-old traditions. From the serene gardens of the Imperial Palace to the neon-lit streets of Shibuya, Tokyo offers an incredible diversity of experiences. Savor world-class sushi, explore ancient temples, and immerse yourself in pop culture.',
        duration: '5-8 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'March-May, September-November',
            weather: 'Cherry blossoms in spring, comfortable fall weather',
            tip: 'Visit during cherry blossom season for the most magical experience.'
        },
        thingsToDo: [
            { name: 'Visit Senso-ji Temple', description: 'Tokyo\'s oldest temple in the historic Asakusa district' },
            { name: 'Explore Shibuya Crossing', description: 'Experience the world\'s busiest pedestrian intersection' },
            { name: 'Shop in Harajuku', description: 'Discover unique fashion and youth culture' },
            { name: 'Visit Tsukiji Outer Market', description: 'Enjoy fresh sushi and street food' },
            { name: 'Climb Tokyo Skytree', description: 'Panoramic views from Japan\'s tallest structure' },
            { name: 'Relax in Ueno Park', description: 'Beautiful gardens and multiple museums' }
        ],
        accommodation: [
            { name: 'The Ritz-Carlton Tokyo', type: 'Luxury', price: '$600-1000/night', description: 'Ultra-luxury with stunning city views' },
            { name: 'Hotel Gracery Shinjuku', type: 'Business', price: '$150-300/night', description: 'Modern hotel in the heart of Shinjuku' },
            { name: 'Khaosan Tokyo Kabuki', type: 'Hostel', price: '$25-60/night', description: 'Clean, modern hostel with great location' }
        ],
        localTips: [
            { title: 'JR Pass', description: 'Get a Japan Rail Pass for unlimited train travel throughout Japan' },
            { title: 'Cash Culture', description: 'Always carry cash - many places don\'t accept credit cards' },
            { title: 'Bow Etiquette', description: 'Learn basic bowing etiquette to show respect for local customs' }
        ],
        gallery: [
            'https://pixabay.com/get/g156438527caf79c7132389830aa6ecdfc6e9cd6943a27f503f0835bd903bd32140348355efe2550839fc035e31316315c5296b695664d0a709037d8ba7e4fa3d_1280.jpg',
            'https://pixabay.com/get/g470164e45177f7e6e9d480c54876318d7414a76e756fa1fcd6fd62a11b254154ab77fa8ef091cf4a011ec2dd2fa944fb2268ea00939630e50f0c286a3ab31479_1280.jpg',
            'https://pixabay.com/get/g88b4de8fb092d12ee0712a715529483f74e4eee31a6e9cecc32ba4b05b0a05ed22cfb2987547a1f04793b9a31a250bce6d747667cd3dba7067b945fd4730f900_1280.jpg'
        ]
    },
    {
        id: 'maldives',
        name: 'Maldives',
        location: 'Indian Ocean',
        category: 'beach',
        image: 'https://pixabay.com/get/g9bba21c10a8700e690a1e7a97457b98304fa9adfb2669dec54a460e635d7169129211a21b74465387c406ab67518d1fa56601c1e008bc88b09068085f09c2bed_1280.jpg',
        shortDescription: 'Paradise on earth with pristine beaches, crystal-clear waters, and luxury overwater bungalows.',
        description: 'The Maldives is a tropical paradise consisting of 1,192 coral islands grouped into 26 atolls. Known for its pristine white sand beaches, crystal-clear turquoise waters, and abundant marine life, it\'s the perfect destination for luxury beach vacations, romantic getaways, and world-class diving.',
        duration: '5-10 days',
        budget: '$$$$',
        bestTime: {
            season: 'November-April',
            weather: 'Dry season with minimal rainfall and calm seas',
            tip: 'Book well in advance as the best resorts fill up quickly during peak season.'
        },
        thingsToDo: [
            { name: 'Snorkeling and Diving', description: 'Explore vibrant coral reefs and marine life' },
            { name: 'Dolphin Watching', description: 'Spot playful dolphins in their natural habitat' },
            { name: 'Sunset Fishing', description: 'Traditional Maldivian fishing experience' },
            { name: 'Spa Treatments', description: 'Relaxing treatments with ocean views' },
            { name: 'Water Sports', description: 'Kayaking, paddleboarding, and jet skiing' },
            { name: 'Island Hopping', description: 'Visit local islands and experience Maldivian culture' }
        ],
        accommodation: [
            { name: 'Soneva Jani', type: 'Ultra-Luxury', price: '$2000-8000/night', description: 'Overwater villas with slides into the ocean' },
            { name: 'Conrad Maldives Rangali Island', type: 'Luxury', price: '$800-3000/night', description: 'Famous underwater restaurant and spa' },
            { name: 'Maafushi Inn', type: 'Guesthouse', price: '$80-200/night', description: 'Budget-friendly option on a local island' }
        ],
        localTips: [
            { title: 'Alcohol Policy', description: 'Alcohol is only available at resort islands, not local islands' },
            { title: 'Seaplane Transfers', description: 'Factor in seaplane costs and schedules when planning your trip' },
            { title: 'Reef-Safe Sunscreen', description: 'Use reef-safe sunscreen to protect the coral ecosystem' }
        ],
        gallery: [
            'https://pixabay.com/get/g9bba21c10a8700e690a1e7a97457b98304fa9adfb2669dec54a460e635d7169129211a21b74465387c406ab67518d1fa56601c1e008bc88b09068085f09c2bed_1280.jpg',
            'https://pixabay.com/get/gb297f59aaa228cea2872478f903e70d1a5a02fd9a859d45bb7ebf52e48684f7454d3441b3f24720f052bba75f047b96ef0e8b8bdaabe383580cff8f29e650914_1280.jpg',
            'https://pixabay.com/get/gc7cda2a1ee1c9892bce26ce2597662232c9ef5e2435f53154b572b7e0479ee72fc0dedcbd1526f3b0f611c59cdeabe1dda6f48d5831a28c2d9d7da20795b0753_1280.jpg'
        ]
    },
    {
        id: 'new-york-usa',
        name: 'New York City',
        location: 'New York, USA',
        category: 'city',
        image: 'https://pixabay.com/get/g1f07b1e5f7b9d406f981211d2158827105d55a000169e5c9b0da287f9204f9fc5e9a6cba67d8e59f2fa8cacb1907e7d442a6ca8dd57e92ddf6b2592b92fb7fa6_1280.jpg',
        shortDescription: 'The city that never sleeps, offering world-class attractions, Broadway shows, and endless energy.',
        description: 'New York City is a global metropolis known for its towering skyscrapers, world-class museums, Broadway theaters, and diverse neighborhoods. From the bright lights of Times Square to the tranquility of Central Park, NYC offers endless possibilities for exploration and discovery.',
        duration: '4-7 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'April-June, September-November',
            weather: 'Pleasant temperatures and beautiful fall foliage',
            tip: 'Avoid summer humidity and winter cold by visiting during shoulder seasons.'
        },
        thingsToDo: [
            { name: 'Visit Central Park', description: 'Green oasis in the heart of Manhattan' },
            { name: 'See a Broadway Show', description: 'Experience world-class theater productions' },
            { name: 'Statue of Liberty', description: 'Iconic symbol of freedom and democracy' },
            { name: 'Metropolitan Museum', description: 'One of the world\'s largest and most prestigious art museums' },
            { name: 'Brooklyn Bridge Walk', description: 'Historic bridge with stunning city views' },
            { name: 'Times Square', description: 'Bright lights and bustling energy of the crossroads of the world' }
        ],
        accommodation: [
            { name: 'The Plaza', type: 'Luxury', price: '$500-1500/night', description: 'Iconic luxury hotel overlooking Central Park' },
            { name: 'Pod Hotels', type: 'Modern', price: '$150-400/night', description: 'Efficient, well-designed rooms in prime locations' },
            { name: 'HI New York City Hostel', type: 'Hostel', price: '$40-100/night', description: 'Clean, safe hostel on the Upper West Side' }
        ],
        localTips: [
            { title: 'MetroCard', description: 'Get a MetroCard for easy subway and bus travel throughout the city' },
            { title: 'Tipping Culture', description: '18-20% is standard for restaurants, 15-20% for taxis' },
            { title: 'Walking Speed', description: 'New Yorkers walk fast - keep pace or move to the side' }
        ],
        gallery: [
            'https://pixabay.com/get/g1f07b1e5f7b9d406f981211d2158827105d55a000169e5c9b0da287f9204f9fc5e9a6cba67d8e59f2fa8cacb1907e7d442a6ca8dd57e92ddf6b2592b92fb7fa6_1280.jpg',
            'https://pixabay.com/get/g8787aaedd755347b3d9b205bb70d105181f4d7e585ccc56060da1701906300da82381b40d3fa911e00bfa5541d17fc3e4cfd2f27efabd397c155417178ca1db2_1280.jpg',
            'https://pixabay.com/get/g3eef930f3bcd832a85195522352a8f1b42aa39724a268152902939856d03f52f8599f1f429dcb592403780093e6611496eac8e6f1aa61ae1f8c192e9b86be058_1280.jpg'
        ]
    },
    {
        id: 'bali-indonesia',
        name: 'Bali',
        location: 'Indonesia, Southeast Asia',
        category: 'beach',
        image: 'https://pixabay.com/get/gb297f59aaa228cea2872478f903e70d1a5a02fd9a859d45bb7ebf52e48684f7454d3441b3f24720f052bba75f047b96ef0e8b8bdaabe383580cff8f29e650914_1280.jpg',
        shortDescription: 'Tropical paradise with stunning beaches, ancient temples, and rich cultural heritage.',
        description: 'Bali is Indonesia\'s most famous island, known for its beautiful beaches, volcanic mountains, iconic rice paddies, and deeply spiritual Hindu culture. From the cultural heart of Ubud to the beach clubs of Seminyak, Bali offers diverse experiences for every type of traveler.',
        duration: '7-14 days',
        budget: '$$ - $$$',
        bestTime: {
            season: 'April-October',
            weather: 'Dry season with minimal rainfall',
            tip: 'Visit during the dry season for the best beach weather and outdoor activities.'
        },
        thingsToDo: [
            { name: 'Explore Ubud', description: 'Cultural center with rice terraces, art, and yoga retreats' },
            { name: 'Temple Hopping', description: 'Visit ancient Hindu temples like Tanah Lot and Besakih' },
            { name: 'Beach Relaxation', description: 'Enjoy beautiful beaches in Seminyak, Nusa Dua, or Sanur' },
            { name: 'Mount Batur Sunrise Trek', description: 'Hike an active volcano for spectacular sunrise views' },
            { name: 'Traditional Cooking Class', description: 'Learn to prepare authentic Balinese dishes' },
            { name: 'Water Sports', description: 'Surfing, snorkeling, and diving in crystal-clear waters' }
        ],
        accommodation: [
            { name: 'COMO Shambhala Estate', type: 'Luxury Wellness', price: '$600-1200/night', description: 'Holistic wellness retreat in the jungle' },
            { name: 'Bisma Eight', type: 'Boutique', price: '$200-500/night', description: 'Modern luxury in the heart of Ubud' },
            { name: 'Zostel Bali', type: 'Hostel', price: '$15-40/night', description: 'Social hostel with pool and great atmosphere' }
        ],
        localTips: [
            { title: 'Scooter Rental', description: 'Rent a scooter for easy transportation, but drive carefully' },
            { title: 'Temple Etiquette', description: 'Dress modestly and wear a sarong when visiting temples' },
            { title: 'Bargaining', description: 'Haggle politely at markets and with street vendors' }
        ],
        gallery: [
            'https://pixabay.com/get/gb297f59aaa228cea2872478f903e70d1a5a02fd9a859d45bb7ebf52e48684f7454d3441b3f24720f052bba75f047b96ef0e8b8bdaabe383580cff8f29e650914_1280.jpg',
            'https://pixabay.com/get/g2da09b0d393f4fa98a21ec1eb49ed5c131a456e47ea0347c6fcd586011b06775a31c9ba8b470f6d7faec7b29abc28c607e391e2833b609ee39cc668611492ba6_1280.jpg',
            'https://pixabay.com/get/g5252cc6cf91239614048136418ff2498bc1e66a89a7a1f454dc127c3a31a13055312b33c6f840473242d9ca6057867b8490b77d2e2644f32e949c3c42dabf057_1280.jpg'
        ]
    },
    {
        id: 'london-uk',
        name: 'London',
        location: 'United Kingdom, Europe',
        category: 'city',
        image: 'https://pixabay.com/get/g41b0535d313b3934dd95eab38039b7509bd598d9b96a1d3b9da65558a0206c05c3750dae37962952a98a2223e7b2ef38c77a8a24f9fb74623fe8b47d56218cec_1280.jpg',
        shortDescription: 'Historic capital with royal palaces, world-class museums, and vibrant cultural scene.',
        description: 'London seamlessly blends centuries of history with cutting-edge modernity. From Buckingham Palace to the Tate Modern, from traditional pubs to Michelin-starred restaurants, London offers an incredible array of experiences in one of the world\'s most influential cities.',
        duration: '4-7 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'May-September',
            weather: 'Warmest and driest months with long daylight hours',
            tip: 'Pack layers and a umbrella regardless of season - London weather is unpredictable.'
        },
        thingsToDo: [
            { name: 'Visit the Tower of London', description: 'Historic fortress housing the Crown Jewels' },
            { name: 'British Museum', description: 'World-renowned museum with artifacts from around the globe' },
            { name: 'Buckingham Palace', description: 'Royal residence and Changing of the Guard ceremony' },
            { name: 'Westminster Abbey', description: 'Gothic abbey where British monarchs are crowned' },
            { name: 'London Eye', description: 'Giant observation wheel with panoramic city views' },
            { name: 'Borough Market', description: 'Historic food market with artisanal products' }
        ],
        accommodation: [
            { name: 'The Savoy', type: 'Luxury', price: '$500-1200/night', description: 'Iconic luxury hotel overlooking the Thames' },
            { name: 'The Z Hotel Piccadilly', type: 'Boutique', price: '$150-350/night', description: 'Compact, stylish rooms in the heart of London' },
            { name: 'YHA London Central', type: 'Hostel', price: '$30-80/night', description: 'Modern hostel near Oxford Street' }
        ],
        localTips: [
            { title: 'Oyster Card', description: 'Get an Oyster Card for convenient travel on buses and the Underground' },
            { title: 'Free Museums', description: 'Many major museums offer free admission to permanent collections' },
            { title: 'Pub Culture', description: 'Experience traditional pub culture - order at the bar, no table service' }
        ],
        gallery: [
            'https://pixabay.com/get/g41b0535d313b3934dd95eab38039b7509bd598d9b96a1d3b9da65558a0206c05c3750dae37962952a98a2223e7b2ef38c77a8a24f9fb74623fe8b47d56218cec_1280.jpg',
            'https://pixabay.com/get/gebfc877665c0745483e3a0708cf8f51be50c64f7cfd5b82630ce1ba11e37d5e6ed159d1b58a23b9a9fd97fa48273166f310630c4612cd8c43a4584be745e87de_1280.jpg',
            'https://pixabay.com/get/g8787aaedd755347b3d9b205bb70d105181f4d7e585ccc56060da1701906300da82381b40d3fa911e00bfa5541d17fc3e4cfd2f27efabd397c155417178ca1db2_1280.jpg'
        ]
    },
    {
        id: 'iceland-reykjavik',
        name: 'Iceland',
        location: 'Nordic Europe',
        category: 'adventure',
        image: 'https://pixabay.com/get/g537c67317dbde813fea93657720fcfff13f590b98e5b3c91b1c91b4c85b81ad657c2d875215dc37c15dae9db46a2bf0e3b9ea0c152fe507dc66e58bdf0ccbdb5_1280.jpg',
        shortDescription: 'Land of fire and ice with dramatic landscapes, geysers, and the Northern Lights.',
        description: 'Iceland is a Nordic island nation known for its dramatic landscape with volcanoes, geysers, hot springs, and lava fields. The island offers incredible natural phenomena including the Northern Lights, midnight sun, and some of the most pristine wilderness areas in the world.',
        duration: '5-10 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'June-August (summer), September-March (Northern Lights)',
            weather: 'Summer for midnight sun and lupins, winter for Northern Lights',
            tip: 'Summer offers better weather and road conditions, winter provides Northern Lights viewing.'
        },
        thingsToDo: [
            { name: 'Golden Circle Tour', description: 'Geysir, Gullfoss waterfall, and Þingvellir National Park' },
            { name: 'Northern Lights Hunting', description: 'Chase the Aurora Borealis during winter months' },
            { name: 'Blue Lagoon', description: 'Relax in geothermal spa waters rich in minerals' },
            { name: 'Ring Road Adventure', description: 'Drive around the island to see diverse landscapes' },
            { name: 'Glacier Hiking', description: 'Explore ice caves and glacier formations' },
            { name: 'Whale Watching', description: 'Spot whales and dolphins from Reykjavik or Húsavík' }
        ],
        accommodation: [
            { name: 'Hotel Rangá', type: 'Luxury', price: '$400-800/night', description: 'Luxury hotel with Northern Lights wake-up service' },
            { name: 'Canopy by Hilton Reykjavik', type: 'Modern', price: '$200-450/night', description: 'Stylish hotel in downtown Reykjavik' },
            { name: 'Loft Hostel', type: 'Hostel', price: '$40-100/night', description: 'Hip hostel with great atmosphere in city center' }
        ],
        localTips: [
            { title: 'Weather Gear', description: 'Pack waterproof clothing and warm layers regardless of season' },
            { title: 'Rental Car', description: 'Consider 4WD vehicle for better access to remote areas' },
            { title: 'Tap Water', description: 'Icelandic tap water is pure and safe to drink everywhere' }
        ],
        gallery: [
            'https://pixabay.com/get/g537c67317dbde813fea93657720fcfff13f590b98e5b3c91b1c91b4c85b81ad657c2d875215dc37c15dae9db46a2bf0e3b9ea0c152fe507dc66e58bdf0ccbdb5_1280.jpg',
            'https://pixabay.com/get/g4386eac1c6eb3926ad1a4015e21979ad0b6bb637772a9a135dda6c7a056ad4ff2926de830b924415450103ad4b815ad19fd5df81acdfc8583d35b8215dadc733_1280.jpg',
            'https://pixabay.com/get/g391ed88e36f32e9bbcd155d64ec17c599d0b7ffe1d0f3974a9aa9f7610a99cecd851a4dbdb8fcb4dba4e4575305536a2168a6bdb3549935ad52ebb3bdd368570_1280.jpg'
        ]
    },
    {
        id: 'santorini-greece',
        name: 'Santorini',
        location: 'Greece, Mediterranean',
        category: 'romantic',
        image: 'https://pixabay.com/get/g101bc0a2f4709ef9039ce89b9a7e0295ef54dcc477e7879403feddc599fbb142651a25679d3c320b93084cfad542792f3eed34a5f72fa8c5555eadc18f46e945_1280.jpg',
        shortDescription: 'Iconic Greek island with stunning sunsets, white-washed villages, and blue-domed churches.',
        description: 'Santorini is one of the most photographed destinations in the world, famous for its dramatic cliffs, whitewashed buildings, blue-domed churches, and spectacular sunsets. This volcanic island in the Aegean Sea offers romance, luxury, and unforgettable natural beauty.',
        duration: '3-5 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'April-June, September-October',
            weather: 'Pleasant temperatures, fewer crowds than summer',
            tip: 'Avoid July-August for fewer crowds and better prices while still enjoying great weather.'
        },
        thingsToDo: [
            { name: 'Watch Sunset in Oia', description: 'World-famous sunset views from the clifftop village' },
            { name: 'Wine Tasting', description: 'Sample unique volcanic wines at local wineries' },
            { name: 'Red Beach Visit', description: 'Unique red sand beach formed by volcanic activity' },
            { name: 'Akrotiri Archaeological Site', description: 'Ancient Minoan city preserved by volcanic ash' },
            { name: 'Caldera Cruise', description: 'Boat trip around the volcanic caldera' },
            { name: 'Fira Exploration', description: 'Capital town with stunning cliff-edge views' }
        ],
        accommodation: [
            { name: 'Canaves Oia Hotel', type: 'Luxury', price: '$800-2000/night', description: 'Luxury suites with infinity pools and caldera views' },
            { name: 'Astra Suites', type: 'Boutique', price: '$300-800/night', description: 'Elegant suites carved into the clifftop' },
            { name: 'Caveland Hostel', type: 'Hostel', price: '$40-120/night', description: 'Unique cave-style accommodation' }
        ],
        localTips: [
            { title: 'Sunset Reservations', description: 'Book dinner reservations early for sunset viewing spots' },
            { title: 'Comfortable Shoes', description: 'Wear comfortable walking shoes for cobblestone streets' },
            { title: 'Water Sports', description: 'Try sailing or catamaran tours for a different perspective' }
        ],
        gallery: [
            'https://pixabay.com/get/g101bc0a2f4709ef9039ce89b9a7e0295ef54dcc477e7879403feddc599fbb142651a25679d3c320b93084cfad542792f3eed34a5f72fa8c5555eadc18f46e945_1280.jpg',
            'https://pixabay.com/get/g83e59cf5e9ffcfc00a639a34e02e8f04ee4fb40978365c6973f760ee9ff93be4b0d5e32468f0e3e43111c7f2deef8084351de00d72dc9181c93a60c6734bd3d3_1280.jpg',
            'https://pixabay.com/get/gbdadd5ae84affb5ced38745dfa8682e4d220dd5278cf665d72050d7fb9d31238312ea80caccd6c9d5ee22ee8de4c7770c42e23be78053ce15da0cc737c13374e_1280.jpg'
        ]
    },
    {
        id: 'dubai-uae',
        name: 'Dubai',
        location: 'United Arab Emirates, Middle East',
        category: 'city',
        image: 'https://pixabay.com/get/gfbdf7cd10b86f6765a697b8585ceef25e2f484c3bbf66de41527f5e7db8d97033c6d7a449019bc9ebbe9a8f1525b4697b07659bf1e53f45d2f1760e9cf9f0896_1280.jpg',
        shortDescription: 'Ultra-modern metropolis with world records, luxury shopping, and desert adventures.',
        description: 'Dubai is a global city known for its ultramodern architecture, luxury shopping, and vibrant nightlife. From the world\'s tallest building to artificial islands, Dubai pushes the boundaries of what\'s possible while maintaining its Arabian heritage and desert location.',
        duration: '4-7 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'November-March',
            weather: 'Cooler temperatures perfect for outdoor activities',
            tip: 'Avoid summer months (June-September) due to extreme heat and humidity.'
        },
        thingsToDo: [
            { name: 'Burj Khalifa', description: 'Visit the world\'s tallest building and observation decks' },
            { name: 'Dubai Mall', description: 'One of the world\'s largest shopping malls' },
            { name: 'Desert Safari', description: 'Dune bashing, camel riding, and Bedouin-style dinner' },
            { name: 'Dubai Marina', description: 'Waterfront district with skyscrapers and yacht clubs' },
            { name: 'Palm Jumeirah', description: 'Artificial palm-shaped island with luxury resorts' },
            { name: 'Gold Souk', description: 'Traditional market selling gold jewelry and precious stones' }
        ],
        accommodation: [
            { name: 'Burj Al Arab', type: 'Ultra-Luxury', price: '$1500-5000/night', description: 'Iconic sail-shaped hotel with butler service' },
            { name: 'Atlantis The Palm', type: 'Resort', price: '$400-1200/night', description: 'Themed resort with waterpark and aquarium' },
            { name: 'Rove City Centre', type: 'Modern', price: '$100-300/night', description: 'Contemporary hotel with great location' }
        ],
        localTips: [
            { title: 'Dress Code', description: 'Dress modestly in public areas, especially during Ramadan' },
            { title: 'Friday Weekend', description: 'Weekend is Friday-Saturday; many businesses close Friday mornings' },
            { title: 'Metro System', description: 'Use the efficient metro system to avoid traffic and parking issues' }
        ],
        gallery: [
            'https://pixabay.com/get/gfbdf7cd10b86f6765a697b8585ceef25e2f484c3bbf66de41527f5e7db8d97033c6d7a449019bc9ebbe9a8f1525b4697b07659bf1e53f45d2f1760e9cf9f0896_1280.jpg',
            'https://pixabay.com/get/g747476e76ecd5beb2b482e6f84248c7ce33229f1f3d46890cda8fa0b6f78d473c496b6cb6c42a8732bba0d75eebbba6d5a64fc1bcbb09e0ab46232b8579e879f_1280.jpg',
            'https://pixabay.com/get/gb5b8b3ac3896bbef30168284a714d1a71f0c80c3b68990fe8128104c3d5eb44f7e7e824eced35ee11dd364a2f818cb99d016aff39f8c53ba234ddc7b6793e33f_1280.jpg'
        ]
    },
    {
        id: 'rome-italy',
        name: 'Rome',
        location: 'Italy, Europe',
        category: 'historical',
        image: 'https://pixabay.com/get/g416badab87f266980b99550d3381e465bd3cb4a2642714ebaab91036e1976bc21fad728a372bb4d5ff78e77dd22dc830093fddd6ae2ca519c862503cf9d417ce_1280.jpg',
        shortDescription: 'The Eternal City with ancient ruins, Renaissance art, and incredible Italian cuisine.',
        description: 'Rome is a living museum where ancient history meets modern life. With iconic landmarks like the Colosseum, Vatican City, and Trevi Fountain, Rome offers an unparalleled journey through Western civilization\'s greatest achievements.',
        duration: '4-6 days',
        budget: '$$ - $$$',
        bestTime: {
            season: 'April-June, September-October',
            weather: 'Pleasant temperatures and fewer crowds',
            tip: 'Book Vatican tickets online in advance to skip long lines.'
        },
        thingsToDo: [
            { name: 'Colosseum Tour', description: 'Explore the iconic ancient amphitheater' },
            { name: 'Vatican Museums', description: 'Sistine Chapel and incredible art collections' },
            { name: 'Roman Forum', description: 'Walk through the heart of ancient Rome' },
            { name: 'Trevi Fountain', description: 'Toss a coin to ensure your return to Rome' },
            { name: 'Pantheon', description: 'Best-preserved Roman building from antiquity' },
            { name: 'Trastevere', description: 'Charming neighborhood with authentic Roman atmosphere' }
        ],
        accommodation: [
            { name: 'Hotel de Russie', type: 'Luxury', price: '$400-900/night', description: 'Elegant hotel with terraced gardens near Spanish Steps' },
            { name: 'The First Roma Arte', type: 'Boutique', price: '$150-400/night', description: 'Art-focused hotel in central location' },
            { name: 'The RomeHello', type: 'Hostel', price: '$25-70/night', description: 'Modern hostel with great common areas' }
        ],
        localTips: [
            { title: 'Roma Pass', description: 'Consider Roma Pass for museum entries and public transport' },
            { title: 'Dining Times', description: 'Lunch 1-3pm, dinner after 8pm - restaurants close between meals' },
            { title: 'Comfortable Shoes', description: 'Wear comfortable walking shoes for cobblestone streets' }
        ],
        gallery: [
            'https://pixabay.com/get/g416badab87f266980b99550d3381e465bd3cb4a2642714ebaab91036e1976bc21fad728a372bb4d5ff78e77dd22dc830093fddd6ae2ca519c862503cf9d417ce_1280.jpg',
            'https://pixabay.com/get/g5db9d1c98a349b4f8ec5ffbc0a9d211b0b69dd193f38bc3ddef185afdb01b1b306b0f71e268aa669b9e34b237178609f9efa84ddcc37f31c6e2c6c2448334c0a_1280.jpg',
            'https://pixabay.com/get/ge90bcb50d061bef50653809b1a9dc217199ffc8aa9e7385c00aa5d8297498695565a1b83ba62e89aa6480fd0a300e18c41a10ff7a5c0375e27b68ff8af7d1e75_1280.jpg'
        ]
    },
    {
        id: 'machu-picchu-peru',
        name: 'Machu Picchu',
        location: 'Peru, South America',
        category: 'historical',
        image: 'https://pixabay.com/get/ga23fb0db2d73e49e359a5d32fbcb676e3735fb43d1c2849ac6b6d09494eb69fb811b8ec39e7264dc6dd2eaf33644199d491f5575442d41303398199dc1c03b54_1280.jpg',
        shortDescription: 'Ancient Incan citadel perched high in the Andes Mountains, one of the New Seven Wonders.',
        description: 'Machu Picchu is an ancient Incan citadel set high in the Andes Mountains of Peru. This UNESCO World Heritage Site offers breathtaking views and insights into the sophisticated Incan civilization. The journey to reach this wonder is as memorable as the destination itself.',
        duration: '3-5 days',
        budget: '$$ - $$$',
        bestTime: {
            season: 'May-September',
            weather: 'Dry season with clear skies for best views',
            tip: 'Book Inca Trail permits well in advance as they sell out quickly.'
        },
        thingsToDo: [
            { name: 'Inca Trail Trek', description: 'Multi-day hiking trail to reach Machu Picchu' },
            { name: 'Huayna Picchu Climb', description: 'Steep hike for panoramic views of the citadel' },
            { name: 'Sacred Valley Tour', description: 'Explore Incan ruins and traditional villages' },
            { name: 'Train Journey', description: 'Scenic train ride through the Sacred Valley' },
            { name: 'Cusco Exploration', description: 'Former Incan capital with colonial architecture' },
            { name: 'Rainbow Mountain', description: 'Colorful mountain formation near Cusco' }
        ],
        accommodation: [
            { name: 'Belmond Sanctuary Lodge', type: 'Luxury', price: '$800-1500/night', description: 'Only hotel located at Machu Picchu' },
            { name: 'Inkaterra Pueblo Hotel', type: 'Eco-Lodge', price: '$300-600/night', description: 'Sustainable luxury in cloud forest setting' },
            { name: 'Pariwana Hostel', type: 'Hostel', price: '$20-60/night', description: 'Budget-friendly option in Cusco with great atmosphere' }
        ],
        localTips: [
            { title: 'Altitude Sickness', description: 'Arrive in Cusco 2-3 days early to acclimatize to altitude' },
            { title: 'Advance Booking', description: 'Book train tickets and entrance permits well in advance' },
            { title: 'Weather Layers', description: 'Pack layers for changing mountain weather conditions' }
        ],
        gallery: [
            'https://pixabay.com/get/ga23fb0db2d73e49e359a5d32fbcb676e3735fb43d1c2849ac6b6d09494eb69fb811b8ec39e7264dc6dd2eaf33644199d491f5575442d41303398199dc1c03b54_1280.jpg',
            'https://pixabay.com/get/g9c142158fa18e971fca7c9bc0e1e26474c4d2af75a903d5e499b2129aee7172f1afd7ab6a18c6c11295ac9e5ae326bf85b67381472ac4f31a8dfa83ebbc07686_1280.jpg',
            'https://pixabay.com/get/gda2657ec112c9f24a70f92b2b1bdfbea2dd07e3dc798fb2a8874f4ef5381c564c61d80bef165dc8cdcb9ea4da8fac7345711e9ee0bbefb559b7d959df5cd3d06_1280.jpg'
        ]
    },
    {
        id: 'swiss-alps',
        name: 'Swiss Alps',
        location: 'Switzerland, Europe',
        category: 'mountain',
        image: 'https://pixabay.com/get/g7cb3804372277c45dc758707ebbfd6a6a1b318386294385ca214580d4c9b04b2e9746ab546f90cd1b5f65c0daf179d36a9fd076e5617625355585f838a7379f0_1280.jpg',
        shortDescription: 'Majestic mountain peaks, pristine lakes, and charming alpine villages.',
        description: 'The Swiss Alps offer some of the world\'s most spectacular mountain scenery. From the Matterhorn to the Jungfraujoch, this region provides incredible hiking, skiing, and scenic train journeys through picture-perfect alpine landscapes.',
        duration: '5-10 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'June-September (hiking), December-March (skiing)',
            weather: 'Summer for hiking, winter for skiing and snow sports',
            tip: 'Purchase a Swiss Travel Pass for convenient train travel throughout the country.'
        },
        thingsToDo: [
            { name: 'Matterhorn Viewing', description: 'See the iconic pyramid-shaped peak from Zermatt' },
            { name: 'Jungfraujoch Railway', description: 'Train journey to the "Top of Europe"' },
            { name: 'Alpine Hiking', description: 'Extensive network of well-marked hiking trails' },
            { name: 'Lake Geneva Cruise', description: 'Scenic boat trip with mountain views' },
            { name: 'Skiing in St. Moritz', description: 'World-class skiing in luxury resort town' },
            { name: 'Glacier Express', description: 'Scenic train journey through alpine landscapes' }
        ],
        accommodation: [
            { name: 'The Omnia', type: 'Luxury', price: '$600-1200/night', description: 'Modern mountain hotel with Matterhorn views' },
            { name: 'Hotel Belvedere Swiss Quality', type: 'Mountain Hotel', price: '$200-500/night', description: 'Traditional alpine hospitality in Grindelwald' },
            { name: 'Youth Hostel Zermatt', type: 'Hostel', price: '$50-120/night', description: 'Budget accommodation with mountain views' }
        ],
        localTips: [
            { title: 'Swiss Travel Pass', description: 'Unlimited travel on trains, buses, and boats' },
            { title: 'Weather Changes', description: 'Mountain weather changes quickly - pack layers' },
            { title: 'Early Starts', description: 'Start hikes early to avoid afternoon thunderstorms' }
        ],
        gallery: [
            'https://pixabay.com/get/g7cb3804372277c45dc758707ebbfd6a6a1b318386294385ca214580d4c9b04b2e9746ab546f90cd1b5f65c0daf179d36a9fd076e5617625355585f838a7379f0_1280.jpg',
            'https://pixabay.com/get/g1f7225e03706b9aab7c125ed5b6249390c12e4882c97fdfa8ca0f6bbd54ddb7d3f5ca0a58ab484eae9227c60902f76544824f6816a9176a99c2e5b20d2bf9fbf_1280.jpg',
            'https://pixabay.com/get/gd447a6359b36760646a76463381aa7eccaf119ddb1c2208b1ee780aacfce1e71d40da4d9b77dae793740518e98070e92bac85ce17be0a6874badea43624e8fc1_1280.jpg'
        ]
    },
    {
        id: 'new-zealand-south-island',
        name: 'New Zealand South Island',
        location: 'New Zealand, Oceania',
        category: 'adventure',
        image: 'https://pixabay.com/get/gbd7e9643edf1c29f50f58adb9fa5c7fc44dba64e603919c1de34ab68cd81d32d1ce7d4b6217185c7fdbb378b2dd45da861b0e6196eead3599c34df418e9d9fff_1280.jpg',
        shortDescription: 'Adventure capital with stunning fjords, glaciers, and adrenaline activities.',
        description: 'New Zealand\'s South Island is a paradise for adventure seekers and nature lovers. From the dramatic fjords of Milford Sound to the Southern Alps, this island offers some of the world\'s most spectacular scenery and thrilling outdoor activities.',
        duration: '7-14 days',
        budget: '$$ - $$$',
        bestTime: {
            season: 'December-February (summer), June-August (winter sports)',
            weather: 'Summer for hiking and outdoor activities, winter for skiing',
            tip: 'Rent a car or campervan for maximum flexibility exploring the island.'
        },
        thingsToDo: [
            { name: 'Milford Sound Cruise', description: 'Scenic fjord cruise with waterfalls and wildlife' },
            { name: 'Queenstown Adventures', description: 'Bungee jumping, skydiving, and extreme sports' },
            { name: 'Franz Josef Glacier', description: 'Helicopter tours and ice walking on glaciers' },
            { name: 'Mount Cook National Park', description: 'Hiking and mountaineering in New Zealand\'s highest peaks' },
            { name: 'Abel Tasman Kayaking', description: 'Sea kayaking in pristine coastal waters' },
            { name: 'Canterbury Plains', description: 'Wine tasting and scenic drives through rolling hills' }
        ],
        accommodation: [
            { name: 'Eichardt\'s Private Hotel', type: 'Luxury', price: '$800-1500/night', description: 'Lakefront luxury in Queenstown' },
            { name: 'Franz Josef Oasis', type: 'Hotel', price: '$150-350/night', description: 'Comfortable accommodation near glacier access' },
            { name: 'YHA Queenstown Central', type: 'Hostel', price: '$30-80/night', description: 'Social hostel in the heart of adventure capital' }
        ],
        localTips: [
            { title: 'Driving Distance', description: 'Distances are longer than they appear - plan extra time' },
            { title: 'Weather Preparation', description: 'Pack for all weather conditions, even in summer' },
            { title: 'Activity Booking', description: 'Book adventure activities in advance, especially in peak season' }
        ],
        gallery: [
            'https://pixabay.com/get/gbd7e9643edf1c29f50f58adb9fa5c7fc44dba64e603919c1de34ab68cd81d32d1ce7d4b6217185c7fdbb378b2dd45da861b0e6196eead3599c34df418e9d9fff_1280.jpg',
            'https://pixabay.com/get/g45ccdab8bdb95bf7790ea92e87e32eb448bda5f7696ac2aceb850ad322d5a453eb079aed1ccc18a8ed097a800f7c4cb88a1e577804aaff5f7b035d75b8e87889_1280.jpg',
            'https://pixabay.com/get/gc4585692a2b8e356c674bd1664603530a3067ae0c7d19a54bd707924321678413183935c46d326d949450fb78e1e7c1ff62f855258fa0aa6c3ef8a8150c2fc27_1280.jpg'
        ]
    },
    {
        id: 'rajasthan-india',
        name: 'Rajasthan',
        location: 'India, South Asia',
        category: 'cultural',
        image: 'https://pixabay.com/get/g778288a69f4c9de8602f53d3e9110bc5434c07038fd15d747b73f16056732d5e074aa6f3deeb9af729a52557dcbad8e123c082866f9d7cf93a4598ff4c0cc41f_1280.jpg',
        shortDescription: 'Land of maharajas with magnificent palaces, desert landscapes, and vibrant culture.',
        description: 'Rajasthan is India\'s largest state, known for its magnificent palaces, imposing forts, colorful markets, and desert landscapes. This royal state offers an immersive experience into India\'s rich history, vibrant culture, and architectural marvels.',
        duration: '7-14 days',
        budget: '$ - $$',
        bestTime: {
            season: 'October-March',
            weather: 'Cooler temperatures ideal for sightseeing',
            tip: 'Avoid summer months (April-June) due to extreme heat in desert regions.'
        },
        thingsToDo: [
            { name: 'Amber Palace, Jaipur', description: 'Magnificent hilltop palace with intricate architecture' },
            { name: 'Udaipur City Palace', description: 'Floating palace complex on Lake Pichola' },
            { name: 'Thar Desert Safari', description: 'Camel trekking and camping under desert stars' },
            { name: 'Jodhpur Blue City', description: 'Explore the blue-painted houses of the old city' },
            { name: 'Pushkar Camel Fair', description: 'Colorful festival with camel trading and cultural events' },
            { name: 'Jaisalmer Fort', description: 'Living fort with shops, hotels, and residents' }
        ],
        accommodation: [
            { name: 'Umaid Bhawan Palace', type: 'Palace Hotel', price: '$400-1000/night', description: 'Heritage palace hotel with royal treatment' },
            { name: 'Hotel Haveli', type: 'Heritage', price: '$50-150/night', description: 'Traditional haveli with authentic architecture' },
            { name: 'Zostel Jaipur', type: 'Hostel', price: '$10-30/night', description: 'Social hostel with rooftop views' }
        ],
        localTips: [
            { title: 'Dress Modestly', description: 'Cover shoulders and legs when visiting temples and rural areas' },
            { title: 'Bargaining', description: 'Haggling is expected in markets - start at 50% of asking price' },
            { title: 'Street Food', description: 'Try local cuisine but stick to busy, clean stalls for safety' }
        ],
        gallery: [
            'https://pixabay.com/get/g778288a69f4c9de8602f53d3e9110bc5434c07038fd15d747b73f16056732d5e074aa6f3deeb9af729a52557dcbad8e123c082866f9d7cf93a4598ff4c0cc41f_1280.jpg',
            'https://pixabay.com/get/g209105429eee4ae72664be295356fe097d8ead2b56ac73cd77d6ca763bfe36ceeb3a88ae83731359a04fe1ab01dc628c0a1d972dbcc24edf69fbd4f28d8d5d5e_1280.jpg',
            'https://pixabay.com/get/g9e8367218e91a861d6de5e00f29b1a4304f86b43c68c85a3437406b416312f0fc4b97ad95b8b4ce7f5c5e693467daaaa115192068e0b9d5108d04295e44d6d22_1280.jpg'
        ]
    },
    {
        id: 'morocco-marrakech',
        name: 'Morocco',
        location: 'North Africa',
        category: 'cultural',
        image: 'https://pixabay.com/get/g4ac6b031b2cc316f1564c6b096d1676bbfbdfbe9946a6637412e9967872ecaa7ac2fdf45229291b7d4981b26a70b3c02034cf5eed46f8139ecb13a894b7f499c_1280.jpg',
        shortDescription: 'Exotic blend of Arab, Berber, and French cultures with bustling souks and Sahara Desert.',
        description: 'Morocco offers an intoxicating blend of Arab, Berber, and European influences. From the bustling medinas of Marrakech and Fez to the dramatic landscapes of the Sahara Desert and Atlas Mountains, Morocco provides a sensory overload of colors, sounds, and flavors.',
        duration: '7-14 days',
        budget: '$ - $$',
        bestTime: {
            season: 'March-May, September-November',
            weather: 'Moderate temperatures across most regions',
            tip: 'Spring offers blooming landscapes, fall provides comfortable touring weather.'
        },
        thingsToDo: [
            { name: 'Marrakech Medina', description: 'Navigate the maze-like souks and historic sites' },
            { name: 'Sahara Desert Tour', description: 'Camel trekking and overnight camping in the desert' },
            { name: 'Atlas Mountains Trek', description: 'Hiking through Berber villages and mountain landscapes' },
            { name: 'Fez Tanneries', description: 'Visit traditional leather-making workshops' },
            { name: 'Chefchaouen Blue City', description: 'Explore the blue-painted mountain town' },
            { name: 'Essaouira Coast', description: 'Windy coastal city with Portuguese influences' }
        ],
        accommodation: [
            { name: 'La Mamounia', type: 'Palace Hotel', price: '$400-800/night', description: 'Legendary luxury hotel in Marrakech' },
            { name: 'Riad Kniza', type: 'Riad', price: '$100-300/night', description: 'Traditional riad with authentic Moroccan design' },
            { name: 'Equity Point Marrakech', type: 'Hostel', price: '$15-40/night', description: 'Social hostel with rooftop terrace' }
        ],
        localTips: [
            { title: 'Negotiation', description: 'Bargaining is part of the culture - enjoy the process' },
            { title: 'Friday Prayers', description: 'Many shops close during Friday prayers around midday' },
            { title: 'Mint Tea', description: 'Accept offered mint tea - it\'s a sign of hospitality' }
        ],
        gallery: [
            'https://pixabay.com/get/g4ac6b031b2cc316f1564c6b096d1676bbfbdfbe9946a6637412e9967872ecaa7ac2fdf45229291b7d4981b26a70b3c02034cf5eed46f8139ecb13a894b7f499c_1280.jpg',
            'https://pixabay.com/get/gfab8bb9555622042b58f59432f4b9e8fbfc0997dc647290e81e923ef1d5797e700329bd08962c63fd8d841e525fff356eb37b72d58efe8d4e7fca35d6c66211b_1280.jpg',
            'https://pixabay.com/get/g7df497c6dfd5e7a21e99311915d60900fc998d888f7df77b54aec8bf13328399b5570c085fe9e6c7662e01de76fb6340e034574d2dd0a5a1e561143d27aced13_1280.jpg'
        ]
    },
    {
        id: 'hawaii-islands',
        name: 'Hawaii',
        location: 'USA, Pacific Ocean',
        category: 'beach',
        image: 'https://pixabay.com/get/g2da09b0d393f4fa98a21ec1eb49ed5c131a456e47ea0347c6fcd586011b06775a31c9ba8b470f6d7faec7b29abc28c607e391e2833b609ee39cc668611492ba6_1280.jpg',
        shortDescription: 'Tropical paradise with pristine beaches, active volcanoes, and Polynesian culture.',
        description: 'Hawaii is a tropical paradise in the Pacific Ocean, known for its stunning beaches, active volcanoes, lush rainforests, and rich Polynesian culture. Each island offers unique experiences, from surfing on Oahu to volcano viewing on the Big Island.',
        duration: '7-14 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'April-June, September-November',
            weather: 'Pleasant temperatures with lower rainfall',
            tip: 'Avoid peak tourist seasons for better prices and fewer crowds.'
        },
        thingsToDo: [
            { name: 'Waikiki Beach', description: 'Famous beach with perfect surfing conditions' },
            { name: 'Volcanoes National Park', description: 'Active volcanoes and unique geological features' },
            { name: 'Road to Hana', description: 'Scenic drive through rainforests and waterfalls' },
            { name: 'Pearl Harbor', description: 'Historic site and memorial' },
            { name: 'Snorkeling at Molokini', description: 'Crescent-shaped crater with vibrant marine life' },
            { name: 'Luau Experience', description: 'Traditional Hawaiian feast and cultural show' }
        ],
        accommodation: [
            { name: 'Montage Kapalua Bay', type: 'Resort', price: '$800-2000/night', description: 'Luxury resort with oceanfront suites' },
            { name: 'Grand Wailea Resort', type: 'Resort', price: '$400-800/night', description: 'Family-friendly resort with water features' },
            { name: 'Hostelling International Honolulu', type: 'Hostel', price: '$40-100/night', description: 'Budget option near Waikiki Beach' }
        ],
        localTips: [
            { title: 'Island Hopping', description: 'Consider visiting multiple islands for diverse experiences' },
            { title: 'Respect Nature', description: 'Follow Leave No Trace principles and respect sacred sites' },
            { title: 'Local Cuisine', description: 'Try traditional Hawaiian dishes like poke and plate lunch' }
        ],
        gallery: [
            'https://pixabay.com/get/g2da09b0d393f4fa98a21ec1eb49ed5c131a456e47ea0347c6fcd586011b06775a31c9ba8b470f6d7faec7b29abc28c607e391e2833b609ee39cc668611492ba6_1280.jpg',
            'https://pixabay.com/get/g1d54c268f6bc82a9a3410c42c2ac6f3e3bf204fc676b73f0221828c6c7122309aad4bb4a17ec1d871602d9aa43434dda51130f37504816144659d0f65d946f9f_1280.jpg',
            'https://pixabay.com/get/g5252cc6cf91239614048136418ff2498bc1e66a89a7a1f454dc127c3a31a13055312b33c6f840473242d9ca6057867b8490b77d2e2644f32e949c3c42dabf057_1280.jpg'
        ]
    },
    {
        id: 'seychelles',
        name: 'Seychelles',
        location: 'Indian Ocean, East Africa',
        category: 'beach',
        image: 'https://pixabay.com/get/g36363a6bd5078621d0204298e49133261d612141cb507d24f2d08d3dc426775af108392a3576f19be678ff4a4e5bd7989bf04404eb4f3efdefaf221e64839e88_1280.jpg',
        shortDescription: 'Exclusive tropical paradise with granite boulders, pristine beaches, and rare wildlife.',
        description: 'Seychelles is an exclusive tropical paradise comprising 115 islands in the Indian Ocean. Known for its pristine beaches with granite boulders, crystal-clear waters, and unique wildlife, Seychelles offers luxury and natural beauty in perfect harmony.',
        duration: '5-10 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'April-May, October-November',
            weather: 'Calm seas and moderate temperatures',
            tip: 'Visit during shoulder seasons for best weather and fewer crowds.'
        },
        thingsToDo: [
            { name: 'Anse Source d\'Argent', description: 'World-famous beach with granite boulders' },
            { name: 'Vallée de Mai', description: 'UNESCO site with rare Coco de Mer palms' },
            { name: 'Aldabra Atoll', description: 'Giant tortoise sanctuary and pristine ecosystem' },
            { name: 'Island Hopping', description: 'Explore different islands by boat or helicopter' },
            { name: 'Diving and Snorkeling', description: 'Vibrant coral reefs and marine life' },
            { name: 'Victoria Market', description: 'Local culture and Creole cuisine in the capital' }
        ],
        accommodation: [
            { name: 'Four Seasons Resort Seychelles', type: 'Ultra-Luxury', price: '$1200-3000/night', description: 'Treetop villas with ocean views' },
            { name: 'Raffles Seychelles', type: 'Luxury', price: '$800-2000/night', description: 'Pavilions with private pools and butler service' },
            { name: 'Le Duc de Praslin', type: 'Hotel', price: '$150-400/night', description: 'Comfortable accommodation with local charm' }
        ],
        localTips: [
            { title: 'Currency', description: 'Seychellois Rupee is local currency, Euros widely accepted' },
            { title: 'Conservation', description: 'Respect marine parks and wildlife protection areas' },
            { title: 'Creole Culture', description: 'Experience local Creole cuisine and cultural traditions' }
        ],
        gallery: [
            'https://pixabay.com/get/g36363a6bd5078621d0204298e49133261d612141cb507d24f2d08d3dc426775af108392a3576f19be678ff4a4e5bd7989bf04404eb4f3efdefaf221e64839e88_1280.jpg',
            'https://pixabay.com/get/g91b640a1bf7e34af72d65fbbeefc2aaecaf42e2230780fe1fd18ee665a65367f9d2cf5c19f52961dc41cbb526c91758033017c402de6c08ab941f9d7148fbf8d_1280.jpg',
            'https://pixabay.com/get/g5252cc6cf91239614048136418ff2498bc1e66a89a7a1f454dc127c3a31a13055312b33c6f840473242d9ca6057867b8490b77d2e2644f32e949c3c42dabf057_1280.jpg'
        ]
    },
    {
        id: 'patagonia-argentina-chile',
        name: 'Patagonia',
        location: 'Argentina & Chile, South America',
        category: 'adventure',
        image: 'https://pixabay.com/get/g9d9fe8102082d6f6b5bc5d9c669ca403094b8989db705bbe43f8c58e9f0b42e0cde01a490e3dcb40b08eb913d309b506d052efaa3c5447f478ff04c0b70b3577_1280.jpg',
        shortDescription: 'Wild frontier with dramatic landscapes, glaciers, and some of the world\'s best trekking.',
        description: 'Patagonia is a vast region spanning Argentina and Chile, known for its dramatic landscapes including the Andes Mountains, massive glaciers, and windswept plains. This remote wilderness offers some of the world\'s most spectacular trekking and adventure opportunities.',
        duration: '10-21 days',
        budget: '$$ - $$$',
        bestTime: {
            season: 'November-March',
            weather: 'Summer season with warmest temperatures and longest days',
            tip: 'Book accommodation well in advance as options are limited in remote areas.'
        },
        thingsToDo: [
            { name: 'Torres del Paine Trek', description: 'Multi-day trek through spectacular mountain landscapes' },
            { name: 'Perito Moreno Glacier', description: 'Witness calving glacier and ice trekking experiences' },
            { name: 'Fitz Roy Circuit', description: 'Challenging trek around the iconic granite spires' },
            { name: 'Ushuaia End of World', description: 'Southernmost city and gateway to Tierra del Fuego' },
            { name: 'Whale Watching Peninsula Valdés', description: 'See southern right whales and marine wildlife' },
            { name: 'Gaucho Culture', description: 'Experience traditional ranch life and horseback riding' }
        ],
        accommodation: [
            { name: 'Explora Patagonia', type: 'Luxury Lodge', price: '$800-1500/night', description: 'All-inclusive luxury with guided excursions' },
            { name: 'EcoCamp Patagonia', type: 'Eco-Lodge', price: '$200-600/night', description: 'Sustainable dome accommodation in Torres del Paine' },
            { name: 'Hosteria El Calafate', type: 'Hostel', price: '$30-80/night', description: 'Budget option near glacier access' }
        ],
        localTips: [
            { title: 'Weather Gear', description: 'Pack for all weather conditions - wind can be extreme' },
            { title: 'Physical Fitness', description: 'Prepare physically for long hikes and challenging terrain' },
            { title: 'Remote Areas', description: 'Carry emergency communication devices in remote regions' }
        ],
        gallery: [
            'https://pixabay.com/get/g9d9fe8102082d6f6b5bc5d9c669ca403094b8989db705bbe43f8c58e9f0b42e0cde01a490e3dcb40b08eb913d309b506d052efaa3c5447f478ff04c0b70b3577_1280.jpg',
            'https://pixabay.com/get/g1006e786e26cdf66a6b8d0f7e0589d31669e0320500689706f38fece1904e068ee454846d1c281f73f46e05c2c405078a78143e8ba0e3ff929b41aa699fa9c53_1280.jpg',
            'https://pixabay.com/get/g8f7726a2d74bc53c9731295bb7220c76afae445018f4716543877a23327ed66b4602a931d629cd327d655e6ff995725f1a68dcb437c42ee03364527d7c3d977b_1280.jpg'
        ]
    },
    {
        id: 'singapore',
        name: 'Singapore',
        location: 'Southeast Asia',
        category: 'city',
        image: 'https://pixabay.com/get/g470164e45177f7e6e9d480c54876318d7414a76e756fa1fcd6fd62a11b254154ab77fa8ef091cf4a011ec2dd2fa944fb2268ea00939630e50f0c286a3ab31479_1280.jpg',
        shortDescription: 'Modern city-state blending cultures, cuisine, and cutting-edge architecture.',
        description: 'Singapore is a vibrant city-state that perfectly balances tradition and modernity. Known for its diverse culture, world-class cuisine, stunning architecture, and efficient urban planning, Singapore offers a unique Southeast Asian experience in a compact, accessible format.',
        duration: '3-5 days',
        budget: '$$$ - $$$$',
        bestTime: {
            season: 'February-April',
            weather: 'Less rainfall and slightly cooler temperatures',
            tip: 'Singapore has tropical weather year-round, so pack light, breathable clothing.'
        },
        thingsToDo: [
            { name: 'Gardens by the Bay', description: 'Futuristic botanical gardens with Supertree Grove' },
            { name: 'Marina Bay Sands', description: 'Iconic infinity pool and observation deck' },
            { name: 'Chinatown and Little India', description: 'Explore vibrant ethnic neighborhoods' },
            { name: 'Singapore Zoo and Night Safari', description: 'World-renowned wildlife experiences' },
            { name: 'Hawker Centers', description: 'Sample diverse street food at local markets' },
            { name: 'Sentosa Island', description: 'Beach resort island with attractions and casinos' }
        ],
        accommodation: [
            { name: 'Marina Bay Sands', type: 'Luxury', price: '$400-800/night', description: 'Iconic hotel with infinity pool and city views' },
            { name: 'Hotel Jen Orchardgateway', type: 'Business', price: '$150-350/night', description: 'Modern hotel in prime shopping district' },
            { name: 'Adler Hostel', type: 'Hostel', price: '$25-60/night', description: 'Clean, modern hostel in Chinatown' }
        ],
        localTips: [
            { title: 'Public Transport', description: 'Use the efficient MRT system and get an EZ-Link card' },
            { title: 'Food Courts', description: 'Hawker centers offer the best local food at great prices' },
            { title: 'Strict Laws', description: 'Respect local laws - fines for littering, chewing gum banned' }
        ],
        gallery: [
            'https://pixabay.com/get/g470164e45177f7e6e9d480c54876318d7414a76e756fa1fcd6fd62a11b254154ab77fa8ef091cf4a011ec2dd2fa944fb2268ea00939630e50f0c286a3ab31479_1280.jpg',
            'https://pixabay.com/get/g88b4de8fb092d12ee0712a715529483f74e4eee31a6e9cecc32ba4b05b0a05ed22cfb2987547a1f04793b9a31a250bce6d747667cd3dba7067b945fd4730f900_1280.jpg',
            'https://pixabay.com/get/g9b45bf1214909829acac407324983c0f25861f7f1848466079088c9658f4aee5ee0f7caca1663915159338562409980c4c796e830140cbf2646bf92d18ab3a5f_1280.jpg'
        ]
    },
    {
        id: 'thailand-bangkok-islands',
        name: 'Thailand',
        location: 'Southeast Asia',
        category: 'cultural',
        image: 'https://pixabay.com/get/g4601460df5ba9e13a6e0cb7c5b8ee6e2e4e1ff1fd89fa65b2aa37b1f3fd7df2925e7cb68c5f52a1be59ad68e3055503c7a993b0a2e6b0da3b24d04aaba02e50c_1280.jpg',
        shortDescription: 'Land of smiles with golden temples, tropical beaches, and incredible street food.',
        description: 'Thailand offers an incredible diversity of experiences, from the bustling streets of Bangkok to the pristine beaches of the southern islands. Known for its friendly people, delicious cuisine, ornate temples, and vibrant culture, Thailand is perfect for first-time visitors to Southeast Asia.',
        duration: '7-14 days',
        budget: '$ - $$',
        bestTime: {
            season: 'November-March',
            weather: 'Cool, dry season with comfortable temperatures',
            tip: 'Avoid monsoon season (July-October) for better weather conditions.'
        },
        thingsToDo: [
            { name: 'Grand Palace Bangkok', description: 'Ornate royal palace complex with sacred temples' },
            { name: 'Phi Phi Islands', description: 'Stunning limestone cliffs and crystal-clear waters' },
            { name: 'Chiang Mai Temples', description: 'Ancient temples and traditional hill tribe culture' },
            { name: 'Floating Markets', description: 'Traditional markets on Bangkok\'s canal system' },
            { name: 'Thai Cooking Classes', description: 'Learn to prepare authentic Thai dishes' },
            { name: 'Elephant Sanctuary', description: 'Ethical elephant experiences in natural settings' }
        ],
        accommodation: [
            { name: 'The Peninsula Bangkok', type: 'Luxury', price: '$300-600/night', description: 'Riverside luxury with traditional Thai service' },
            { name: 'Sala Phuket Resort', type: 'Beach Resort', price: '$150-400/night', description: 'Minimalist beachfront design on Mai Khao Beach' },
            { name: 'Mad Monkey Hostel', type: 'Hostel', price: '$10-30/night', description: 'Social hostel chain with multiple locations' }
        ],
        localTips: [
            { title: 'Respectful Dress', description: 'Dress modestly when visiting temples - cover shoulders and knees' },
            { title: 'Tuk-tuk Rides', description: 'Negotiate prices before getting in, or use meter taxis' },
            { title: 'Street Food', description: 'Try local street food but choose busy stalls with high turnover' }
        ],
        gallery: [
            'https://pixabay.com/get/g4601460df5ba9e13a6e0cb7c5b8ee6e2e4e1ff1fd89fa65b2aa37b1f3fd7df2925e7cb68c5f52a1be59ad68e3055503c7a993b0a2e6b0da3b24d04aaba02e50c_1280.jpg',
            'https://pixabay.com/get/g88b4de8fb092d12ee0712a715529483f74e4eee31a6e9cecc32ba4b05b0a05ed22cfb2987547a1f04793b9a31a250bce6d747667cd3dba7067b945fd4730f900_1280.jpg',
            'https://pixabay.com/get/g7df497c6dfd5e7a21e99311915d60900fc998d888f7df77b54aec8bf13328399b5570c085fe9e6c7662e01de76fb6340e034574d2dd0a5a1e561143d27aced13_1280.jpg'
        ]
    }
];

// Search and filter functionality
let filteredDestinations = [...destinations];

// Initialize destinations page functionality
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('destinations.html')) {
        initializeDestinationsPage();
    }
});

function initializeDestinationsPage() {
    loadAllDestinations();
    setupSearchAndFilter();
    setupFilterButtons();
}

// Load all destinations on the destinations page
function loadAllDestinations() {
    const container = document.getElementById('destinations-container');
    if (!container) return;
    
    filteredDestinations = [...destinations];
    renderDestinations(filteredDestinations);
}

// Render destinations to the container
function renderDestinations(destinationsToRender) {
    const container = document.getElementById('destinations-container');
    const noResults = document.getElementById('no-results');
    
    if (!container) return;
    
    if (destinationsToRender.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    container.innerHTML = destinationsToRender.map(destination => `
        <div class="col-lg-4 col-md-6 mb-4" data-category="${destination.category}" data-name="${destination.name.toLowerCase()}">
            <div class="destination-card">
                <img src="${destination.image}" alt="${destination.name}" class="card-img-top" loading="lazy">
                <div class="card-body">
                    <span class="destination-category">${formatCategory(destination.category)}</span>
                    <h5 class="card-title">${destination.name}</h5>
                    <p class="card-text">${destination.shortDescription}</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <small class="text-muted">
                            <i class="fas fa-map-marker-alt me-1"></i>${destination.location}
                        </small>
                        <small class="text-muted">
                            <i class="fas fa-clock me-1"></i>${destination.duration}
                        </small>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-primary fw-bold">${destination.budget}</span>
                        <a href="destination-details.html?id=${destination.id}" class="btn btn-primary btn-sm">
                            View Details <i class="fas fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-observe elements for animations
    observeDestinationCards();
}

// Setup search and filter functionality
function setupSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            filterDestinations();
        }, 300));
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            filterDestinations();
        });
    }
}

// Setup filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-buttons button[data-filter]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update select dropdown
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                categoryFilter.value = this.dataset.filter;
            }
            
            filterDestinations();
        });
    });
}

// Filter destinations based on search and category
function filterDestinations() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    
    filteredDestinations = destinations.filter(destination => {
        const matchesSearch = !searchTerm || 
            destination.name.toLowerCase().includes(searchTerm) ||
            destination.location.toLowerCase().includes(searchTerm) ||
            destination.shortDescription.toLowerCase().includes(searchTerm) ||
            destination.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !categoryFilter || destination.category === categoryFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    renderDestinations(filteredDestinations);
}

// Format category for display
function formatCategory(category) {
    const categoryMap = {
        'beach': 'Beach',
        'mountain': 'Mountain',
        'city': 'City',
        'adventure': 'Adventure',
        'cultural': 'Cultural',
        'romantic': 'Romantic',
        'historical': 'Historical',
        'winter': 'Winter',
        'desert': 'Desert'
    };
    return categoryMap[category] || category;
}

// Observe destination cards for animations
function observeDestinationCards() {
    const cards = document.querySelectorAll('.destination-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll', 'animated');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
}

// Get destination by ID
function getDestinationById(id) {
    return destinations.find(destination => destination.id === id);
}

// Get destinations by category
function getDestinationsByCategory(category, limit = null) {
    const filtered = destinations.filter(destination => destination.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
}

// Get random destinations
function getRandomDestinations(count = 3, excludeId = null) {
    const available = destinations.filter(dest => dest.id !== excludeId);
    const shuffled = available.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        destinations,
        getDestinationById,
        getDestinationsByCategory,
        getRandomDestinations
    };
}
