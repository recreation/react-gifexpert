

export const getGifs = async( category ) => {
    const urlFinal = `http://api.giphy.com/v1/gifs/search?api_key=h3EhWWII5vCdpTZq7dRXa0y5DVKVipfU&q= ${ encodeURI(category) } limit=10`;
    const resp = await fetch (urlFinal);

    const { data } = await resp.json();

    //console.log("data", data);

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    //console.log("gifs", gifs);
    return gifs;

    
}