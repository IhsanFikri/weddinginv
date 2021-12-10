import React, { Fragment, useState } from 'react';
import IconMusic from '@assets/images/music-icon.png';


import { styMusicFloating } from './styles';

function GiftButton() {

  return (
    <Fragment>
      <div css={styMusicFloating}>
        <div >
          <img
            src= { IconMusic }
            className="icon-gift"
            alt="icon-music"
            title= 'Matikan Musik'
          />
        </div>
      </div>
    </Fragment>
  );
}

export default GiftButton;
