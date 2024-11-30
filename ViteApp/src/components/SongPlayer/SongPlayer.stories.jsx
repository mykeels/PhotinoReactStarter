
import { SongPlayer } from "./index.js";
import sampleSong from "../../common/data/sample-song.json";
import { SlidingSubtitles } from "./components/SlidingSubtitles/index.jsx";
import { HighlightedVerseSubtitles } from "./components/HighlightedVerseSubtitles/index.jsx";
import { AbsoluteFill } from "remotion";
import classNames from "classnames";
import { ColorTransitions } from "../../animations/index.js";
import { CenterFill } from "./components/index.js";

export default {
  title: "components/SongPlayer",
  component: SongPlayer,
  decorators: []
};

export const WithSlidingSubtitles = () => (
  <SongPlayer
    song={sampleSong}
    width={640}
    height={320}
    Subtitles={SlidingSubtitles}
  />
);

export const WithHighlightedVerseSubtitles = () => (
  <SongPlayer
    song={sampleSong}
    width={640}
    height={320}
    Subtitles={HighlightedVerseSubtitles}
  />
);

export const WithSolidBackground = () => (
  <SongPlayer
    song={sampleSong}
    width={640}
    height={320}
    Subtitles={HighlightedVerseSubtitles}
    Background={() => (
      <AbsoluteFill
        className={classNames("bg-black items-center justify-center")}
      ></AbsoluteFill>
    )}
  />
);

export const WithBackgroundColorTransitions = () => (
  <SongPlayer
    song={sampleSong}
    width={640}
    height={320}
    Subtitles={HighlightedVerseSubtitles}
    Background={() => (
      <ColorTransitions
        colors={[
          `#75dddd`,
          `#84c7d0`,
          `#9297c4`,
          `#9368b7`,
          `#ff0000`,
          `#aa3e98`
        ]}
      >
        {({ style }) => (
          <CenterFill
            className="z-10"
            style={{ backgroundColor: style.color }}
          />
        )}
      </ColorTransitions>
    )}
  />
);
