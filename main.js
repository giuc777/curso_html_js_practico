const menuEmail = document.querySelector('.navbar-email');
const EmailOption = document.querySelector('.desktop-menu');
const menuHam = document.querySelector(' .menu-Ham');
const Menumobile = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer = document.querySelector('#shoppingCardContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktotop);
menuHam.addEventListener('click', toggleMobile);
menuCarrito.addEventListener('click', toggleCarritoAside);


function toggleDesktotop(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    EmailOption.classList.toggle('inactive');
}

function toggleMobile(){

    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    
    Menumobile.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = Menumobile.classList.contains('inactive');

    if (!isMobileMenuClosed){
        Menumobile.classList.add('inactive');
    }
    shoppingCardContainer.classList.toggle('inactive');
} 

const product_list =[];
product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Pantalla',
    price: 340,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Computer',
    price: 1122,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Table',
    price: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Pantalla',
    price: 340,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Computer',
    price: 1122,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

product_list.push({
    name: 'Table',
    price: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProduct(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const producInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
    
        producInfoDiv.append(productPrice, productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.append(producInfoDiv, productInfoFigure);
        productCard.append(ProductImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProduct(product_list);