import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe el error  "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric />
      )}
      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message
          msg={`Error: no existe el intérprete "${search.artists}"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
