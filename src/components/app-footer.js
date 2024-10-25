import React from "react";
import { Images } from "./images";
import "./app-footer.css"

export const Appfooter = () => {
  return (
    <div className="app-footer-div" >
      <div className="footer-image">
        <Images
          src={
            "https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
          }
          alt={"Mobile App"}
        />
      </div>
      <div className="footer-text">
        <h2>Try the OLX app</h2>
        <p>Buy, sell and find just about anything using the app on your mobile.</p>
      </div>
      <hr />
      <div className="footer-link-sec">
        <div>
        <p>Get your app today</p>
        </div>
        <div className="links">
            <Images src={"https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"} alt={"APP Store"} />
            <Images src={"https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"} alt={"Google Play"} />
            <Images src={"https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"} alt={"App Gallery"} />
        </div>
      </div>
    </div>
  );
};
