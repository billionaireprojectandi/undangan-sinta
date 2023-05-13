import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type CoupleProps = {
  children?: React.ReactElement;
};

const Couple: React.FC<CoupleProps> = (props) => {
  return (
    <>
      <section
        id="couple"
        className="w-full pt-10 flex flex-col justify-between items-center bg-primary"
      >
        <SlideComp class="w-full">
          <div className="w-full py-10 flex flex-col items-center gap-7 text-primary bg-secondary rounded-t-full">
            <div className="flex flex-col gap-4 items-center">
              <SlideComp direction={Direction.Left}>
                <div className="relative w-48 overflow-hidden border-4 rounded-lg rounded-t-full shadow-md">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="foto-mba-sinta/foto-mempelai-wanita.jpg"
                    alt="photo.png"
                  />
                </div>
              </SlideComp>

              <SlideComp direction={Direction.Left}>
                <div className="mb-3 text-center text-xl">
                  Sinta Puji Astuti
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm">
                    <p>
                      <strong>Putri dari</strong>
                    </p>
                  </div>
                  <div className="text-center text-sm">
                    <div>
                      <p>Bapak Sugiyono</p>
                    </div>
                    <div>
                      <p>Dan</p>
                    </div>
                    <div>
                      <p>Ibu Waginem</p>
                    </div>
                  </div>
                </div>
              </SlideComp>
            </div>

            <SlideComp>
              <p className="text-lg">&</p>
            </SlideComp>

            <div className="flex flex-col gap-4 items-center">
              <SlideComp direction={Direction.Right}>
                <div className="relative w-48 overflow-hidden border-4 rounded-lg rounded-t-full shadow-md">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="foto-mba-sinta/foto-mempelai-pria.jpg"
                    alt="photo.png"
                  />
                </div>
              </SlideComp>

              <SlideComp direction={Direction.Right}>
                <div className="mb-3 text-center text-xl">Dedi Irawan</div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm">
                    <p>
                      <strong>Putra dari</strong>
                    </p>
                  </div>
                  <div className="text-center text-sm">
                    <div>
                      <p>Bapak Parno (Alm)</p>
                    </div>
                    <div>
                      <p>Dan</p>
                    </div>
                    <div>
                      <p>Ibu Ngatmi</p>
                    </div>
                  </div>
                </div>
              </SlideComp>
            </div>
          </div>
          <svg
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            className=""
          >
            <path
              d="M0 72L50 70.8C100 69.7 200 67.3 300 70.3C400 73.3 500 81.7 600 82.5C700 83.3 800 76.7 850 73.3L900 70L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
              fill="#a29d87"
            />
            <path
              d="M0 63L50 60.7C100 58.3 200 53.7 300 54.2C400 54.7 500 60.3 600 60.8C700 61.3 800 56.7 850 54.3L900 52L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
              fill="#777777"
            />
            <path
              d="M0 25L50 27.2C100 29.3 200 33.7 300 34.5C400 35.3 500 32.7 600 31C700 29.3 800 28.7 850 28.3L900 28L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
              fill="#d2d3d5"
            />
          </svg>
        </SlideComp>
      </section>
    </>
  );
};

export default Couple;
