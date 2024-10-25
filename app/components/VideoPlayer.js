
"use client";
import { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaImage, FaVideo, FaCube, FaExpand, FaCompress, FaArrowRight} from 'react-icons/fa';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const VideoPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Set to false initially
  const [playedVideos, setPlayedVideos] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const descriptionRef = useRef(null);
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollTop = descriptionRef.current.scrollHeight;
    }
  }, [playedVideos]);

  const playVideo = () => {
    setIsPlaying(true);
    if (!playedVideos.some(video => video.title === videos[currentVideoIndex].title)) {
      setPlayedVideos(prev => [
        ...prev,
        { title: videos[currentVideoIndex].title, description: videos[currentVideoIndex].description }
      ]);
    }
  };

  const pauseVideo = () => {
    setIsPlaying(false);
  };

  const nextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setIsPlaying(true); // Automatically play the next video
    }
  };

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setIsPlaying(true); // Automatically play the previous video
      if (descriptionRef.current) {
        descriptionRef.current.scrollTop = descriptionRef.current.scrollHeight - descriptionRef.current.clientHeight;
      }
    }
  };

  const handleVideoEnd = () => {
    nextVideo();
  };

  const ModelViewer = ({ url }) => {
    const { scene } = useGLTF(url);
    const { camera } = useThree();
  
    useEffect(() => {
      if (scene) {
        // Reset scale and position for each model load
        const box = new THREE.Box3().setFromObject(scene);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
  
        scene.position.set(-center.x, -center.y, -center.z);
  
        const maxDimension = Math.max(size.x, size.y, size.z);
        const scaleFactor = 10 / maxDimension;
        scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
  
        // Adjust the camera to fit the model
        camera.position.set(0, 0, maxDimension * 3);
        camera.lookAt(scene.position);
        camera.updateProjectionMatrix();
      }
    }, [scene, camera]);
  
    return <primitive object={scene} />;
  };
  
  const goBack = () => {
    window.history.back(); // Go back to the previous page
  };

  const selectVideo = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
    if (!playedVideos.some(video => video.title === videos[index].title)) {
      setPlayedVideos(prev => [
        ...prev,
        { title: videos[index].title, description: videos[index].description }
      ]);
    }
  };


  const handleMediaClick = (media) => {
    pauseVideo();
    if (selectedMedia === media) {
      setSelectedMedia(null);
      playVideo();
    } else {
      setSelectedMedia(media);
      setIsFullScreen(media.endsWith('.glb'));
    }
  };

  const exitFullScreen = () => {
    setSelectedMedia(null);
    setIsFullScreen(false);
    playVideo();
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoPlayerRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh'  }}>
     
     <div
  style={{
    width: '25%',
    padding: '20px',
    borderRight: '1px solid #ccc',
    backgroundColor: '#fff', // Set sidebar background to white
    overflowY: 'auto',
    height: '100vh'
  }}
  ref={descriptionRef}
>
  {playedVideos.map((video, index) => (
    <div
      key={index}
      style={{
        marginBottom: '15px',
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: videos.findIndex(v => v.title === video.title) === currentVideoIndex ? '#d3d3d3' : '#fff', // Gray for current, white for others
        border: '1px solid black', // Black border around each description
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
      }}
      onClick={() => selectVideo(videos.findIndex(v => v.title === video.title))}
    >
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <hr />
      <div>
        {videos.find(v => v.title === video.title)?.additionalMedia?.map((media, idx) => {
          let icon;
          if (media.type === 'image') icon = <FaImage />;
          else if (media.type === 'video') icon = <FaVideo />;
          else if (media.type === '3d') icon = <FaCube />;
          return (
            <div key={idx} onClick={() => handleMediaClick(media.src)} style={{ cursor: 'pointer', display: 'inline-block', marginRight: '10px' }}>
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>


      <div 
        style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          backgroundColor: '#000', 
          position: 'relative' 
        }} 
        ref={videoPlayerRef}
      >
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <TransformWrapper
            initialScale={1}
            disabled={false}
          >
            <TransformComponent>
              <Draggable>
                <div style={{ width: '100%', height: '100%' }}>
                  <ReactPlayer
                    url={videos[currentVideoIndex].src}
                    playing={isPlaying && !selectedMedia}
                    controls={true}
                    width="100%"
                    height="100%"
                    onEnded={handleVideoEnd}
                    style={{ objectFit: 'cover' }}
                    onStart={playVideo}
                  />
                </div>
              </Draggable>
            </TransformComponent>
          </TransformWrapper>

          {selectedMedia && (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }}>
    <Draggable 
      bounds="parent"
    >
      <div style={{
        width: '100%', // or adjust as needed
        height: '100%', // or adjust as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
       
            {selectedMedia.endsWith('.mp4') ? (
              <ReactPlayer url={selectedMedia} playing controls width="100%" height="100%" />
            ) : selectedMedia.endsWith('.jpg') || selectedMedia.endsWith('.png') ? (
              <img src={selectedMedia} alt="Media" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            ) : selectedMedia.endsWith('.glb') ? (
  <Canvas key={selectedMedia} style={{ width: '100%', height: '100%' }}>
    <OrbitControls />
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} />
    <ModelViewer url={selectedMedia} />
  </Canvas>
) : null}
        
      </div>
    </Draggable>
  </div>
   )}

          <button 
            onClick={toggleFullScreen} 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'rgba(255, 255, 255, 0.7)',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
              zIndex: 100,
            }}
          >
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', backgroundColor: '#fff', color: '#000' }}>
  <button 
    onClick={prevVideo} 
    disabled={currentVideoIndex === 0} 
    style={{
      backgroundColor: '#000', // Blue background
      color: '#fff', // White text
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
  >
    <FaStepBackward />
  </button>
  <button 
    onClick={isPlaying ? pauseVideo : playVideo} 
    style={{
      backgroundColor: '#000', // Blue background
      color: '#fff', // White text
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
  >
    {isPlaying ? <FaPause /> : <FaPlay />}
  </button>
  <button 
    onClick={nextVideo} 
    disabled={currentVideoIndex === videos.length - 1} 
    style={{
      backgroundColor: '#000', // Blue background
      color: '#fff', // White text
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
  >
    <FaStepForward />
  </button>

  <button onClick={goBack} style={{  marginRight: '10px', padding: '10px', backgroundColor: '#000',  color: '#fff', border: 'none', borderRadius: '5px' }}>
              Back 
            </button>
</div>

      </div>
    </div>
  );
};

export default VideoPlayer;
