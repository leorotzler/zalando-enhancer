console.log('content script 222')

const div = document.getElementsByClassName('z_wishlist_Heading__root')

if (div[0]) {
    const button = document.createElement('button'); // create new textarea
    button.innerHTML = "DELETE";
    div[0].parentNode.insertBefore(button, div[0].nextSibling);

    const wishlistCards = document.getElementsByClassName('z_wishlist_Card__root')

    button.addEventListener('click', event => {
        for (let item of wishlistCards) {
            const buttons = item.getElementsByTagName('button')
            buttons[0].click()
        }
        

    });

}