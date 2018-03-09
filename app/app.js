$(document).ready(function () {

//------------Creates initial product listing
    var bollocks = document.querySelector('#products');

    function populateProducts(array) {
        var productData = array.map(item => {
            return `<div class="product-item-wrapper">
                        <a href="${item.url}">
                            <img class="item-image" src="${item.Images[0].url_170x135}" />
                            <div class="product-name">${item.title}</div>
                            <div class="product-maker">${item.Shop.shop_name}</div>
                            <div class="product-rating">
                                <span class="rating">
                                    <input type="radio" class="rating-input"
                                        id="rating-input-1-5" name="rating-input-1">
                                    <label for="rating-input-1-5" class="rating-star"></label>
                                    <input type="radio" class="rating-input"
                                        id="rating-input-1-4" name="rating-input-1">
                                    <label for="rating-input-1-4" class="rating-star"></label>
                                    <input type="radio" class="rating-input"
                                        id="rating-input-1-3" name="rating-input-1">
                                    <label for="rating-input-1-3" class="rating-star"></label>
                                    <input type="radio" class="rating-input"
                                        id="rating-input-1-2" name="rating-input-1">
                                    <label for="rating-input-1-2" class="rating-star"></label>
                                    <input type="radio" class="rating-input"
                                        id="rating-input-1-1" name="rating-input-1">
                                    <label for="rating-input-1-1" class="rating-star"></label>
                                </span>
                                <span class="favorers">(${item.num_favorers})</span>
                            </div>
                            <div class="product-price">$${item.price}<span class="ship-info"></span></div>
                        </a>
                    </div>`
        }).forEach(item => bollocks.innerHTML += item);
        
    }

// -------------Header Search bar functionality

    // document.querySelector('#header-search').addEventListener("onsubmit", alert(searchTerm));
    
    $('#header-search').submit(function(e) {
        e.preventDefault();
        $('.product-item-wrapper').empty();
        var searchTerm = document.querySelector('#search-field').value;
        // alert(searchTerm);
        $('#header-search')[0].reset();
        search(searchTerm);
    })

    var search = function(searchTerm) {
        var searchData = items.results.filter(item => {
            if (item.title.indexOf(searchTerm) > -1) {
                return item;
            }
        })
        populateProducts(searchData)
    }


populateProducts(items.results);

});

