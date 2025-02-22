import "../scss/chAward.scss";
import type { Award } from "../pages/awards.astro";
import SlideComponent from "./SlideShow";

export default function ChAward({ date, tags, title, contents, images }: Award) {
  return (
    <div class="ch__award">
      <div class="ch__award__top">
        <div class="ch__award__top__left">
          <span></span>
          <div>
            <h5 class="ch__award__top__left__date zenkaku_light">{date}</h5>
            <h4 class="ch__award__top__left__title zenkaku_normal">{title}</h4>
          </div>
        </div>
        <div class="ch__award__top__right">
          {tags.map((tag: string) => (
            <span>{`#${tag}`}</span>
          ))}
        </div>
      </div>
      <div class="ch__award__main">
        {!images || images.length !== 1 ? (
          <div class="ch__award__main__description">
            <p>{contents}</p>
            <div class="ch__award__main__description__img__wrapper">
              <SlideComponent imgProps={images} />
            </div>
          </div>
        ) : (
          <div class="ch__award__main__fewImgContainer">
            <p>{contents}</p>

            {images[0] && (
              <div class="ch__award__main__fewImgContainer__imgs">
                <img src={images[0].src} />
                <div style={`background-image: url(${images[0].src});`}></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
