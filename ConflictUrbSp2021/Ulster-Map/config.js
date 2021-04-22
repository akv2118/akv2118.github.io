var config = {
    style: 'mapbox://styles/adamvosburgh/cknsxa5vt0d8e17pbxeir9s4n',
    accessToken: 'pk.eyJ1IjoiYWRhbXZvc2J1cmdoIiwiYSI6ImNrOGE5MDhudzAzcHozbW82cTRnY201ZWEifQ.SyIq-l5sw9Ew6mGRLgfp1w',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '8',
            alignment: 'right',
            title: 'Ulster County',
            image: '',
            description: 'Ulster County becomes the framework for studying these issues surrounding food insecurity and infrastructure. Located 100 miles from New York City, Ulster is a center of food production but has a higher than average food insecurity rate for New York State. ',
            location: {
                center: [-73.985089, 41.235612],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
        },
        {
            id: '9',
            alignment: 'right',
            title: 'Ulster County Food Insecurity',
            image: '',
            description: 'In Ulster County, food insecurity is compounded by barriers around housing, jobs, health, transportation, and legal status. By definition, food security in a region depends on three factors. Does the region produce enough food for its people? Is the food supply stable? Do people have physical and economic access to food? All data of Ulster county points to it being an average example of Hudson Valley',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '2019_FoodInsecurity',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '2019_FoodInsecurity',
                    opacity: 0
                }
            ]
        },
        {
            id: '10',
            alignment: 'right',
            title: 'Ulster County Density',
            image: '',
            description: 'In order to spatialize the demographic distribution of the county, we began looking at the population per square mile census data. Here it is in a different projection, but this will be adapted for the final website. The densest region of the county sits around Kingston, the county seat. ',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '2020_FoodInsecurity',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '2020_FoodInsecurity',
                    opacity: 0
                }
            ]
        },
        {
            id: '11',
            alignment: 'right',
            title: 'Ulster County Density',
            image: '',
            description: 'To better understand the distribution of rural communities across the county, we looked at another metric of aggregation: such as households per census tract. ',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: '12',
            alignment: 'right',
            title: 'Ulster County Demographics',
            image: '',
            description: 'The demographic composition of the county is 78% white, ',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: '13',
            alignment: 'right',
            title: 'Ulster County Demographics',
            image: '',
            description: '6% Black,',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: '14',
            alignment: 'right',
            title: 'Ulster County Demographics',
            image: '',
            description: '11% Hispanic,',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: '15',
            alignment: 'right',
            title: 'Land Use',
            image: '',
            description: 'The presence and distribution of these population densities overlaps with the residential land use across the county which is distributed through its central and northern areas. A heavy presence of commercial use sits in the center of Ulster and is typically open to development.',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: '16',
            alignment: 'right',
            title: 'Land Use and Agricultural Districts',
            image: '',
            description: 'However, in order to preserve the county’s agricultural identity, New York State initiated a Certified Agricultural District Program to encourage the use of land for farming. These agricultural districts overlap with residential and commercial land uses, however, inclusion into the agricultural district program allows for legal protections of agricultural activity. Ulster County becomes a productive locus for analysis as it embodies contradictions of inequity that are present throughout the region. For example, the Hudson Valley is home to 4969 farms, yet 1 in 10 people are food insecure (Feeding New York State). Why does a food desert exist in such an agriculturally wealthy region? ',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: '18',
            alignment: 'right',
            title: 'Food Access',
            image: '',
            description: 'Access to nutritious food is defined in two ways: physical access and socio-economic access. Even though physical access is widespread in new york, food insecurity is still experienced across the state. Food access, or inaccessibility, is reinforced by a highly centralized industrial food system designed to produce large amounts of food quickly and inexpensively. In urban and rural communities throughout New York State, structural inequities have contributed to neighborhoods that are predominantly low-income communities of color having less access to healthy food and experiencing greater food insecurity and food-related illnesses. Shown here is farmland and area lacking food access, which is defined as access to grocery stores within 10 miles for rural and 1 mile for urban areas',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: '19',
            alignment: 'right',
            title: 'Kingston County',
            image: '',
            description: 'Kingston becomes an area to study food insecurity and infrastructure in more detail with its abundance of local farms working with food pantries on one end of the spectrum and the large national chain grocery stores on the other.',
            location: {
                center: [-73.998311, 41.930721],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        }
    ]
};
