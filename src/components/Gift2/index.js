import React, { useState, Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper, styBoxWrapper } from './styles';
import ewallet from './assets/ewallet-crop.png';
import bjtm from './assets/bankjatim.png';
import btpn from './assets/btpn-bank.png';




function Gift2() {
  const [successCopy, setSuccessCopy] = useState(false);
  const handleCopy = async (text , showAlert = true) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccessCopy(true);
      showAlert && alert('Berhasil di');
    } catch (err) {
      setSuccessCopy(false);
      alert(err.message);
      alert('Failed to copy! :(');
    }
    setTimeout(() => {
      setSuccessCopy(false);
    }, 500);
    
  };


  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-md-center" css={styBoxWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding"> Amplop Digital</h2>
              <p className="sub-title">Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-3 text-center" css={styBoxWrapper}>
          <div className="event-wrap">
            <h3>Tesss</h3>
            <div className="event-col">
              <img src={ewallet} alt="icon" className="img" />
            </div>
            <div className="event-col">
              <p className='title' >asdfjhaksjdfhaskjf</p>
              <button
                type="button"
                className="btn btn-default btn-xs"
                style={{ marginLeft: '8px' }}
                onClick={() => handleCopy("wjwjwjw")}

              >
                {successCopy ? 'Tersalin' : 'Salin'}
              </button>
            </div> 
          </div>
        </div>

        <div className="col-md-4 col-sm-3 text-center" css={styBoxWrapper}>
          <div className="event-wrap">
            <h3>Tesss</h3>
            <div className="event-col">
              <img src={bjtm} alt="icon" className="img" />
            </div>
            <div className="event-col">
              <p >asdfjhaksjdfhaskjf</p>
              <button
                type="button"
                className="btn btn-default btn-xs"
                style={{ marginLeft: '8px' }}
                onClick={() => handleCopy("wjwjwjw")}
              >
                {successCopy ? 'Tersalin' : 'Salin'}
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-3 text-center" css={styBoxWrapper}>
          <div className="event-wrap">
            <h3>Tesss</h3>
            <div className="event-col">
              <img src={btpn} alt="icon" className="img" />
            </div>
            <div className="event-col">
              <p >asdfjhaksjdfhaskjf</p>
            </div>
          </div>
        </div>



      </div>
    </Fragment>
  );
}

Gift2.propTypes = {
};

export default React.memo(Gift2);
