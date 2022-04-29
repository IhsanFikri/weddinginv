import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Rumah Keluarga Ihsan</strong>
                </a>{' '}
                <br />
                Dsn. Tanggul, Ds. Banjartanggul, Kec. Pungging, <br />
                Kab. Mojokerto, Jawa Timur 
              </p>
              <button className="btn btn-sm button-nav"><a href="https://maps.app.goo.gl/NocfUsqxnXZDSRWHA" target="_blank">Lihat lokasi</a></button>
              {/* <button className="btn btn-sm button-nav" onclick="window.open('https://maps.app.goo.gl/NocfUsqxnXZDSRWHA','_blank','resizable=yes')" >Lihat Lokasi</button> */}
            </div>
           
            
          </div>
          <div className="row text-center">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1196.0973729875543!2d112.55151282922611!3d-7.549590670180207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2eb91308caa6786!2zN8KwMzInNTguNSJTIDExMsKwMzMnMDcuNCJF!5e1!3m2!1sen!2sid!4v1638550803464!5m2!1sen!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Zulvia & Ihsan Wedding Party"
              ></iframe>
            </div>
            
           
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
