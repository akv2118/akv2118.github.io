var config = {
    style: 'mapbox://styles/adamvosburgh/cknszb92v0r3x17qovqro0961',
    accessToken: 'pk.eyJ1IjoiYWRhbXZvc2J1cmdoIiwiYSI6ImNrOGE5MDhudzAzcHozbW82cTRnY201ZWEifQ.SyIq-l5sw9Ew6mGRLgfp1w',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'Kingston1',
            alignment: 'right',
            title: 'Kingston Nodes on Supply Chains',
            image: '',
            description: 'We mapped nodes on a long and short supply chain for Kingston, in this map red being for points on a long supply chain, yellow for short, orange for both. ',
            location: {
                center: [-74.013074, 41.933151],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'medium-chain',
                    opacity: 1
                },
                {
                    layer: 'medium-chain-text',
                    opacity: 1
                },
                {
                    layer: 'long-stores',
                    opacity: 1
                },
                {
                    layer: 'long-stores-text',
                    opacity: 1
                },
                {
                    layer: 'short-pantries',
                    opacity: 1
                },
                {
                    layer: 'short-pantries-text',
                    opacity: 1
                },
                {
                    layer: 'short-farms',
                    opacity: 1
                },
                {
                    layer: 'short-farms-text',
                    opacity: 1
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'Kingston2',
            alignment: 'right',
            title: 'Long Chain - Kingston',
            image: '',
            description: 'Nodes on a long chain are primarily grocery stores and big box retailers, Hanaford, Walmart, Target. We chose Walmart as a typical example of a long supply chain and looked into their supply chain. ',
            location: {
                center: [-73.996470, 41.947921],
                zoom: 13,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                //disable previous layers
                {
                    layer: 'medium-chain',
                    opacity: 0  
                },
                {
                    layer: 'medium-chain-text',
                    opacity: 0
                },
                {
                    layer: 'long-stores',
                    opacity: 1
                },
                {
                    layer: 'long-stores-text',
                    opacity: 1
                },
                {
                    layer: 'short-pantries',
                    opacity: 0
                },
                {
                    layer: 'short-pantries-text',
                    opacity: 0
                },
                {
                    layer: 'short-farms',
                    opacity: 0
                },
                {
                    layer: 'short-farms-text',
                    opacity: 0
                }
                
            ],
            onChapterExit: [
                {
                    
                }
            ]
        },
        {
            id: 'Kingston3',
            alignment: 'right',
            title: 'Long Chain - Travel Distance',
            image: '',
            description: 'Going off of publicly accessible information and then phone calls to Walmart itself we were able to make a few decent assumptions. The trips on the journey for a longer supply chain is a farm, a processing facility, distribution center, and Walmart. Three of Walmarts main suppliers are located in Washington State, New York State, and Canada, and they are all owned by or subsidiaries of Super Fresh Growers. For the domestically sourced apples, the trip from Washington state is 2800 miles, and the average distance of Sweet Tango’s orchards (Sweet Tango is a subsidiary of Super Fresh Growers) is about 250 miles, all of their farms are located near the Canadian border. The Walmart distribution centers themselves are located in clusters around Schenectady and Scranton, 80 miles from Kingston. These long chains, supposedly the result of market efficiencies, instead express the logic of consolidated ownership structures.',
            location: {
                center: [-74.013074, 41.933151],
                zoom: 7,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'long-stores',
                    opacity: 0
                },
                {
                    layer: 'long-stores-text',
                    opacity: 0
                },    
                //enable next set
                {
                    layer: 'distribution-centers',
                    opacity: 1
                },
                {
                    layer: 'distribution-centers-text',
                    opacity: 1
                },
                {
                    layer: 'walmart',
                    opacity: 1
                },
                {
                    layer: 'walmart-text',
                    opacity: 1
                },
                {
                    layer: 'routes',
                    opacity: 1
                },
                {
                    layer: 'route-highlight',
                    opacity: 1
                },
                {
                    layer: 'route-far',
                    opacity: 1
                },
                {
                    layer: 'route-far-text1',
                    opacity: 1
                },
                {
                    layer: 'route-far-text2',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
        },
        {
            id: 'Kingston4',
            alignment: 'right',
            title: 'Short Chain - Kingston',
            image: '',
            description: 'Items that fall on a short chain for Kingston are farms, local distribution centers, food pantries and farmers markets. We chose Kingston farmers market as an example.',
            location: {
                center: [-74.013074, 41.933151],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    //disable previous set
                    layer: 'distribution-centers',
                    opacity: 0
                },
                {
                    layer: 'distribution-centers-text',
                    opacity: 0
                },
                {
                    layer: 'walmart',
                    opacity: 0
                },
                {
                    layer: 'walmart-text',
                    opacity: 0
                },
                {
                    layer: 'routes',
                    opacity: 0
                },
                {
                    layer: 'route-highlight',
                    opacity: 0
                },
                {
                    layer: 'route-far',
                    opacity: 0
                },
                {
                    layer: 'route-far-text1',
                    opacity: 0
                },
                {
                    layer: 'route-far-text2',
                    opacity: 0
                },
                //enable next set
                {
                    layer: 'short-pantries',
                    opacity: 1
                },
                {
                    layer: 'short-pantries-text',
                    opacity: 1
                },
                {
                    layer: 'short-farms',
                    opacity: 1
                },
                {
                    layer: 'short-farms-text',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
        },
        {
            id: 'Kingston5',
            alignment: 'right',
            title: 'Short Chain - Travel Distance',
            image: '',
            description: 'A primary orchard that sells its produce at Kingston Farmers market is Maynard farms, an 8 mile drive away. Maynard farms is one of thousands of small or mid-sized hudson valley farms whose produce are left out of larger supply chains because of their lack of access to large distributors, resulting in these “short chains” that are made through direct community links as an alternative infrastructure. The result of a food system running at peak market efficiency for consolidated actors is grocery stores stocked with products not from the incredible agricultural wealth they are surrounded by, the pricing of which makes them unaffordable to over 10% of the population. ',
            location: {
                center: [-74.013074, 41.933151],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                //disable  last set
                {
                    layer: 'short-pantries',
                    opacity: 0
                },
                {
                    layer: 'short-pantries-text',
                    opacity: 0
                },
                {
                    layer: 'short-farms',
                    opacity: 0
                },
                {
                    layer: 'short-farms-text',
                    opacity: 0
                },
                {
                    layer: 'kingston-farmers-market',
                    opacity: 1
                },                      
                {
                    layer: 'kingston-farmers-market-text',
                    opacity: 1
                },
                { 
                    layer: 'maynard-farm',
                    opacity: 1
                },
                {
                    layer: 'maynard-farm-text',
                    opacity: 1
                },
                {
                    layer: 'route-farm-market',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
        }
    ]
};
