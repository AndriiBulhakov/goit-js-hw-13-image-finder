export const markupCreationForm = item => {
    const createForm = document.createElement('form')
    createForm.classList.add('search-form')
    createForm.setAttribute('id', 'search-form')

    const createInput = document.createElement('input')
    createInput.setAttribute('type', 'text')
    createInput.setAttribute('name', 'query')
    createInput.setAttribute('autocomplete', 'off')
    createInput.setAttribute('placeholder', 'Search images...')

    createForm.appendChild(createInput)
    return createForm
}


export const markupCreationUl = item => {
    const createUl = document.createElement('ul')
    createUl.classList.add('gallery')
    return createUl
}

export const markupCreationButton = item => {
    const createButton = document.createElement('button')
    createButton.classList.add('load-more__btn')
    createButton.classList.add('is-hidden')
    createButton.setAttribute('type', 'button')
    createButton.setAttribute('data-action', 'load-more')
    createButton.textContent = 'Load more'
    return createButton
}

 