!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=a(r),u=n(3),i=a(u),l={};l.playList={songs:["firework","dawn","pawinpaw"],currentIndex:0},l.getCurrentLoadedSong=function(){return l.playList.songs[l.playList.currentIndex]},l.load=function(){var e=l.extractSongObj(),t=e.url;o.default.load(t)},l.play=function(){l.load(),o.default.on("ready",function(){o.default.play()})},l.next=function(){l.playList.currentIndex++,l.playList.currentIndex==l.playList.songs.length&&(l.playList.currentIndex=0),l.play()},l.back=function(){l.playList.currentIndex--,l.playList.currentIndex<0&&(l.playList.currentIndex=l.playList.songs.length-1),l.play()},l.toggle=function(){o.default.playPause()},l.extractSongObj=function(){var e=l.getCurrentLoadedSong();return i.default[e]},t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=WaveSurfer.create({container:".wave",waveColor:"white",progressColor:"green",height:70,barHeight:.5,barWidth:1,cursorWidth:2,cursorColor:"#464d50",hideScrollbar:!0});o.on("finish",function(){r.default.next()}),t.default=o},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=n(1),i=a(u),l=document.querySelector("#play"),c=document.querySelector("#previous"),s=document.querySelector("#next"),d=document.querySelector(".track-name"),f=document.querySelector(".album-name"),p=document.querySelector(".track-length"),y=document.querySelector(".track-image"),g=document.querySelector(".songs-container"),m=document.querySelector(".countdown"),L={playerButtonIsPused:function(){l.classList.remove("fa-play"),l.classList.add("fa-pause")},playerButtonIsPlay:function(){l.classList.remove("fa-pause"),l.classList.add("fa-play")},updatePlayList:function(){L.clearPlayList();var e=o.default.extractSongObj();L.updateTrackInfo(e),document.querySelector("[data-song-key="+e.key+"]").parentNode.id="is-playing"},songIsLoading:function(){var e=o.default.getCurrentLoadedSong();document.querySelector("[data-song-key="+e+"]").classList.add("fa-circle-o-notch","fa-spin")},songIsNotLoading:function(){var e=o.default.getCurrentLoadedSong();document.querySelector("[data-song-key="+e+"]").classList.remove("fa-circle-o-notch","fa-spin")},clearPlayList:function(){document.getElementById("is-playing")&&(document.getElementById("is-playing").id="")},updateTrackInfo:function(e){d.textContent=e.name,f.textContent=e.album,p.textContent=e.length,y.setAttribute("src",e.picture)},updateTrackDuration:function(){var e=parseInt(i.default.getCurrentTime()),t=(parseInt(i.default.getDuration()),e%60),n=parseInt(e/60);t=t>10?t:"0"+t;var a=n+":"+t;m.textContent=a,setTimeout(L.updateTrackDuration,1e3)}};c.addEventListener("click",function(){o.default.back()}),s.addEventListener("click",function(){o.default.next()}),l.addEventListener("click",function(){o.default.toggle()}),g.addEventListener("click",function(e){var t=e.target;if("BUTTON"==t.nodeName){var n=t.getAttribute("data-song-key");o.default.playList.currentIndex===o.default.playList.songs.indexOf(n)&&i.default.isPlaying()?i.default.pause():(o.default.playList.currentIndex=o.default.playList.songs.indexOf(n),o.default.play())}}),i.default.on("play",function(){L.playerButtonIsPused(),L.updatePlayList(),L.updateTrackDuration()}),i.default.on("pause",function(){L.playerButtonIsPlay(),L.clearPlayList()}),i.default.on("loading",function(){L.songIsLoading()}),i.default.on("ready",function(){L.songIsNotLoading()}),t.default=L},function(e,t){e.exports={firework:{name:"Firework",album:"Anatomy of the bear",length:"1:20",url:"https://s3-us-west-1.amazonaws.com/music-noirdoor/Fireworks.mp3",picture:"/images/firework.jpg",key:"firework"},dawn:{name:"Dawn",album:"Awakening",length:"1:16",url:"https://s3-us-west-1.amazonaws.com/music-noirdoor/+Dawn.mp3",picture:"/images/dawn.jpg",key:"dawn"},pawinpaw:{name:"Paw in Paw",album:"Anatomy of the bear",length:"1:36",url:"https://s3-us-west-1.amazonaws.com/music-noirdoor/Paw+In+Paw.mp3",picture:"/images/pawinpaw.jpg",key:"pawinpaw"}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(0),o=a(r),u=n(2);a(u);o.default.load("")}]);