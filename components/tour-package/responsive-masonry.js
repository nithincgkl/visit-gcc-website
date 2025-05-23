import React from "react";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Rating from "react-rating-stars-component";
import style from "./style.module.css"; // Adjust the import according to your style file location
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { MdDownhillSkiing } from "react-icons/md";
import { IoBusOutline } from "react-icons/io5";
import { GiSailboat } from "react-icons/gi";

const images = [
  {
    src: "/images/package/01 copy.jpg",
    title: "Global Village Dubai",
    provider: "DoJoin",
    date: "16 October 2024",
    rating: 4.7,
    link: "/1",
  },
  {
    src: "/images/package/02 copy.jpg",
    title: "Dubai Miracle Garden",
    provider: "DoJoin",
    date: "04 July 2024",
    rating: 4,
    link: "/2",
  },
  {
    src: "/images/package/03 copy.jpg",
    title: "Dubai Frame",
    provider: "DoJoin",
    date: "04 July 2024",
    rating: 4,
    link: "/3",
  },
  {
    src: "/images/package/04.jpg",
    title: "2 Hours Sightseeing Yacht Tour",
    provider: "DoJoin",
    date: "04 July 2024",
    rating: 4,
    link: "/4",
  },
  {
    src: "/images/package/05.jpg",
    title: "Sky Views Observatory",
    provider: "DoJoin",
    date: "04 July 2024",
    rating: 4,
    link: "/5",
  },
  {
    src: "/images/package/06.jpg",
    title: "IMG Worlds of Adventure + AYA Universe",
    provider: "DoJoin",
    date: "04 July 2024",
    rating: 4,
    link: "/6",
  },
];

class MyWrapper extends React.Component {
  render() {
    const { breakPoints } = this.props;
    return (
      <ResponsiveMasonry columnsCountBreakPoints={breakPoints}>
        <Masonry>
          {images.map((image, i) => (
            <div key={i} className="masonry-item">
              <img
                src={image.src}
                style={{ width: "100%", display: "block" }}
                alt={image.title}
              />
              <div className="tour-pakage-masonry-item-content">
                <h5>{image.title}</h5>
                <div className={style["provider-date"]}>
                  <p>{image.provider}</p> &nbsp; | &nbsp;
                  <p>{image.date}</p>
                </div>
                <div className={style["star-section"]}>
                  <div className={style["star"]}>
                    <Rating
                      count={5}
                      value={image.rating}
                      size={24}
                      activeColor="#ffd700"
                      edit={false} // Set to true if you want it to be editable
                    />
                  </div>
                  <div>
                    <IoChatbubbleOutline />
                  </div>
                  <div>
                    <FaRegLightbulb />
                  </div>
                </div>

                <ul className={style["pakages-ul"]}>
                  <li>
                    <GiSailboat /> Boating
                  </li>
                  <li>
                    <IoTicketOutline />
                    Ticket{" "}
                  </li>
                  <li>
                    <MdOutlineDinnerDining /> Meals
                  </li>
                  <li>
                    <MdOutlineEmojiPeople /> Guide
                  </li>
                  <li>
                    <MdDownhillSkiing /> Activities
                  </li>
                  <li>
                    <IoBusOutline /> Transfers
                  </li>
                </ul>

                <Link
                  href={`/tour-package/${image.link}`}
                  className={style["r-button"]}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default MyWrapper;
