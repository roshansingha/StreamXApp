import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const imgUrl = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${imgUrl}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <h2>{movie.title || movie.original_name}</h2>
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      {/*textTruncateChild={<a href="#">Read on</a>}*/}
      <p className="videoCard__stats">
        <span className="date">
          {movie.release_date || movie.first_air_date}
        </span>
        <div className="rating">
          <ThumbUpSharp className="ratingIcon" /> {movie.vote_count}
        </div>
      </p>
    </div>
  );
});

export default VideoCard;
