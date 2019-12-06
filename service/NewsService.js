import axios from 'axios'
const key = '5f66f477c3234e9cb82bbcaf8076ba0e'
const url = 'https://newsapi.org/v2/top-headlines?country=fr&category=business';

class NewsService{

    getLastNewsbyCategoryAndCountry(category="business", country="fr"){

       const instance = axios.create({
            baseURL: url,
            headers: {'X-Api-Key': key}
          });


        // GET request for remote image
        return instance.get().then(resp=>{
            //console.log (resp.data)
            return resp.data
        });
    }
}

export default NewsService;