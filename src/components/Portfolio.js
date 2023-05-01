import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";
import store from "../store";
import Image from "next/image";

const Portfolio = () => {
  const [modal, setModal] = useState({
    portfolioItem: 0,
    showModal: false
  });
  const portfolio = store.portfolio;

  return (
    <Fragment>
      <PortfolioModal
        item={modal.portfolioItem}
        open={modal.showModal}
        close={() => setModal({
          portfolioItem: 0,
          showModal: false
        })}
      />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                previous <span className="coloring">WORKS</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {
                    portfolio.map((ele, i) =>
                      <SwiperSlide className="swiper-slide" key={i}>
                        <div className="list_inner">
                          <div className="image">
                            <Image src={"/img/portfolio/item" + (i + 1) + "/1.jpg"} alt="" width="500px" height="300px" />
                          </div>
                          <div className="details">
                            <h3>{ele.tit}</h3>
                            <span>{ele.ctg}</span>
                          </div>
                          <a
                            className="edrea_tm_full_link portfolio_popup"
                            href="#"
                            onClick={() => setModal({
                              portfolioItem: i,
                              showModal: true
                            })}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  }
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default React.memo(Portfolio);
