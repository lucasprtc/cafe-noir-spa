"use client";
// components/FindUs.tsx

export default function Footer() {
  return (
    <section id="contact" className="relative  bg-dark-blue container-grid overflow-hidden pb-[75px]">
        <div className="relative  overflow-hidden">
            <img src="/About/mascotAlmond.svg" alt="" className="absolute w-[100px] md:w-[150px] lg:w-[200px] -top-[20%] md:-top-[30%] lg:-top-[40%] left-[38%] md:left-[75%] lg:left-[80%]" />
            <img src="/About/mascotAlmond.svg" alt="" className="absolute w-[100px] md:w-[150px] lg:w-[200px] -bottom-[10%] md:-bottom-[20%] lg:-bottom-[30%] xl:-bottom-[45%] left-0" />
            <div className="grid-layout grid-gap pt-9 pb-5 md:pt-5 md:pb-5">
                <div className="col-span-6 md:col-span-2 flex flex-row md:flex-col justify-between md:justify-start md:items-start md:gap-3">
                    <img src="/About/logo.svg" alt="" className="" />
                    <div className="flex justify-center items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <g clipPath="url(#clip0_12_235)">
                            <path d="M11 1.98202C13.9371 1.98202 14.285 1.9932 15.4449 2.04612C16.5174 2.09507 17.0998 2.27427 17.4875 2.42487C18.0009 2.62442 18.3674 2.86282 18.7523 3.24773C19.1372 3.63263 19.3756 3.99911 19.5751 4.51251C19.7257 4.90017 19.9049 5.48261 19.9539 6.55506C20.0068 7.71501 20.018 8.06288 20.018 11C20.018 13.9372 20.0068 14.285 19.9539 15.4449C19.9049 16.5174 19.7257 17.0999 19.5751 17.4875C19.3756 18.0009 19.1372 18.3674 18.7523 18.7523C18.3674 19.1372 18.0009 19.3756 17.4875 19.5751C17.0998 19.7258 16.5174 19.905 15.4449 19.9539C14.2852 20.0068 13.9373 20.018 11 20.018C8.06266 20.018 7.71479 20.0068 6.55506 19.9539C5.48257 19.905 4.90013 19.7258 4.51251 19.5751C3.99906 19.3756 3.63259 19.1372 3.24768 18.7523C2.86278 18.3674 2.62437 18.0009 2.42487 17.4875C2.27423 17.0999 2.09503 16.5174 2.04608 15.445C1.99316 14.285 1.98198 13.9372 1.98198 11C1.98198 8.06288 1.99316 7.71501 2.04608 6.5551C2.09503 5.48261 2.27423 4.90017 2.42487 4.51251C2.62437 3.99911 2.86278 3.63263 3.24768 3.24773C3.63259 2.86282 3.99906 2.62442 4.51251 2.42487C4.90013 2.27427 5.48257 2.09507 6.55501 2.04612C7.71496 1.9932 8.06284 1.98202 11 1.98202ZM11 0C8.01254 0 7.63798 0.0126627 6.46471 0.0661955C5.29385 0.119641 4.49426 0.305565 3.79454 0.577508C3.07119 0.85862 2.45775 1.23475 1.84623 1.84627C1.2347 2.45779 0.858576 3.07123 0.577464 3.79458C0.305521 4.49431 0.119597 5.29389 0.0661518 6.46476C0.0126191 7.63798 0 8.01258 0 11C0 13.9875 0.0126191 14.3621 0.0661518 15.5353C0.119597 16.7062 0.305521 17.5057 0.577464 18.2055C0.858576 18.9288 1.2347 19.5423 1.84623 20.1538C2.45775 20.7653 3.07119 21.1414 3.79454 21.4225C4.49426 21.6945 5.29385 21.8804 6.46471 21.9338C7.63798 21.9874 8.01254 22 11 22C13.9874 22 14.362 21.9874 15.5352 21.9338C16.7061 21.8804 17.5057 21.6945 18.2054 21.4225C18.9288 21.1414 19.5422 20.7653 20.1537 20.1538C20.7653 19.5423 21.1414 18.9288 21.4225 18.2055C21.6944 17.5057 21.8804 16.7062 21.9338 15.5353C21.9873 14.3621 22 13.9875 22 11C22 8.01258 21.9873 7.63798 21.9338 6.46476C21.8804 5.29389 21.6944 4.49431 21.4225 3.79458C21.1414 3.07123 20.7653 2.45779 20.1537 1.84627C19.5422 1.23475 18.9288 0.85862 18.2054 0.577508C17.5057 0.305565 16.7061 0.119641 15.5352 0.0661955C14.362 0.0126627 13.9874 0 11 0ZM11 5.35136C7.88032 5.35136 5.35131 7.88036 5.35131 11C5.35131 14.1197 7.88032 16.6487 11 16.6487C14.1196 16.6487 16.6486 14.1197 16.6486 11C16.6486 7.88036 14.1196 5.35136 11 5.35136ZM11 14.6667C8.97495 14.6667 7.33329 13.0251 7.33329 11C7.33329 8.97499 8.97495 7.33333 11 7.33333C13.025 7.33333 14.6667 8.97499 14.6667 11C14.6667 13.0251 13.025 14.6667 11 14.6667ZM18.1918 5.12819C18.1918 5.85721 17.6008 6.44821 16.8718 6.44821C16.1428 6.44821 15.5518 5.85721 15.5518 5.12819C15.5518 4.39916 16.1428 3.80821 16.8718 3.80821C17.6008 3.80821 18.1918 4.39916 18.1918 5.12819Z" fill="#FFF5EA"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_12_235">
                            <rect width="22" height="22" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11.451 0.707617C12.5764 0.69043 13.6936 0.699367 14.8101 0.69043C14.8472 2.08674 15.4137 3.34349 16.315 4.27437L16.3137 4.27299C17.2837 5.14681 18.546 5.7133 19.9375 5.80956L19.9567 5.81093V9.27318C18.6422 9.24018 17.4061 8.93699 16.2917 8.41587L16.348 8.43924C15.809 8.18006 15.3532 7.91399 14.9201 7.61699L14.9558 7.64037C14.9476 10.1491 14.9641 12.6577 14.9387 15.1575C14.8678 16.4314 14.4443 17.5933 13.7651 18.5634L13.7788 18.5421C12.6431 20.1687 10.8033 21.2364 8.71129 21.2996H8.70166C8.6171 21.3037 8.51741 21.3058 8.41704 21.3058C7.22766 21.3058 6.11597 20.9744 5.1686 20.399L5.1961 20.4148C3.47185 19.3774 2.28247 17.6022 2.06247 15.5377L2.05972 15.5095C2.04254 15.0798 2.03429 14.6501 2.05147 14.2294C2.38835 10.9438 5.1411 8.40212 8.48716 8.40212C8.86322 8.40212 9.23172 8.43443 9.58991 8.49562L9.55141 8.49012C9.5686 9.76131 9.51704 11.0332 9.51704 12.3044C9.22622 12.1992 8.89072 12.138 8.54079 12.138C7.25654 12.138 6.1641 12.9589 5.75985 14.1049L5.75366 14.1256C5.66222 14.4191 5.60929 14.7567 5.60929 15.1059C5.60929 15.2476 5.61822 15.3878 5.63472 15.5253L5.63335 15.5088C5.8616 16.9154 7.06747 17.9769 8.52154 17.9769C8.56347 17.9769 8.60472 17.9762 8.64597 17.9742H8.63979C9.6456 17.9439 10.5187 17.4029 11.0123 16.6033L11.0192 16.5909C11.2028 16.3352 11.3286 16.0258 11.3705 15.6896L11.3712 15.68C11.4572 14.1421 11.4228 12.6131 11.431 11.0751C11.4393 7.61287 11.4228 4.15887 11.4482 0.705555L11.451 0.707617Z" fill="#FFF5EA"/>
                        </svg>
                    </div>
                </div>
                <div className="col-span-6 grid grid-cols-6 md:col-start-4 grid-gap">
                    <div className="col-span-2 flex flex-col gap-3 md:border-l md:border-almond md:pl-3">
                        <div className="font-primary text-almond text-base leading-5">
                            <p className="font-bold text-lg leading-5">Adress</p>
                            <p className="mt-1">Pohjoisesplanadi 35,<br />00100 Helsinki</p>
                        </div>
                        <div className="font-primary text-almond text-base leading-5">
                            <p className="font-bold text-lg leading-5">Phone</p>
                            <p className="mt-1">0449889108</p>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-3  border-l border-almond pl-3">
                        <div className="font-primary text-almond text-base leading-5">
                            <p className="font-bold text-lg leading-5">Adress</p>
                            <p className="mt-1">8:00-18:00</p>
                        </div>
                        <div className="font-primary text-almond text-base leading-5">
                            <p className="font-bold text-lg leading-5">Phone</p>
                            <p className="mt-1">9:00-18:00</p>
                        </div>
                        <div className="font-primary text-almond text-base leading-5">
                            <p className="font-bold text-lg leading-5">Phone</p>
                            <p className="mt-1">10:00-16:00</p>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-3  border-l border-almond pl-3">
                        <div className="font-primary text-almond text-base leading-5">
                            <p className="font-bold text-lg leading-5">Adress</p>
                            <p className="mt-1">Home</p>
                            <p>About</p>
                            <p>Menu</p>
                            <p>Localisation</p>
                            <p>Contact</p>
                            <p>Legal Mention</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 lg:col-span-3 col-start-2 md:col-start-8 flex items-end justify-end">
                    <p className="col-span-5 lg:col-span-3 col-start-2 md:col-start-8 font-primary text-almond text-right">designed and developer by Lucas Protch</p>
                </div>
            </div>
        </div>
    </section>
  );
}
