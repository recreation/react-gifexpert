const apiKey = 'h3EhWWII5vCdpTZq7dRXa0y5DVKVipfU';

const url = 'http://api.giphy.com/v1/gifs/random?api_key=';

const httpCall = fetch(`${url}${apiKey}`);

httpCall.then( resp => resp.json())
.then ( ({data} ) => {

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
//    console.log (data.images.original.url)
})
.catch(console.warn)