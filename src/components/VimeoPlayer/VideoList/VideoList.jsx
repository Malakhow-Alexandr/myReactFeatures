export const VideoLIst = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <a
            href={video.link}
            onClick={event => {
              event.preventDefault();
              onSelect(video.link);
            }}
          >
            {video.link}
          </a>
        </li>
      ))}
    </ul>
  );
};
