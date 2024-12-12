import "./chAward.scss";
// import { Image } from "astro:assets";
import type { Award } from "../pages/awards.astro";

export default function ChAward({ date, tags, title, content, images }: Award) {
  return (
    <div class="ch_award">
      <div class="bg bgBlue"></div>
      <div class="top_content">
        <div class="left">
          <span></span>
          <div>
            <h4 class="date zenkaku_light">{date}</h4>
            <h4 class="title zenkaku_normal">{title}</h4>
          </div>
        </div>
        <div class="right">
          {tags.map((tag: string) => (
            <p>{`#${tag}`}</p>
          ))}
        </div>
      </div>
      <div class="main_content">
        {!images || images.length !== 1 ? (
          <div class="description">
            <p>{content}</p>
            <div class="flex img_wrapper">
              {images.map((image) => {
                return (
                  <div class="img_container">
                    <img
                      src={image.src}
                      alt="img"
                      height={image.height}
                      loading="lazy"
                    />
                    {/* <div style={`background-image: url(${image.src}); height: ${image.}`}></div> */}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div class="flex flex_container">
            <p>{content}</p>
            {images[0] && (
              <div class="img_container">
                <img src={images[0].src} />
                <div style={`background-image: url(${images[0].src});`}></div>
                {/* <Image src={images[0].src || "/default-image.png"} alt="Award image" width={images[0].width} height={images[0].height}/> */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
