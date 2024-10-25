
import VideoPlayer from "@/app/components/VideoPlayer";
import videos from "@/app/data/videos";


export default function T72() {
  return (
    <div>
      <VideoPlayer videos={videos} />
    </div>
  );
}