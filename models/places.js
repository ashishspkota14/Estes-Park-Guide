class Places {
constructor(
id, 
categoryIds, 
title,
googleRating,
imageUrl,
imageUrl1,
imageUrl2,
imageUrl3, 
restrooms, 
generalDetails, 
whatIsHere,
address, 
website,
phoneNumber,
latitude,
longitude,
googleRatingFilter,
parkingFilter,
restroomFilter
){
    this.id =id;
    this.categoryIds = categoryIds;
    this.title =title;
    this.googleRating=googleRating;
    this.imageUrl=imageUrl;
    this.imageUrl1=imageUrl1;
    this.imageUrl2=imageUrl2;
    this.imageUrl3=imageUrl3;
    this.restrooms = restrooms;
    this.generalDetails = generalDetails;
    this.whatIsHere=whatIsHere;
    this.address = address;
    this.website=website;
    this.phoneNumber=phoneNumber;
    this.latitude=latitude;
    this.longitude=longitude;
    this.googleRatingFilter= googleRatingFilter;
    this.parkingFilter= parkingFilter;
    this.restroomFilter= restroomFilter;
}
}
export default Places;