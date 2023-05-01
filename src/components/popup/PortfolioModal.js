import Modal from "./Modal";
import store from "../../store";
import { useEffect, useState } from "react";
import Image from "next/image";

const PortfolioModal = ({ item, close, open }) => {
  const [backImage, setBackImage] = useState(store.portfolio[item]);
  useEffect(() => {
    const a = store.portfolio[item]
    setBackImage(store.portfolio[item])

  }, [item])
  return (
    <Modal close={close} open={open} >
      <div className="portfolio_popup_details">
        <div className="top_image">
          <Image src={"/img/portfolio/" + backImage.img + "/1.jpg"} alt="" width="1000px" height="600px" />
        </div>
        <div className="portfolio_main_title">
          <h3>{backImage.tit}</h3>
          <span>
            <a href={backImage.url}>{backImage.url}</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>{backImage.des}</p>
          <p> Built By: &nbsp;
            {
              backImage.laf.map((ele, i) =>
                <span key={i}>{ele + ", "}</span>
              )
            }
          </p>
        </div>
        <div className="additional_images">
          <ul className="gallery_zoom">
            <li></li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <Image src={"/img/portfolio/" + backImage.img + "/2.jpg"} alt="" width="300px" height="200px"/>
                  <a
                    className="edrea_tm_full_link zoom"
                    href={"/img/portfolio/" + backImage.img + "/2.jpg"}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <Image src={"/img/portfolio/" + backImage.img + "/3.jpg"} alt="" width="300px" height="200px"/>
                  <a
                    className="edrea_tm_full_link zoom"
                    href={"/img/portfolio/" + backImage.img + "/3.jpg"}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;