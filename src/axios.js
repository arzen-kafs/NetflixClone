import axios from 'axios';
//base url to make the request to the movie database

const instance =axios.create(
    {
    /*This is the base url that will be concatinated later and create in an inbuilt function of axios*/
    baseURL:"https://api.themoviedb.org/3",
}
)
export default instance;
