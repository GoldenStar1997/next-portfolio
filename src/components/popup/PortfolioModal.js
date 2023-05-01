import Modal from "./Modal";
import store from "../../store";
import Image from "next/image";

const PortfolioModal = ({ item, close, open }) => {
  const data = store.portfolio[item]
  return (
    <Modal close={close} open={open} >
      <div className="portfolio_popup_details">
        <div className="top_image">
          <Image src={"/img/portfolio/" + data.img + "/1.jpg"} alt="" width="1000px" height="600px" />
        </div>
        <div className="portfolio_main_title">
          <h3>{data.tit}</h3>
          <span>
            <a href={data.url}>{data.url}</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>{data.des}</p>
          <p> Built By: &nbsp;
            {
              data.laf.map((ele, i) =>
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
                  <Image src={"/img/portfolio/" + data.img + "/2.jpg"} alt="" width="300px" height="200px"/>
                  <a
                    className="edrea_tm_full_link zoom"
                    href={"/img/portfolio/" + data.img + "/2.jpg"}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <Image src={"/img/portfolio/" + data.img + "/3.jpg"} alt="" width="300px" height="200px"/>
                  <a
                    className="edrea_tm_full_link zoom"
                    href={"/img/portfolio/" + data.img + "/3.jpg"}
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