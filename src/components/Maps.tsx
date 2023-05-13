import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type MapsProps = {
  children?: React.ReactElement;
};

const Maps: React.FC<MapsProps> = (props) => {
  const openInNewTab = (): void => {
    const newWindow = window.open(
      "https://goo.gl/maps/yTZHihrwSHJcNYEu9",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <section
        id="maps"
        className="w-full py-10 flex flex-col justify-between items-center bg-primary"
      >
        <div className="w-10/12 flex flex-col text-center text-secondary">
          <SlideComp direction={Direction.Up}>
            <div className="mb-7 font-sans text-5xl">
              <p>Lokasi</p>
            </div>
            <div className="w-full h-80 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3953.33525886418!2d110.39189167320728!3d-7.754221414616777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59a7ed55219d%3A0xaf2ef2137eaef0b3!2sJl.%20Aster%202%20No.20%2C%20Kentungan%2C%20Condongcatur%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sen!2sid!4v1683945998398!5m2!1sen!2sid"
                style={{ border: 0, width: "inherit", height: "inherit" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-100 h-100"
              />
            </div>
          </SlideComp>
          <SlideComp direction={Direction.Down}>
            <div className="mt-7">
              <a
                className="p-3 rounded-lg bg-secondary text-primary font-bold"
                onClick={openInNewTab}
              >
                Buka Di Google Maps
              </a>
            </div>
          </SlideComp>
        </div>
      </section>
    </>
  );
};

export default Maps;
