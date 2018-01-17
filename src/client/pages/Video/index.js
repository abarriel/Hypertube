import React, { Component } from 'react';
import axios from 'axios';

class Video extends Component {
  state = {
    status: 'ok',
  }

  render() {
    const { status } = this.state;
    console.log(status);
    return (
      <div>
        <video controls>
          <source src="http://localhost:8888/api/video" type="video/mp4" />
          <track kind="captions" src="/upload/tt0110912/tt0110912.vtt" srcLang="eng" label="English" />
        </video>
      </div>
    );
  }
}

export default Video;
//  <source src={src} type="video/" /> */}
// <track src={} kind="subtitles" srcLang={} label={label} default />
// <video controls poster="/images/sample.gif">
//    <source src="sample.mp4" type="video/mp4">
//    <source src="sample.ogv" type="video/ogv">
//    <track kind="captions" src="sampleCaptions.vtt" srclang="en">
//    <track kind="descriptions"
//      src="sampleDescriptions.vtt" srclang="en">
//    <track kind="chapters" src="chapitres.vtt" srclang="en">
//    <track kind="subtitles" src="soustitres_de.vtt" srclang="de">
//    <track kind="subtitles" src="soustitres_en.vtt" srclang="en">
//    <track kind="subtitles" src="soustitres_ja.vtt" srclang="ja">
//    <track kind="subtitles" src="soustitres_oz.vtt" srclang="oz">
//    <track kind="metadata" src="keyStage1.vtt" srclang="en"
//      label="Key Stage 1">
//    <track kind="metadata" src="keyStage2.vtt" srclang="en"
//      label="Key Stage 2">
//    <track kind="metadata" src="keyStage3.vtt" srclang="en"
//      label="Key Stage 3">
//    <!-- Contenu alternatif pour les navigateurs qui
//         ne prennent pas en charge video -->
//    ...
// </video>
