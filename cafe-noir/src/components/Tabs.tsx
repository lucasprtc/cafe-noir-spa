"use client";
// components/Tabs.tsx
import { useState } from "react";

export type TabItem = {
  name: string;
  price: number | string;
};

export type Tab = {
  title: string;
  items: TabItem[];
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

    const getTabButtonClass = (index: number, isActive: boolean) => {
    // 🎨 Ici tu personnalises les 4 styles
    if (index === 0) {
      return isActive
        ? "bg-dark-blue text-almond"
        : "bg-transparent border-t-3 border-l-3 border-r-3 border-dark-blue text-dark-blue";
    } else if (index === 1) {
      return isActive
        ? "bg-light-blue text-almond"
        : "bg-transparent border-t-3 border-l-3 border-r-3 border-light-blue text-dark-blue";
    }
    // fallback générique si plus de tabs à l’avenir
    return isActive
        ? "bg-dark-blue text-almond"
        : "bg-transparent border-t-3 border-l-3 border-r-3 border-dark-blue text-dark-blue";
  };

  return (
    <div className="w-full">
      <div className="grid-layout grid-gap container-grid ">
        {tabs.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
                <button
                    key={tab.title}
                    onClick={() => setActiveIndex(index)}
                    className={`col-span-3 md:col-span-5 lg:col-span-3 text-lg md:text-2xl font-primary rounded-t-[10px] py-4 leading-5 md:leading-10 transition-colors ${getTabButtonClass(index, isActive)}`}
                >
                    {tab.title}
                </button>
            );
        })}
      </div>

      {/* Tab content */}
      <div className={`grid-layout px-4 md:px-[36px ] lg:px-20 md:text-xl grid-gap pb-9 ${activeIndex === 0 ? 'bg-dark-blue text-almond' : 'bg-light-blue text-dark-blue'}`}>
        {tabs[activeIndex].items.length === 0 ? (
          <p className="text-gray-500 col-span-6 md:col-span- 12">No items available</p>
        ) : (
          <ul className={`flex flex-col gap-4 py-10 col-span-6 md:col-span-12`}>
            {tabs[activeIndex].items.map((item) => (
              <li
                key={item.name}
                className={`flex justify-between border-b md:border-b-2 ${activeIndex === 0 ? 'border-almond': 'border-dark-blue'} py-2`}
              >
                <span>{item.name}</span>
                <span>{typeof item.price === "number" ? `${item.price.toFixed(2)}€` : item.price}</span>
              </li>
            ))}
          </ul>
        )}
        <img src="/About/mascot.png" className="col-span-2 md:col-span-3 lg:col-span-2 md:col-start-4 lg:col-start-7" alt="" />
        <img src="/About/mascot.png" className="col-span-2 md:col-span-3 lg:col-span-2" alt="" />
        <img src="/About/mascot.png" className="col-span-2 md:col-span-3 lg:col-span-2" alt="" />
      </div>
    </div>
  );
}
