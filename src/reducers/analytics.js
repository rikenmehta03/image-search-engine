// const initialState = {
//     id: '',
//     url: '',
//     objects: [],
//     googleVisionResults: undefined
// }

const initialState = {
    id: 'd941a0c7-98a3-4117-b4ab-60842f17c61f',
    url: 'https://c6.staticflickr.com/3/2751/5819696581_d321af3bb7_o.jpg',
    objects: [
        {
            index: 14977,
            label: 0,
            name: 'person',
            box: [
                610,
                126,
                1556,
                1067
            ]
        }
    ],
    googleVisionResults: {
        best_guess_labels: [
            {
                label: 'baseball player',
                language_code: ''
            }
        ],
        full_matching_images: [
            {
                url: 'https://farm3.staticflickr.com/2751/5819696581_d321af3bb7_o.jpg'
            },
            {
                url: 'https://live.staticflickr.com/2751/5819696581_36b92fc553_b.jpg'
            },
            {
                url: 'https://farm3.staticflickr.com/2751/5819696581_36b92fc553.jpg'
            }
        ],
        pages_with_matching_images: [
            {
                full_matching_images: [
                    {
                        url: 'https://farm3.staticflickr.com/2751/5819696581_36b92fc553.jpg'
                    }
                ],
                page_title: 'A-z <b>Baseball</b> Allstar Game by Abe Henkel - Haiku Deck',
                partial_matching_images: [],
                url: 'https://www.haikudeck.com/a-z-baseball-allstar-game-education-presentation-SvQsg4xXxH'
            },
            {
                full_matching_images: [
                    {
                        url: 'https://farm3.staticflickr.com/2751/5819696581_36b92fc553.jpg'
                    },
                    {
                        url: 'https://farm3.staticflickr.com/2751/5819696581_d321af3bb7_o.jpg'
                    }
                ],
                page_title: 'What I Love Love Love Is <b>Baseball</b> by Connor Mcgown - Haiku Deck',
                partial_matching_images: [],
                url: 'https://www.haikudeck.com/what-i-love-love-love-is-baseball-education-presentation-GpCs8GRtRJ'
            },
            {
                full_matching_images: [
                    {
                        url: 'https://live.staticflickr.com/2751/5819696581_36b92fc553_b.jpg'
                    }
                ],
                page_title: 'bunt | Paul L Dineen | Flickr',
                partial_matching_images: [],
                url: 'https://www.flickr.com/photos/pauldineen/5819696581'
            }
        ],
        partial_matching_images: [],
        visually_similar_images: [
            {
                url: 'http://calsummerball.com/wp-content/uploads/2019/07/Featured-Image322-610x371.jpg'
            },
            {
                url: 'https://img.washingtonpost.com/rf/image_480w/2010-2019/WashingtonPost/2013/07/15/Production/Daily/Sports/Images/Chase_Lambin_Fielding_2.jpg?uuid=oL9FauziEeK-07m2_iZIcQ'
            },
            {
                url: 'http://thumbor-prod-us-east-1.photo.aws.arc.pub/zOzytuvcYLxNHfMeHxASPJ3szoE=/arc-anglerfish-arc2-prod-advancelocal/public/72EINLSB4BG53JUGLI7KTIHTEQ.jpg'
            },
            {
                url: 'https://www.mlive.com/resizer/hCUIRpbsHrZwJy7YvJMLVpszIaE=/700x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/J5BK4CRMOFBEFIR4GJKIBBS2YE.JPG'
            },
            {
                url: 'https://thumbor.forbes.com/thumbor/711x558/https://blogs-images.forbes.com/robertkuenster/files/2018/09/CUB-DDD-170414-026--1200x943.jpg?width=960'
            },
            {
                url: 'https://i.pinimg.com/originals/44/fd/36/44fd36c14bf46791a3fd149f9d5f46a4.jpg'
            },
            {
                url: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB12CT4G.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=974&y=141'
            },
            {
                url: 'https://www.al.com/resizer/7NbInor8JqCRXaK7yxrDjzzU3RM=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/sports_impact/photo/22241664-standard.jpg'
            }
        ],
        web_entities: [
            {
                description: 'College baseball',
                entity_id: '/m/04xc_d'
            },
            {
                description: 'College softball',
                entity_id: '/m/05v_4b'
            },
            {
                description: 'Pitcher',
                entity_id: '/m/01z9v6'
            },
            {
                description: 'Catcher',
                entity_id: '/m/028c_8'
            },
            {
                description: 'Baseball',
                entity_id: '/m/018jz'
            },
            {
                description: 'Softball',
                entity_id: '/m/0kw94'
            },
            {
                description: 'Bunt',
                entity_id: '/m/01jt0l'
            },
            {
                description: 'Baseball field',
                entity_id: '/m/03v7tf'
            },
            {
                description: 'Ball',
                entity_id: '/m/018xm'
            },
            {
                description: '',
                entity_id: '/t/21vq7mhwrfsty'
            }
        ]
    }
}

const analytics = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ANALYTICS_QUERY':
            return {
                ...state,
                id: action.payload._id,
                url: action.payload.url,
                objects: action.payload.primary
            }
        case 'REQUEST_GOOGLE_VISION_RESULTS':
            return {
                ...state,
                googleVisionResults: undefined
            }
        case 'UPDATE_GOOGLE_VISION_RESULTS':
            return {
                ...state,
                googleVisionResults: action.payload
            }
        case 'REQUEST_IMSEARCH_RESULTS':
            return {
                ...state,
                imsearchResults: undefined
            }
        case 'UPDATE_IMSEARCH_RESULTS':
            return {
                ...state,
                imsearchResults: action.data
            }
        case 'CLEAR_ANALYTICS':
            return initialState
        default:
            return state
    }
}

export default analytics