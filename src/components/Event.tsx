import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type EventProps = {
  children?: React.ReactElement;
};

const Event: React.FC<EventProps> = (props) => {
  return (
    <>
      <section
        id="event"
        className="relative w-full py-10 flex flex-col justify-between items-center bg-primary text-black"
      >
        <div className="relative w-10/12 flex flex-col border-2 rounded-xl z-10">
          <SlideComp>
            <img
              className="absolute w-full h-full -z-10  rounded-xl object-cover object-center"
              src="/foto-mba-sinta/couple-outdoor-1.jpg"
            />
            <SlideComp direction={Direction.Up}>
              <div className="p-7 flex flex-col items-center gap-2 text-center rounded-t-xl bg-primary bg-opacity-70">
                <div className="mb-3 font-sans text-3xl">
                  <p>Akad Nikah</p>
                </div>
                <div>
                  <p>Minggu, 18 Juni 2023</p>
                </div>
                <div>
                  <p>09:00 - Selesai WIB</p>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <p>
                    <strong>Di Rumah Mempelai Wanita</strong>
                  </p>
                  <p>
                    <strong>
                      Jl. Aster II Rt.02 Rw.52 No.20 Pohruboh Condongcatur Depok
                      Sleman Yogyakarta
                    </strong>
                  </p>
                </div>
              </div>
            </SlideComp>
            <SlideComp direction={Direction.Up}>
              <div className="p-9 flex flex-col items-center gap-2 text-center rounded-b-xl bg-primary bg-opacity-70">
                <div className="mb-3 font-sans text-3xl">
                  <p>Resepsi</p>
                </div>
                <div>
                  <p>Minggu, 18 Juni 2023</p>
                </div>
                <div>
                  <p>11:00 - 13:00 WIB</p>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <p>
                    <strong>Di Rumah Mempelai Wanita</strong>
                  </p>
                  <p>
                    <strong>
                      Jl Aster II Rt.02 Rw.52 No.20 Pohruboh Condongcatur Depok
                      Sleman Yogyakarta
                    </strong>
                  </p>
                </div>
              </div>
            </SlideComp>
          </SlideComp>
        </div>
      </section>
    </>
  );
};

export default Event;
