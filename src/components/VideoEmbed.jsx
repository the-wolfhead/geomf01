// Renders either a YouTube embed or a directly-uploaded video file,
// depending on the `item.type` field ('youtube' | 'upload').
export default function VideoEmbed({ item }) {
  return (
    <div>
      <div className="video-wrap">
        <span className="video-tag">{item.type === 'youtube' ? 'YouTube' : 'Uploaded'}</span>
        {item.type === 'youtube' ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video controls preload="metadata" poster={item.poster}>
            <source src={item.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        )}
      </div>
      <p style={{ marginTop: '0.7rem', fontWeight: 600, color: 'var(--ink)' }}>{item.title}</p>
    </div>
  );
}
