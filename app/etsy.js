var api_key = 'avsf5ap11hd1crffrchy5xmt';
var bollocks = document.querySelector('#products');
var relatedTagsContainer = document.querySelector('#related-tags-container');
var resultsBar = document.querySelector('#results');
var relatedItems = document.querySelector('#related-items');
var guidedSearch = document.querySelector('#guided-search');
var welcomeScreen = document.querySelector('#welcome-screen');



(function($){

    $(document).ready(function(){
        var welcomePage = function() {
            welcomeScreen.innerHTML = `<div class="welcome-message">Welcome to Et-C, Search for anything</div>`
        }()
        //search for whatever, it works
        $('#header-search').bind('submit', function() {
            var api_key = 'avsf5ap11hd1crffrchy5xmt';
            terms = $('#search-field').val();
            etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms+"&limit=24&includes=Images:1&api_key="+api_key;

            // $('#products').empty();
            $('#welcome-screen').empty();
            $('#guided-search').empty();
            $('#related-items').empty();
            $('<p></p>').text('Searching for '+terms).appendTo('#products');

            $.ajax({
                url: etsyURL,
                dataType: 'jsonp',
                success: function(data) {
                    if (data.ok) {
                        $('#products').empty();
                        if (data.count > 0) {
                            $.each(data.results, function(i,item) {
                                bollocks.innerHTML += 
                                `<div class="product-item-wrapper">
                                    <a href="${item.url}" class="image-tag">
                                        <img class="item-image" src="${item.Images[0].url_170x135}" />
                                        <div class="product-name">${item.title}</div>
                                        <div class="product-maker">${item.shop_name}</div>
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
                                resultsBar.innerHTML = `"${item.category_path[0]}" (${data.count}) results`;
                                var selectedTags = item.tags.filter(tag => {
                                    if (tag.indexOf(terms) > -1) {
                                        return true
                                    } else {
                                        return false
                                    }
                                })
                                selectedTags.forEach(elem => {
                                    var dropped = document.querySelector('#guided-search').getElementsByClassName('guided-search-button');
                                    relatedTagsContainer.innerHTML +=  `<div class="related-tag">
                                                                            <div>${elem}</div>
                                                                        </div>`
                                    if (dropped.length < 10) {
                                        guidedSearch.innerHTML += `<span class="guided-search-button">
                                        <a href="">${elem}</a>
                                        </span>`
                                    }                                   
                                })           
                                relatedItems.innerHTML = `Related to ${terms}`;  
                                welcomeScreen.innerHTML = `<div class="welcome-message-ad">Sponsored by <a href="https://www.jossendal.com">Jossendal Development</a></div`
                                                           
                            });
                        } else {
                            $('<p>No results.</p>').appendTo('#products');
                        }
                    } else {
                        $('#products').empty();
                        alert(data.error);
                    }
                }
            });

            return false;
        })
    });
    
})(jQuery);



// function performGetRequest1() {
//     var resultElement = document.getElementById('products');
//     resultElement.innerHTML = '';
    
//     axios.get('https://openapi.etsy.com/v2/shops/listings/active.js?api_key=' + apiKey)
//       .then(function (response) {
//         resultElement.innerHTML = generateSuccessHTMLOutput(response);
//       })
//       .catch(function (error) {
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//       });   
//   }

//   performGetRequest1();

//   function generateSuccessHTMLOutput(response) {
//     return  '<h4>Result</h4>' + 
//             '<h5>Status:</h5> ' + 
//             '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
//             '<h5>Headers:</h5>' + 
//             '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
//             '<h5>Data:</h5>' + 
//             '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
//   }
//   function generateErrorHTMLOutput(error) {
//     return  '<h4>Result</h4>' + 
//             '<h5>Message:</h5> ' + 
//             '<pre>' + error.message + '</pre>' +
//             '<h5>Status:</h5> ' + 
//             '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
//             '<h5>Headers:</h5>' + 
//             '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
//             '<h5>Data:</h5>' + 
//             '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
//   }

//   function performGetRequest2() {
//     var resultElement = document.getElementById('getResult2');
//     var todoId = document.getElementById('todoId').value;
//     resultElement.innerHTML = '';
    
//     axios.get('http://jsonplaceholder.typicode.com/todos', {
//       params: {
//         id: todoId
//       }
//     })
//     .then(function (response) {
//       console.log(response);
//       resultElement.innerHTML = generateSuccessHTMLOutput(response);
//     })
//     .catch(function (error) {
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//     });
//   }

//   document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);
// function performPostRequest(e) {
//   var resultElement = document.getElementById('postResult');
//   var todoTitle = document.getElementById('todoTitle').value;
//   resultElement.innerHTML = '';
  
//   axios.post('http://jsonplaceholder.typicode.com/todos', {
//     userId: '1',
//     title: todoTitle,
//     completed: false
//   })
//   .then(function (response) {
//     resultElement.innerHTML = generateSuccessHTMLOutput(response);
//   })
//   .catch(function (error) {
//     resultElement.innerHTML = generateErrorHTMLOutput(error);
//   });
  
//   e.preventDefault();
// }