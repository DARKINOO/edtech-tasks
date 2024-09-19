async function convertToSign() {
    const inputText = document.getElementById('inputText').value;
    const response = await fetch('/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
    });
    const data = await response.json();
    displayVideos(data.videoUrls);
}

function displayVideos(videoUrls) {
    const container = document.getElementById('videoContainer');
    container.innerHTML = '';
    videoUrls.forEach(url => {
        if (url) {
            const video = document.createElement('video');
            video.src = url;
            video.controls = true;
            video.autoplay = true;
            video.muted = true;
            container.appendChild(video);
        } else {
            const span = document.createElement('span');
            span.textContent = '[Sign not found]';
            container.appendChild(span);
        }
    });
}