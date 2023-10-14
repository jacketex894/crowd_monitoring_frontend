let urlPrefix = "http://127.0.0.1:15383/";
async function helloCheck(){
    let response = await fetch(urlPrefix+'hello',{
        method:'GET',
        mode:'cors',
        redirect:'follow',
        referrer:'no-referrer',
    }) 
    let data = response.json();
    return data;
}
async function setYoutubeUrl(youtubeUrl){
    return fetch(urlPrefix+'set_video_url',{
        method:'POST',
        mode:'cors',
        body:JSON.stringify(youtubeUrl),
        redirect:'follow',
        referrer:'no-referrer',
        headers:new Headers({
            'Content-Type':'application/json',
        })
    })
}

const MainPageApi = {
    helloCheck:helloCheck,
    setYoutubeUrl:setYoutubeUrl
}
export {MainPageApi}