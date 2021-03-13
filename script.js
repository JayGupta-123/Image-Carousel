
var imageList = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]
var index = 0;
var img = document.querySelector('img');

img.src = imageList[index];

function leftClick(){
    if(index > 0){
        index = index-1;
        img.src = imageList[index];
    }
    else{
        index = imageList.length-1;
        img.src = imageList[index]; 
    }
}

function rightClick(){
    if(index < imageList.length-1){
        index = index+1;
        img.src = imageList[index];
    }
    else{
        index = 0;
        img.src = imageList[index];
    }
}

