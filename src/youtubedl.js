console.log('Our extension has loaded');

let adaptArr = window.ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats;
let URLArr = [];

//get simpled version of array
//could be done better than if else statement -> a function on the array method

// let qualName =  '';
for(i=0; i<adaptArr.length; i++){
    // if(adaptArr[i].quality === qualName) {
        // continue;
    // } else {
        URLArr.push(adaptArr[i]);
        // qualName = adaptArr[i].quality;
    // }    
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

//NEED TO ADD THE EVENT LISTENER FOR DROP DOWN MENU


//create drop down list
let dropDown = document.createElement('div');
dropDown.id = 'dropdown-list';
container.appendChild(dropDown);

let dropList = document.createElement('ul');
dropDown.appendChild(dropList);

function downloadURI(event) {
    event.preventDefault();

    var url = event.currentTarget.getAttribute("href");
    var name = document.getElementsByTagName('title')[0].innerText;
    var dataType = event.currentTarget.getAttribute("data-type");
    var data = {url: url, name: name, sender: "YTDL", type: dataType};

    window.postMessage(data, "*");
}

//add links to different video qualities
for(i = 0; i < URLArr.length; i++ ) {
    // console.log(URLArr[i].quality);

    let linkContainer = document.createElement('li');
    dropList.appendChild(linkContainer);

    let newLink = document.createElement('a');
    newLink.innerText = URLArr[i].quality;
    newLink.href = URLArr[i].url;
    newLink.id = 'link';
    newLink.setAttribute("data-type", URLArr[i].mimeType)
    newLink.addEventListener('click', downloadURI);
    linkContainer.appendChild(newLink);
}

document.getElementById('downloadVideo').addEventListener('click', () => {
    console.log('download this video');

});

