export default {
    searchQuery: '',
    page: 1,
    fetchImage(){
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=16253629-1b53dd346b59703300910ca9d`
        const options = {
            headers: {
                Accept: 'application/json'
            }
        }
        return fetch(url, options).then(response => response.json().then(({ hits }) => {
            
            this.page += 1 
            return hits})
        )
    },
    resetPage(){
        this.page = 1;
    },
    get query(){
        return this.searchQuery;
    },
    set query(value){
        this.searchQuery = value;
    },
    
}


// 