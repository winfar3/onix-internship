import "./SocialMedia.scss";

import { useState } from "react";

import SocialItem from "../SocialItem/SocialItem";

import facebook from "../../assets/images/socials/facebook.svg";
import pinterest from "../../assets/images/socials/pinterest.svg";
import vimeo from "../../assets/images/socials/vimeo.svg";
import dribbble from "../../assets/images/socials/dribbble.svg";
import twitter from "../../assets/images/socials/twitter.svg";
import behance from "../../assets/images/socials/behance.svg";
import instagram from "../../assets/images/socials/instagram.svg";
import youtube from "../../assets/images/socials/youtube.svg";
import google from "../../assets/images/socials/google.svg";

export function SocialMedia() {
    const [socialMediaData] = useState([{
        id: "facebook",
        imageUrl: facebook,
        number: "32k",
        popularity: "likes"
    },{
        id: "pinterest",
        imageUrl: pinterest,
        number: "814",
        popularity: "followers"
    },{
        id: "vimeo",
        imageUrl: vimeo,
        number: "165",
        popularity: "followers"
    },{
        id: "dribbble",
        imageUrl: dribbble,
        number: "6k",
        popularity: "followers"
    },{
        id: "twitter",
        imageUrl: twitter,
        number: "130k",
        popularity: "followers"
    },{
        id: "behance",
        imageUrl: behance,
        number: "37k",
        popularity: "followers"
    },{
        id: "instagram",
        imageUrl: instagram,
        number: "854k",
        popularity: "followers"
    },{
        id: "youtube",
        imageUrl: youtube,
        number: "52k",
        popularity: "subscribers"
    },{
        id: "google",
        imageUrl: google,
        number: "642",
        popularity: "followers"
    }]);

    return(
        <div className="socials__wrapper">
            {socialMediaData.map(socialMediaDataItem =>
                <SocialItem socialMediaDataItem={socialMediaDataItem} key={socialMediaDataItem.id} />
            )}
        </div>
    );
}