// import React from 'react';
import React, { Fragment } from 'react';

import CountContainer from './CountContainer';

function MenghitungHari() {
  return (
    <Fragment>
      <div id="fh5co-couple-story">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Menghitung Hari</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0 text-center">
              <CountContainer />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MenghitungHari;


