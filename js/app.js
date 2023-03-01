var shop = [
    {
        title: 'Dog Treats',
        image: './images/dogtreats.png',
        description: 'Crunchy and Delicious',
        price: 'Sale: $1'
    },
    {
        title: 'Dog Harness',
        image: './images/dogharness.png',
        description: 'Secure and Strong',
        price: 'Sale: $3'
    },
    {
        title: 'Cat Bed',
        image: './images/catbed.png',
        description: 'Soft and Comfortable',
        price: 'Sale: $5'
    },
    {
        title: 'Mouse Toy',
        image: './images/petStorePictures/catmousetoy.png',
        description: 'Squishy and Lifelike',
        price: 'Sale: $2'
    },
    {
        title: 'Food Bowl',
        image: './images/petStorePictures/dogbowl.png',
        description: 'Stainless Steel and Cooling',
        price: 'Sale: $4'
    },
    {
        title: 'Bird House',
        image: './images/petStorePictures/birdhouse.png',
        description: 'Built to Last',
        price: 'Sale: $6'
    },
    // {
    //     title: 'Dog Crate',
    //     image: './images/petStorePictures/dogcrate.png',
    //     description: 'Light and Sturdy',
    //     price: 'Buy Now: $49'
    // },
    // {
    //     title: 'Dog Poop Bags',
    //     image: './images/petStorePictures/dogpoopbag.png',
    //     description: 'Great Quality and Scented',
    //     price: 'Buy Now: $4'
    // },
    // {
    //     title: 'Cat Food',
    //     image: './images/petStorePictures/catfood.png',
    //     description: 'Fresh and Delicious',
    //     price: 'Buy Now: $24'
    // },
    // {
    //     title: 'Cat Collar',
    //     image: './images/petStorePictures/catcollar.png',
    //     description: 'Pink and Jingles',
    //     price: 'Buy Now: $14'
    // },
    // {
    //     title: 'Cat Toy',
    //     image: './images/petStorePictures/cattoy.png',
    //     description: 'Hours of Fun',
    //     price: 'Buy Now: $9'
    // },
    // {
    //     title: 'Cat Tower',
    //     image: './images/petStorePictures/cattower.png',
    //     description: 'Multi-Level Sturdy Perch',
    //     price: 'Buy Now: $59'
    // },
    // {
    //     title: 'Cat Litter',
    //     image: './images/petStorePictures/catlitter.png',
    //     description: 'Odor-Blocking and Affordable',
    //     price: 'Buy Now: $19'
    // },
    // {
    //     title: 'Bird Food',
    //     image: './images/petStorePictures/birdfood.png',
    //     description: 'Healthy and Hearty',
    //     price: 'Buy Now: $39'
    // },
    // {
    //     title: 'Bird Cage',
    //     image: './images/petStorePictures/birdcage.png',
    //     description: 'Beautiful and Secure',
    //     price: 'Buy Now: $79'
    // },
]

var postHTML = ""

for (var i=0; i < shop.length ; i++){
    var container = '<div class="containersale backgroundclrsale"><div class="cardsale"><div class="boxsale">'
    var heading = '<div class="contentsale"><h3>' + shop[i].title + '</h3>'
    var image = '<p><img class="productimg" src="' + shop[i].image + '"></p>'
    var description = '<p>'+ shop[i].description + '</p>'
    var price = '<a href="#">' + shop[i].price + '</a></div></div></div></div>'
    var concatThis = container + heading + image + description + price;
    postHTML = postHTML + concatThis
}
document.getElementById('shop').innerHTML = postHTML

