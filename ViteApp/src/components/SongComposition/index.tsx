import "../../index.css";

import { Composition, registerRoot } from "remotion";
import { frames } from "../../common/index.js";
import { SongURLPlayer } from "./SongURLPlayer.jsx";

type SongURLCompositionProps = {
  className?: any;
};

export const SongURLComposition: React.FC<
  SongURLCompositionProps & { [key: string]: any }
> = () => {
  const duration = Number(
    import.meta.env.REACT_APP_VIDEO_DURATION ||
      import.meta.env.REMOTION_VIDEO_DURATION ||
      20
  );
  return (
    <Composition
      id="SongComposition"
      component={
        ({ url }: { url: string }) => <SongURLPlayer url={url} onDurationChange={() => {}} />
      }
      durationInFrames={frames(duration)}
      fps={frames(1)}
      width={1920}
      height={1080}
    />
  );
};

SongURLComposition.defaultProps = {};

registerRoot(SongURLComposition);
