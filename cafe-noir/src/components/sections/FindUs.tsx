// components/FindUs.tsx
import Button from "../Buttons";

export default function FindUs() {
  return (
    <section id="localisation" className="pt-9 md:py-[50px] bg-dark-blue container-grid relative">
        <h3 className="font-bold text-2xl lg:text-5xl text-almond">Where to find us?</h3>
        <div className="grid-layout grid-gap ">
            <img src="/About/PlaceIsometric.png" alt="" className="object-contain col-span-5 col-start-2 z-10 md:absolute md:max-h-[740px] md:w-[45%] lg:w-[50%] md:h-auto top-1/2 md:right-9  md:-translate-y-1/2" />
            <div className="col-span-6 md:col-span-7 flex flex-col items-end md:items-start space-y-4 -translate-y-10 md:translate-y-0 md:pt-16">
                <div className="bg-almond px-4 lg:px-[46px] py-5 lg:py-10 space-y-4 w-full rounded">
                    <h4 className="font-secondary text-dark-blue text-lg lg:text-3xl">Come Say Hi</h4>
                    <p className="font-primary text-dark-blue text-base lg:text-lg">
                        Find us in the center of Helsinki, just a short walk from Esplanadi Park.<br/>
                        Whether it’s your first visit or part of your daily ritual,<br/>
                        we’ll be here — with fresh coffee and good energy waiting.<br />
                        You’ll find us at <span className="font-bold underline decoration-light-orange decoration-2">Pohjoisesplanadi 35, 00100 Helsinki</span>
                    </p>
                </div>
                <div className="bg-almond px-4 lg:px-[46px] py-5 lg:py-10 space-y-4 w-full rounded">
                    <h4 className="font-secondary text-dark-blue text-lg lg:text-3xl">Opening Hours:</h4>
                    <p className="font-primary text-dark-blue text-base lg:text-lg">
                        Monday–Friday: 8:00 – 18:00<br/>
                        Saturday: 9:00 – 18:00<br/>
                        Sunday: 10:00 – 16:00    
                    </p>
                </div>
                <Button text="Get Directions" href="https://www.google.com/maps/dir//Caf%C3%A9+Noir,+Pohjoisesplanadi+35,+00100+Helsinki/@60.1698575,24.9413033,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46920a2f6f6f4b7d:0x8e2f4b6f4e6c4e2a!2m2!1d24.943492!2d60.1698575" color="coral" />
            </div>
        </div>
    </section>
  );
}
