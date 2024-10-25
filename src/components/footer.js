import React, { useState } from "react";
import "./footer.css"
import { Images } from "./images";

export const Footer = () => {
  const [footerItem, setFooterItem] = useState([
    {
      heading: "Popular Categories",
      link1: "Cars",
      link2: "Flats for rent",
      link3: "Mobile Phones",
      link4: "Jobs",
    },
    {
      heading: "Trending Searches",
      link1: "Bikes",
      link2: "Watches",
      link3: "Books",
      link4: "Dogs",
    },
    {
      heading: "About Us",
      link1: "About Dubizzle Group",
      link2: "OLX Blog",
      link3: "Contact Us",
      link4: "OLX for Businesses",
    },
    {
      heading: "OLX",
      link1: "Help",
      link2: "Sitemap",
      link3: "Terms of use",
      link4: "Privacy Policy",
    },
  ]);

  const Links = () => {
    return (
      <>
        {footerItem.map((v, i) => (
          <div key={i} className="links-div">
            <h4>{v.heading}</h4>
            <ul>
              <li>{v.link1}</li>
              <li>{v.link2}</li>
              <li>{v.link3}</li>
              <li>{v.link4}</li>
            </ul>
          </div>
        ))}
      </>
    );
  };

  return (
    <footer>
        <Links />
        <div className="follow-sec">
            <div className="social-media-links">
                <p>FOLLOW US</p>
                <Images src={"https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg"} alt={"Twitter"} />
                <Images src={"https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg"} alt={"Facebook"} />
                <Images src={"https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg"} alt={"Youtube"} />
                <Images src={"https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg"} alt={"Instagrame"} />
             </div>
             <div className="download-sec">
             <Images src={"https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"} alt={"APP Store"} />
            <Images src={"https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"} alt={"Google Play"} />
            <Images src={"https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"} alt={"App Gallery"} />
             </div>
        </div>
    </footer>
  )
};
