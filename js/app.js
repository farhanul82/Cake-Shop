// show cart

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })


})();



(function(){

const cartBtn = document.querySelectorAll('.store-item-icon');

cartBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
       
        if(event.target.parentElement.classList.contains('store-item-icon')){

            let fullPath = event.target.parentElement.previousElementSibling.src;

            let pos = fullPath.indexOf('img') + 3; //use the 3 to get rid of the 'img' string

            let partPath = fullPath.slice(pos);

            const item = {};

            item.img = `img-cart${partPath}`;

            let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

            item.name = name;

            let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

            let finalPrice = price.slice(1).trim();

            item.price = finalPrice;

            const cartItem = document.createElement('div');

            cartItem.classList.add('cart-item', 'd-flix', 'justify-content-between', 'text-capitalize', 'my-3');

            cartItem.innerHTML = `<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
              <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p><span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>`;



        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');

        cart.insertBefore(cartItem, total);
        alert('item added to the cart');

        showTotals();

        }
    });
});

// show totals
function showTotals(){

    const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
    
    const totalMoney = total.reduce(function(total, item){
        total += item;
        return total;
    },0);

    const finalMoney = totalMoney.toFixed(2);
    
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
}

})();






//Grab stores items from the DOM
let storeItems = document.querySelectorAll('.store-item');

let lightBox = document.querySelector('.lightbox-container');

let lightBoxItem = document.querySelector('.lightbox-item');

let images = document.querySelectorAll('.store-img');

let imageList = [];
let imageCounter = 0;
images.forEach(function (image) {

  imageList.push(image.src);
})

//Add an a click event listener to each store item
storeItems.forEach(function (item) {

  item.addEventListener('click', function (e) {
    let image = e.target.src;
    lightBoxItem.style.backgroundImage = `url(${image})`;
    lightBox.classList.add('show');

  });
});


//select left button from the DOM
let btnLeft = document.querySelector('.btnLeft');
btnLeft.addEventListener('click', function () {
  imageCounter--;
  if (imageCounter < 0) {
    imageCounter = imageList.length - 1;
  }
  lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
});
//select left button from the DOM
let btnRight = document.querySelector('.btnRight');
btnRight.addEventListener('click', function () {
  imageCounter++;
  if (imageCounter >= imageList.length) {
    imageCounter = 0;
  }
  lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
});

//wire up the modal's close button
let lightBoxClose = document.querySelector('.lightbox-close');
lightBoxClose.addEventListener('click', function () {
  lightBox.classList.remove('show');
});




// Search


(function(){



  const buttons = document.querySelectorAll('.btn')
  const storeItems = document.querySelectorAll('.store-item')

  buttons.forEach((button)=> {
      button.addEventListener('click', (e) => {
          e.preventDefault()
          const filter = e.target.dataset.filter
     
          
          storeItems.forEach((item)=> {
            console.log('vvvvvvv')
              if (filter === 'all'){
                  item.style.display = 'block'
              } else {
                  if (item.classList.contains(filter)){
                      item.style.display = 'block'
                  } else {
                      item.style.display = 'none'
                  }
              }
          })
      })
  })

})();

//wire up filter search box
(function(){

  const searchBox = document.querySelector('#search-item')
  const storeItems = document.querySelectorAll('.store-item')

  searchBox.addEventListener('keyup', (e) => {
  
      const searchFilter = e.target.value.toLowerCase().trim()
      //display only items that contain filter input

      storeItems.forEach((item) => {
          if (item.textContent.includes(searchFilter)){
              item.style.display = 'block'
          } else {
              item.style.display = 'none'
          }
      })
  })

})();