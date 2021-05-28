import React from "react";
import { useBlog } from "../../Context";
import LikeBtn from "../general/LikeBtn";

const AlbumGridItem = ({ album }) => {

  const { likedAlbums } = useBlog();

  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img
          src="https://picsum.photos/600/400"
          alt=""
          className="uk-cover"
          uk-cover="true"
        />
        <canvas width="600" height="400"></canvas>
        <div className="uk-overlay-primary uk-position-cover"></div>
        <div className="uk-overlay uk-overlay-primary uk-position-bottom">
            <p>{album.title.slice(0, 40)}</p>
        </div>
        <div className="uk-position-top-right uk-overlay">
          <LikeBtn
            id={album.id}
            isLiked={likedAlbums.find(x => x.id === album.id)}
            like={album.like}
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(AlbumGridItem);