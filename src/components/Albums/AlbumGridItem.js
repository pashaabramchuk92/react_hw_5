import React from "react";
import LikeAlbum from "./LikeAlbum";

const AlbumGridItem = ({ album }) => {
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
          <LikeAlbum like={album.like} id={album.id} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(AlbumGridItem);