/*<!DOCTYPE html>
<html>
<head>
  <title>Video Chat App</title>
</head>
<body>
  <div id="login-form">
    <h1>Login</h1>
    <input type="text" id="username" placeholder="Username" />
    <input type="password" id="password" placeholder="Password" />
    <button id="login-btn">Login</button>
  </div>
  <div id="video-chat-container">
    <div id="local-video-container">
      <video id="local-video" autoplay muted></video>
    </div>
    <div id="remote-video-container">
      <video id="remote-video" autoplay></video>
    </div>
    <div id="call-controls">
      <input type="text" id="call-username" placeholder="Username to call" />
      <button id="call-btn">Call</button>
      <button id="hangup-btn">Hang Up</button>
    </div>
  </div>
<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
<script src="https://cdn.jsdelivr.net/npm/peerjs@1.3.1/dist/peerjs.min.js"></script>
<script src="site1.js"></script>
</body>
</html>




// JavaScript
const peer = new Peer();

let localStream;
let remoteStream;
let call;

peer.on('open', id => {
  document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Login logic here
  });
});

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    localStream = stream;
    document.getElementById('local-video').srcObject = stream;
  });

peer.on('call', call => {
  call.answer(localStream);
  call.on('stream', remoteStream => {
    document.getElementById('remote-video').srcObject = remoteStream;
  });
});

document.getElementById('call-btn').addEventListener('click', () => {
  const username = document.getElementById('call-username').value;
  call = peer.call(username, localStream);
  call.on('stream', remoteStream => {
    document.getElementById('remote-video').srcObject = remoteStream;
  });
});

document.getElementById('hangup-btn').addEventListener('click', () => {
  call.close();
});*/