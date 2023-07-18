// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useRef } from 'react';

// const Player = () => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [progress, setProgress] = useState(0);
//     const videoRef = useRef(null);

//     const togglePlay = () => {
//         if (isPlaying) {
//             videoRef.current.pause();
//         } else {
//             videoRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };

//     const handleProgress = () => {
//         const duration = videoRef.current.duration;
//         const currentTime = videoRef.current.currentTime;
//         const progress = (currentTime / duration) * 100;
//         setProgress(progress);
//     };
//     return (
//         <div>
//             <video
//                 onTimeUpdate={handleProgress}
//                 ref={videoRef}
//                 width="100%"
//                 height="100%"
//                 controls
//             >
//                 <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
//             </video>
//             <div>
//                 <button onClick={togglePlay}>
//                     {isPlaying ? "Pause" : "Play"}
//                 </button>
//                 <progress value={progress} max="100" />
//             </div>
//         </div>
//     )
// }

// export default Player;


                      // <npm install react-player>

import React from 'react';
import ReactPlayer from 'react-player'; 

const Player = () => {
    return (
        <ReactPlayer
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            width="100%"
            height="100%"
            controls
        />
    )
}

export default Player;


                  // npm install react-video-js-player 

// import React from "react";
// import VideoPlayer from "react-video-js-player";

// const Player = () => {
//     return (
//         <VideoPlayer
//             width="100%"
//             height="100%"
//             src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//             controls
//         />
//     )
// }

// export default Player;

