import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';
import ewallet from './assets/ewallet.png';


import { styWrapper, styFlex, styBoxWrapper } from './styles';

function Gift() {
  
  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{` Amplop Digital`}</h2>
            <p>
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
            </p>
          </div>
        </div>
        <div className="row justify-content-md-center" css={styBoxWrapper}>
          <div className="img-section">
           <img src = {ewallet} alt="icon" className="img" />
        </div>
        </div>
        
      </div>
    </div>
  );
}


export default React.memo(Gift);
