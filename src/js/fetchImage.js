function fetchImage(inputValue){
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=1&per_page=12&key=16253629-1b53dd346b59703300910ca9d`
    const options = {
        headers: {
            Accept: 'application/json'
        }
    }
    return fetch(url, options).then(response => response.json())
}

export default fetchImage