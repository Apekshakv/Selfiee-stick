async function takevideo(){
    const video=document.createElement("video")
    const stream= await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject=stream;
    document.body.appendChild(video);
    await video.play();
    return video;
}

function drawvedio(video,canvas){
const context=canvas.getContext("2d");
context.drawImage(video, 0, 0)

}
(async function run() {
    const button = document.querySelector("#take-photo");
    const canvas = document.querySelector("canvas");
    const video = await takevideo();
  
    button.addEventListener("click", () => {
      drawvedio(video, canvas);
    });
  })();