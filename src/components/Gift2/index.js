import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper,styBoxWrapper } from './styles';
import ewallet from './assets/ewallet-crop.png';

function Gift2() {

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-md-center"  css={styBoxWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding"> Amplop Digital</h2>
              <p className="sub-title">Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
            </div>
          </div>
          {/* <div className="row justify-content-md-center"  css={styBoxWrapper}> */}

                <WeddingInfoBox
                  title="E-Wallet"
                  img = {ewallet}
                  data = "1231313123"
                />
               
                <WeddingInfoBox
                  title="Bank"
                 
                />
            
          {/* </div> */}
        </div>
      </div>
    </Fragment>
  );
}

Gift2.propTypes = {
};

export default React.memo(Gift2);
