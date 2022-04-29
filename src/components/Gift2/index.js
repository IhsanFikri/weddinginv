import React, { useState, Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper, styBoxWrapper } from './styles';
import ewallet from './assets/ewallet-crop.png';
import bjtm from './assets/bankjatim.png';
import btpn from './assets/btpn-bank2.png';




function Gift2() {
  const [successCopy, setSuccessCopy] = useState(false);
  const handleCopy = async (text , showAlert = true) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccessCopy(true);
      showAlert && alert('Berhasil tersalin');
    } catch (err) {
      setSuccessCopy(false);
      alert(err.message);
      alert('Failed to copy! :(');
    }
    setTimeout(() => {
      setSuccessCopy(false);
    }, 500);
    
  };

  var bankjatim = "0017810600";
  var ewaletdata = "085608101866";
  var jenius = "90012953456";

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
            <h3>E-Wallet</h3>
             <div className="event-col">
              <img src={ewallet} alt="icon" className="img" />
            </div>
            <h3>{ewaletdata}
            
              <button
                type="button"
                className="btn btn-default btn-xs"
                style={{ marginLeft: '8px' }}
                onClick={() => handleCopy(ewaletdata)}
              >
                {successCopy ? 'Tersalin' : 'Salin'}
              </button>
              <br/>
              <br/>
              A/N Ihsan Fikri A. M.
              </h3>

         
          </div>
        </div>
       
        <div className="col-md-4 col-sm-3 text-center" css={styBoxWrapper}>
          <div className="event-wrap">
            <h3>Bank Jatim</h3>
             <div className="event-col">
              <img src={bjtm} alt="icon" className="img" />
            </div>
            <h3>{bankjatim}
            
              <button
                type="button"
                className="btn btn-default btn-xs"
                style={{ marginLeft: '8px' }}
                onClick={() => handleCopy(bankjatim)}
              >
                {successCopy ? 'Tersalin' : 'Salin'}
              </button>
              <br/>
              <br/>
              A/N Ihsan Fikri A. M.
              </h3>

         
          </div>
        </div>

        <div className="col-md-4 col-sm-3 text-center" css={styBoxWrapper}>
          <div className="event-wrap">
            <h3>Bank BTPN/Jenius</h3>
             <div className="event-col">
              <img src={btpn} alt="icon" className="img" />
            </div>
            <h3>{jenius}
            
              <button
                type="button"
                className="btn btn-default btn-xs"
                style={{ marginLeft: '8px' }}
                onClick={() => handleCopy(jenius)}
              >
                {successCopy ? 'Tersalin' : 'Salin'}
              </button>
              <br/>
              <br/>
              A/N Ihsan Fikri A. M.
              </h3>

         
          </div>
        </div>



      </div>
    </Fragment>
  );
}

Gift2.propTypes = {
};

export default React.memo(Gift2);
