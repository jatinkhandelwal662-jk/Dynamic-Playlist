let n=1;
function createCard(title,channelName,views,monthsOld,duration,thumbnailLink){
  const container = document.querySelector('.container');
  const card=`
      <div class="video-card">
        <div class="index">${n}</div>
          <div class="thumbnail-container">
            <img src="${thumbnailLink}">
            <span class="duration">${duration}</span>
          </div>
          <div class="video-info">
              <h3 class="title">${title}</h3>
              <p class="metadata">${channelName}•${views}views•${monthsOld}months ago</p>
          </div>
          <button class="menu-btn">⋮</button>
      </div>
      `;
  container.innerHTML+=card;
  n++;
}

createCard("Ekaki Chapter 1 : Presence | Ashish Chanchlani","ashish chanchlani vines","41M",2,"36:37","youtube/1.png");
createCard("Ekaki Chapter 2 : Arrival | Ashish Chanchlani","ashish chanchlani vines","29M",2,"44:37","youtube/2.png");
createCard("Ekaki Chapter 3 : Invasion | Ashish Chanchlani","ashish chanchlani vines","21M",2,"30:42","youtube/3.png");
createCard("Ekaki Chapter 4 : Skyfall | Ashish Chanchlani","ashish chanchlani vines","22M",2,"37:19","youtube/4.png");
createCard("Ekaki Chapter 5 : The Conqueror | Ashish Chanchlani","ashish chanchlani vines","15M",1,"1:08:18","youtube/5.png");
