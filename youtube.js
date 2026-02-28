const videoData = [
      {
        id: 1,
        title: "Ekaki Chapter 1 : Presence | Ashish Chanchlani | ACV Studios",
        channel: "ashish chanchlani vines",
        views: "41M views",
        timePosted: "2 months ago",
        duration: "36:37",
        thumbnail: "youtube/1.png"
      },
      {
        id: 2,
        title: "Ekaki Chapter 2 : Arrival | Ashish Chanchlani | ACV Studios",
        channel: "ashish chanchlani vines",
        views: "29M views",
        timePosted: "2 months ago",
        duration: "44:37",
        thumbnail: "youtube/2.png"
      },
      {
        id: 3,
        title: "Ekaki Chapter 3 : Invasion | Ashish Chanchlani | ACV Studios",
        channel: "ashish chanchlani vines",
        views: "21M views",
        timePosted: "2 months ago",
        duration: "30:42",
        thumbnail: "youtube/3.png"
      },
      {
        id: 4,
        title: "Ekaki Chapter 4 : Skyfall | Ashish Chanchlani | ACV Studios",
        channel: "ashish chanchlani vines",
        views: "22M views",
        timePosted: "1 month ago",
        duration: "37:19",
        thumbnail: "youtube/4.png"
      }
    ];
function renderPlaylist(videos) {
    const container=document.getElementById('playlist');
    let htmlContent='';
    videos.forEach(video=>{
        htmlContent += `
        <div class="video-card">
        <div class="index">${video.id}</div>
        <div class="thumbnail-container">
            <img src="${video.thumbnail}" alt="Thumbnail">
            <span class="duration">${video.duration}</span>
        </div>
        <div class="video-info">
            <h3 class="title">${video.title}</h3>
            <p class="metadata">${video.channel} • ${video.views} • ${video.timePosted}</p>
        </div>
        <button class="menu-btn">⋮</button>
        </div>
        `;
    });
    container.innerHTML=htmlContent;
    }

renderPlaylist(videoData);