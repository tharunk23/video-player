
const videos = [
    {
      src: '/videos/c1.mp4', // Video source
      type: 'video', // Type of media
      audio: '/audio/audio1.mp3',
      title: 'Edgeforce',
      description: 'Edgeforce has been conceived with the singular objective of bringing cutting edge smart and disruptive technology to the country’s security forces.',
      additionalMedia: [
        {
          src: '/images/image1.jpg',
          type: 'image',
        },
        {
          src: '/videos/c12.mp4',
          type: 'video',
        },
        {
          src: '/models/bmp.glb',
          type: '3d',
        },
      ],
    },
    {
      src: '/videos/1.mp4', // Video source
      audio: '/audio/audio1.mp3', // Corresponding audio file
      title: 'Our Projects',
      description: 'Edgeforce has been conceived with the singular objective of bringing cutting edge smart and disruptive technology to the country’s security forces. With rapidly advancing military technology it is vital to upgrade in order to stand strong against others',
      additionalMedia: [],
    },
    {
      src: '/videos/3.mp4', // Video source
      audio: '/audio/audio1.mp3', // Corresponding audio file
      title: 'Predictive Maintenance',
      description: 'Our CBM solution for Armoured Fighting Vehicles (AFVs) introduces a proactive and data-driven approach to vehicle maintenance, optimizing reliability and reducing downtime. By leveraging real-time condition monitoring and advanced analytics, this system enhances the overall operational efficiency of AFVs.',
      additionalMedia: [
        {
          src: '/videos/1.mp4',
          type: 'video',
        },
        {
          src: '/models/bmw.glb',
          type: '3d',
        },
      ],
    },
    {
      src: '/videos/4.mp4', // Video source
      audio: '/audio/audio1.mp3', // Corresponding audio file
      title: 'Cat Breeds Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      additionalMedia: [
        {
          src: '/models/bmw.glb',
          type: '3d',
        },
      ],
    },

  ];
  
  export default videos;
  