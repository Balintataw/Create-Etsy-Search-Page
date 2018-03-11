$(document).ready(function () {

    var bollocks = document.querySelector('#products');
    var welcomeScreen = document.querySelector('#welcome-screen');
    var resultsBar = document.querySelector('#results');
    var relatedItems = document.querySelector('#related-items');
    var relatedTagsContainer = document.querySelector('#related-tags-container');
    var imageTags = document.getElementsByClassName('.image-tag');

    //sort section
    $(".sort-by-container").change(function(){
            var option = $( ".sort-by-container option:selected" ).text();
        if (option === 'price highest') {
            sortByHighest(".product-price")
        } else if (option === 'price lowest') {
            sortByLowest(".product-price")
        } else if (option === 'relevance') {
            alert('How do I calculate for relevance?')
        } else if (option === 'newest') {
            alert('Sorts by lowest original_creation_tsz')
            sortByNewest(".creation-date")
        }

        //sort by lowest function
        function sortByLowest(sortTerm) {
            var productsToBeSorted = document.querySelectorAll(sortTerm)
            var sortedArray = Array.from(productsToBeSorted).sort((a, b) => {
                a = Number(a.innerText.replace(/(^\$|,)/g,''));
                b = Number(b.innerText.replace(/(^\$|,)/g,''));
                return a - b 
            })
            $('#products').empty();
            sortedArray.forEach(item => {
                var pushThis = item.parentNode.parentNode
                bollocks.appendChild(pushThis)
            })
        }

        // sort by highest function
        function sortByHighest(sortTerm) {
            var productsToBeSorted = document.querySelectorAll(sortTerm)
            var sortedArray = Array.from(productsToBeSorted).sort((a, b) => {
                a = Number(a.innerText.replace(/(^\$|,)/g,''));
                b = Number(b.innerText.replace(/(^\$|,)/g,''));
                return b - a 
            })
            $('#products').empty();
            sortedArray.forEach(item => {
                var pushThis = item.parentNode.parentNode
                bollocks.appendChild(pushThis)
            })
        }

        //sort by newest
        function sortByNewest(sortTerm) {
            var productsToBeSorted = document.querySelectorAll(sortTerm)
            var sortedArray = Array.from(productsToBeSorted).sort((a, b) => {
                a = Number(a.innerText.replace(/(^\$|,)/g,''));
                b = Number(b.innerText.replace(/(^\$|,)/g,''));
                return a - b 
            })
            $('#products').empty();
            sortedArray.forEach(item => {
                var pushThis = item.parentNode.parentNode
                bollocks.appendChild(pushThis)
            })
        }
    });
});




