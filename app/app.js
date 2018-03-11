$(document).ready(function () {

//------------Creates initial product listing
    var bollocks = document.querySelector('#products');
    var welcomeScreen = document.querySelector('#welcome-screen');
    // var searchTerm = document.querySelector('#search-field').value.toLowerCase();
    var resultsBar = document.querySelector('#results');
    var relatedItems = document.querySelector('#related-items');
    var relatedTagsContainer = document.querySelector('#related-tags-container');
    var imageTags = document.getElementsByClassName('.image-tag');
    

    // function populateProducts(array, searchTerm) {
    //     var productData = array.map(item => {
    //         return `<div class="product-item-wrapper">
    //                     <a href="${item.url}" class="image-tag">
    //                         <img class="item-image" src="${item.Images[0].url_170x135}" />
    //                         <div class="product-name">${item.title}</div>
    //                         <div class="product-maker">${item.Shop.shop_name}</div>
    //                         <div class="product-rating">
    //                             <span class="rating">
    //                                 <input type="radio" class="rating-input"
    //                                     id="rating-input-1-5" name="rating-input-1">
    //                                 <label for="rating-input-1-5" class="rating-star"></label>
    //                                 <input type="radio" class="rating-input"
    //                                     id="rating-input-1-4" name="rating-input-1">
    //                                 <label for="rating-input-1-4" class="rating-star"></label>
    //                                 <input type="radio" class="rating-input"
    //                                     id="rating-input-1-3" name="rating-input-1">
    //                                 <label for="rating-input-1-3" class="rating-star"></label>
    //                                 <input type="radio" class="rating-input"
    //                                     id="rating-input-1-2" name="rating-input-1">
    //                                 <label for="rating-input-1-2" class="rating-star"></label>
    //                                 <input type="radio" class="rating-input"
    //                                     id="rating-input-1-1" name="rating-input-1">
    //                                 <label for="rating-input-1-1" class="rating-star"></label>
    //                             </span>
    //                             <span class="favorers">(${item.num_favorers})</span>
    //                         </div>
    //                         <div class="product-price">$${item.price}<span class="ship-info"></span></div>
    //                     </a>
    //                 </div>`
    //             });
    //             productData.forEach(item => bollocks.innerHTML += item);
    //             resultsBar.innerHTML = `"${searchTerm}" (${productData.length}) results`;
    //             relatedItems.innerHTML = `Related to ${searchTerm}`;
    //     }

    // populateProducts(items.results);

    // recently viewed function

        // $('.product-item-wrapper').each(function() {
            $('.guided-search-button').each(function() {
            var item = this;
            item.addEventListener("click", function() {
                event.preventDefault();
                $(this).appendTo('.recently-viewed-container');
            })
        })
    
    //sort by function
    var sortBy = function() {
        $("#id").html($("#id option").sort(function (a, b) {
            return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
        }))
    }

});




