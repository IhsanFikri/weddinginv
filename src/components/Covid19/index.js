import React from 'react';

import IconSocialDistancing from './assets/social-distancing.png';
import IconQRcode1 from './assets/1.svg';
import IconQRcode2 from './assets/2.svg';
import IconQRcode3 from './assets/download.png';
import IconQRcode4 from './assets/4.svg';
import SectionBox from './SectionBox';

function CovidSection() {
  return (
    <div id="fh5co-couple" className='fh5co-section-gray'>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Panduan Protokol Covid-19</h2>
            <p className="info" style={{ marginBottom: '-16px' }}>
              Keberlangsungan acara ini mengacu pada pedoman kesehatan dari Kementerian Kesehatan:
            </p>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row justify-content-md-center">
          <br/>
          <div className="col-md-6">
            <SectionBox icon={IconQRcode1} text="Menjaga Jarak." />
          </div>
          <div className="col-md-6">
            <SectionBox icon={IconQRcode2} text="Pembatasan jarak dan pembatasan jumlah tamu." />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <SectionBox icon={IconQRcode3} text="Satu undangan hanya untuk 2 orang tamu." />
          </div>
          <div className="col-md-6">
            <SectionBox icon={IconQRcode4} text="Satu undangan hanya untuk 2 orang tamu." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;
