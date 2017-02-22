import React from 'react';
import './siteheader.css';

const SiteHeader = (props) => (
  <header className="header">
    <h1 className="header-headline">Tabellenrechner</h1>
    <button className="header-button" onClick={()=> props.reset()}>Reset</button>
  </header>
);
export default SiteHeader;