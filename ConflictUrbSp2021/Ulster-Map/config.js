var config = {
    style: 'mapbox://styles/adamvosburgh/cknt8pcxl013i17le22xrtlz2',
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
            description: 'Ulster County provides the framework for studying these issues surrounding food insecurity and infrastructure. Located 100 miles from New York City, Ulster is a center of food production, but has a higher than average food insecurity rate in the state.',
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
            description: 'In Ulster County, food insecurity is compounded by barriers in relation to housing, employment, health, transportation, and legal status.',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
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
            id: '10',
            alignment: 'right',
            title: 'Ulster County Density',
            image: '',
            description: 'In order to spatialize the demographic distribution of the county, the population per square mile census data were considered. The densest region of the county sits around Kingston, the county seat. Source: US. Census',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'population per square mile',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'population per square mile',
                    opacity: 0
                }
            ]
        },
        {
            id: '11',
            alignment: 'right',
            title: 'Ulster County Density',
            image: '',
            description: 'To better understand the distribution of rural communities across the county, the metric of aggregation of households per census tract was determined. Source: US. Census',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'households',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'households',
                    opacity: 0
                }
            ]
        },
        {
            id: '12',
            alignment: 'right',
            title: 'Ulster County Demographics',
            image: '',
            description: 'The demographic composition of the county is 78% white, Source: US. Census',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'white',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'white',
                    opacity: 0
                }
            ]
        },
        {
            id: '13',
            alignment: 'right',
            title: 'Ulster County Demographics',
            image: '',
            description: '6% Black, Source: US. Census', 
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'black',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'black',
                    opacity: 0
                }
            ]
        },
        {
            id: '14',
            alignment: 'right',
            title: 'Ulster County Demographics',
            image: '',
            description: 'And 11% Hispanic. Source: US. Census',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'hispanic',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hispanic',
                    opacity: 0
                }
            ]
        },
        {
            id: '15',
            alignment: 'right',
            title: 'Land Use',
            image: '',
            description: 'The presence and distribution of these population densities overlaps with the residential land use across the county which is distributed through its central and northern areas. A heavy presence of commercial use sits in the center of Ulster and is typically open to development. Source: Ulster County Land Use',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'Land Use',
                    opacity: .56
                }
            ],
            onChapterExit: [
                {
                    layer: 'Land Use',
                    opacity: 0
                }
            ]
        },
        {
            id: '16',
            alignment: 'right',
            title: 'Land Use and Agricultural Districts',
            image: '',
            description: 'To preserve the county’s agricultural identity, the New York State initiated a Certified Agricultural District Program to encourage the use of land farming. These agricultural districts overlap with residential and commercial land uses; however, inclusion into the agricultural district program allows for legal protections of agricultural activity. Source: Ulster County Land Use, USDA Agricultural Districts',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'Land Use',
                    opacity: .56
                },
                {
                    layer: 'Agricultural District',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Land Use',
                    opacity: .56
                },
                {
                    layer: 'Agricultural District',
                    opacity: 1
                }
            ]
        },
        {
            id: '17',
            alignment: 'right',
            title: 'Food Access',
            image: '',
            description: 'Food security in a region depends on three factors: the sufficiency of production for its people, stability of food supply, and people’s access to food. Access to nutritious food is defined in two ways: physical and socio-economic access. Even though physical access is widespread in New York, food insecurity is still rampant across the state. Food access or inaccessibility is reinforced by a highly centralized industrial food system designed to produce large amounts of food quickly and inexpensively. In urban and rural communities throughout New York State, structural inequities have contributed to food insecurity, food-related illnesses, and difficulty in accessing healthy food of low-income communities of color. Shown here is farmland and areas lacking food access, which is defined as access to grocery stores within ten miles for rural areas and one mile for urban areas. Source: US. Census',
            location: {
                center: [-74.164435, 41.831406],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'Land Use',
                    opacity: .56
                },
                {
                    layer: 'Agricultural District',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Land Use',
                    opacity: 0
                },
                {
                    layer: 'Agricultural District',
                    opacity: 0
                }
            ]
        },
        {
            id: '18',
            alignment: 'right',
            title: 'Kingston County',
            image: '',
            description: 'Kingston is a generous area to study food insecurity and infrastructure in more detail with its abundance of local farms working with food pantries on one end of the spectrum and the large national chain grocery stores on the other. Source: US. Census',
            location: {
                center: [-74.013074, 41.933151],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'County Boundary',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'County Boundary',
                    opacity: 1
                }
            ]
        }
    ]
};
