import axios from "axios"
const APIkey = '36205936-cd8fb584a14544fbe3836796c'

export const getImages = async (query, page, perPage) => {
    const url = `https://pixabay.com/api/?key=${APIkey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    try {
        const {data} = await axios.get(url)
        return data
    } catch(e){
        console.error(e)
    }
}