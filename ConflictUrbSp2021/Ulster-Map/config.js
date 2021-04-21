var config = {
    style: 'mapbox://styles/branigan/cjzsvonse027m1co4nkxp13b3',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
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
        }
    ]
};
