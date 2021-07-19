console.log('Our extension has loaded');

let adaptArr = window.ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats;
let URLArr = [];

for(i=0; i<adaptArr.length; i++){
    URLArr.push(adaptArr[i]) //could do better .map .split ??
}

console.log(URLArr);

//get menu container from youtube
let container = document.getElementById('info');


//create button
let btn = document.createElement('button');
btn.innerText = 'Download Video';
btn.setAttribute('role', 'button');
btn.id = 'downloadVideo';
//append to container
container.appendChild(btn);


//create drop down list
let dropDown = document.createElement('div');
dropDown.id = 'dropdown-list';
container.appendChild(dropDown);

let dropList = document.createElement('ul');
dropDown.appendChild(dropList);

//add links to different video qualities
for(i = 0; i < URLArr.length; i++ ) {
    console.log(URLArr[i].quality);
    let newLink = document.createElement('a');
    newLink.innerText = URLArr[i].quality;
    newLink.href = URLArr[i].url;
    dropList.appendChild(newLink);
}

// dropDown.className += 'show';

// btn.addEventListener("click", () => {
//     dropDown.className += 'show';
// });

