import React from "react";
import "./StyleContent.css";
import "./StyleBtn.css";

import ButtonsLogic from "./ButtonLogic";
import Inputoutput from "./input-output";

function Content() {
  return (
    <>
      <div className="content">
        <div id="upper_left">n</div>
        <div id="upper_right">n</div>
        <div id="lower_left">n</div>
        <div id="lower_right">n</div>

        <div className="content-container">
          <div className="content-input-top-icon">w</div>
          <div className="content-input-text">
            <Inputoutput />
          </div>
          {/* <div className="content-output-morse"></div> */}
          <div className="content-alphabeth-buttons">
            <ButtonsLogic />
          </div>
          <div className="footer-about-us">
            <div className="img-container">
              <div class="row examples">
                <div class="col-3">
                  <div class="snippet" data-title=".dot-elastic">
                    <div class="stage">
                      <div class="dot-elastic"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
