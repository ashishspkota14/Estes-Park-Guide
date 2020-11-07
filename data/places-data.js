import Places from '../models/places';

export const PLACES =[
    // Restaurants
        new Places(
         'p1',
         'c3',
         "Nepal's Cafe",
         '4.3 ✪',
         'https://media-cdn.tripadvisor.com/media/photo-s/01/2d/c5/e5/estes-park.jpg',
         'https://s3-media4.fl.yelpcdn.com/bphoto/uOxj4Xn27X6NkYFH7CDrAg/l.jpg',
         'https://s3-media1.fl.yelpcdn.com/bphoto/GI3LZWlkH6uvxM-yzL8AsQ/348s.jpg',
         'https://zagat-photos.imgix.net/ChIJQ9rDdO1laYcRuwzDnYH0lZo/d4ad8ee49a4667d21e5e098a98bfabbb.jpg',
         "Yes",
         [
         "Nepal's Cafe",
         'Google Rating - 4.3 ✪',
         'Restrooms - Yes',
         '184 E Elkhorn Ave, Estes Park, CO 80517'
         ],
         'Serves meat, vegan options available. Nepali restaurant offering some vegetarian entrees for main courses, plus standard Indian appetizers like naan, samosa, and pakora. Vegans to inquire about dairy use.On the River Walk.',
         '184 E Elkhorn Ave, Estes Park, CO 80517',
         "https://www.facebook.com/pages/Nepals-Cafe/166103146809347?utm_source=tripadvisor&utm_medium=referral",
         +1970577703,
         40.3762,
         -105.5218,
         true, //googleRating
         true, // Parking
         true  // Restroom
       ),
       new Places(
           'p2',
           'c3',
            'Cafe De Pho Thai',
            '4.1 ✪',
            'https://www.estesparkinformation.com/wp-content/uploads/cafe-de-pho-thai.jpg',
            'https://zagat-photos.imgix.net/ChIJ-YtEw-xlaYcROnryDbotPpY/4408e8e4dce6680c1c9a6dc193d22bb3.jpg?fit=crop&crop=center&max-w=384&max-h=384&auto=format',
            'https://media-cdn.tripadvisor.com/media/photo-s/0f/99/b5/9e/thai-salad-with-chicken.jpg',
            'https://image.arrivalguides.com/x/12/df1ccce8eae4da2ede067730e2a7d997.jpg',
            'Yes',
            ['general'],
            'what is here',
            '225 W Riverside Dr, Estes Park, CO 80517',
            'https://cafedephothai.squarespace.com/',
            +19705770682,
            40.3744,
            -105.5231,
            true,
            true,
            true
       ),
       new Places(
           'p3',
           'c3',
           'Thai Kitchen',
           '3.9 ✪',
           'https://s3-media3.fl.yelpcdn.com/bphoto/ceZPz-VurIgvc6CPW6Huuw/l.jpg',
           'https://media-cdn.tripadvisor.com/media/photo-s/10/d1/07/14/img-20170929-131356-largejpg.jpg',
           'https://cdn.usarestaurants.info/assets/uploads/4f13b99972c031246d19d23e08462a9e_-united-states-colorado-larimer-county-estes-park-thai-kitchen-970-577-7112htm.jpg',
           'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbXrlS_Eli7-cZcRVItFwqtptOP3zBGx6Um0BZ7skM0AKu7lfU',
           'Yes',
           ['general'],
         
            'what is here' ,
           '401 S St Vrain Ave, Estes Park, CO 80517',
           'https://www.thaikitchenorderonline.com/',
           +19705777112,
           40.3720,
           -105.5070,
           false,
           true,
           true

       ),
       new Places(
           'p4',
           'c3',
           'China Garden',
           '3.5 ✪',
           'https://media-cdn.tripadvisor.com/media/photo-s/08/45/cd/03/china-garden-asian-grill.jpg',
           'https://s3-media0.fl.yelpcdn.com/bphoto/tgEkvDmWwQRHOdIXsAfFmg/348s.jpg',
           'https://media-cdn.tripadvisor.com/media/photo-s/08/45/cc/8e/china-garden-asian-grill.jpg',
           'https://www.chinagardenestespark.com/wp-content/uploads/2019/05/2019-05-07-18.42.59-1024x768.jpg',
           'Yes',
           ['general'],
            'what is here' ,
           '460 W Riverside Dr, Estes Park, CO 80517',
           'http://www.chinagardenestespark.com/',
           +19705862488,
           40.3718,
           -105.5233,
           false,
           true,
           true
       ),

       // Hotels 
       new Places (
       'p5',
       'c4',
       'Discovery Lodge',
       '4.1 ✪',
       'https://r-cf.bstatic.com/images/hotel/max1024x768/126/126142601.jpg',
       'https://media-cdn.tripadvisor.com/media/photo-s/0d/ae/a5/25/very-colorado.jpg',
       'https://content.r9cdn.net/rimg/himg/22/71/1f/arbisoftimages-661894-a99797ab61c14f04a13613746ac910d1-image.jpg?height=500&crop=true&caller=HotelDetailsPhoto',
       'https://content.r9cdn.net/rimg/himg/22/71/1f/arbisoftimages-661894-cf689e9c01e94c95bbb09fd80e570aee-image.jpg?width=568&height=350&crop=true&caller=HotelDetailsPhoto',
       'Yes',
       ['general'],
          'what is here' ,
       ' 800 Big Thompson Ave, Estes Park, CO 80517',
       'https://www.estesdiscoverylodge.com/',
       +19705863336,
       40.3808,
       -105.5109,
       true,
       true,
       true
       )
];
  
