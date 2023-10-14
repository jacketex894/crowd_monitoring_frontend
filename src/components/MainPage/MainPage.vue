<template>
    <div class="video">
        <input v-model='youtubeUrl' 
        placeholder = '請輸入想辨識的youtube影片網址'
        @keydown.enter="setYoutubeUrl(youtubeUrl)"
        class = 'youtubeUrlInput'>
        <img :src="streamImage"  alt="Image" />
    </div>
    <div class = 'number'>
        <p class="detect">偵測人數:{{detectNumber}}</p>
    </div>
</template>
<script>

import {MainPageApi} from '@/components/MainPage/MainPageApi'
import io from 'socket.io-client';

export default {
    name:'MainPage',
    data(){
        return{
            detectNumber:'0',
            youtubeUrl:null,
            streamImage: '',
        };
    },
    methods:{

        /*
        輸入:想要辨識的YT影片網址
        輸出:無
        處理:透過正規表達式先確認是否符合所需的影片網址格式，在傳送至後台開始讀取影片
        */ 
        setYoutubeUrl(youtubeUrl){
            let regex = /^https:\/\/www\.youtube\.com\/watch\?v=/;
            if (regex.test(youtubeUrl)) {
                let regex2 = /list/;
                if (regex2.test(youtubeUrl))
                    alert('請勿輸入影片列表')
                else{
                    MainPageApi.setYoutubeUrl(youtubeUrl)
                }
            }
            else{
                alert('請輸入正確的youtube網址');
            }
        }, 
    },
    async mounted(){
        
        //設定對應的ip跟port
        let socket = io.connect('http://' + '127.0.0.1' + ':' + '15383');
        let that = this;

        //設定聽emit更新圖片
        socket.on('receive_image', function (imageData) {
            that.streamImage = 'data:image/jpeg;base64,'+ imageData;
        })

        //設定聽emit更新
        socket.on('receive_detect_number',function(detectNumber){
            that.detectNumber = detectNumber;
        })
    },
}
</script>
<style>
.video{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.detect{
  position: relative;
  font-size: large;
  color: rgb(21, 249, 40);
}
.youtubeUrlInput{
  position: absolute;
  left:1vw;
  top:1vh;
}
.number{
  position: absolute;
  left:2vw;
  top:5vh;
  height: 5vh;
  width: 7vw;
  background-color: rgba(240, 248, 255, 0.226); 
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>