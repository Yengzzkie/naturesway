"use client";
import { BouncyCardsFeatures } from "./components/BounceCard";
import ReprintLabel from "../app/how-to-reprint-label/page";
import LoblawsShoppers from "../app/setting-apointment-for-loblaws-shoppers/page"
import McKessonSkid from "./posting-mckesson-skid-order/page";
import DayAndRoss from "./day-and-ross-sop/page";
import { Hero } from "./components/Hero";

const content = [
  {
    id: "1",
    title: "How To Print / Reprint Packing Slip or Label",
    bg: "bg-gradient-to-br from-green-400 to-green-200",
    component: <ReprintLabel />,
  },
  {
    id: "2",
    title: "Loblaw / Shopper's Drugmart 4-Way Skid",
    bg: "bg-gradient-to-br from-brown-300 to-yellow-700",
    component: <LoblawsShoppers />,
  },
  {
    id: "3",
    title: "McKesson Skid Order",
    bg: "bg-gradient-to-br from-indigo-400 to-purple-400",
    component: <McKessonSkid />,
  },
  {
    id: "4",
    title: "Day & Ross SOP",
    bg: "bg-gradient-to-br from-pink-400 to-red-400",
    component: <DayAndRoss />,
  },
  {
    id: "5",
    title: "Content 4",
    bg: "bg-gradient-to-br from-pink-400 to-red-400",
    component: <ReprintLabel />,
  },
  {
    id: "6",
    title: "Content 5",
    bg: "bg-gradient-to-br from-pink-400 to-red-400",
    component: <ReprintLabel />,
  },
  {
    id: "7",
    title: "Content 6",
    bg: "bg-gradient-to-br from-pink-400 to-red-400",
    component: <ReprintLabel />,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="p-4 grid grid-cols-[1fr] lg:grid-cols-[1fr,1fr,1fr,1fr]">
        {content.map((content) => (
          <div key={content.id}>
            <BouncyCardsFeatures content={content} />
          </div>
        ))}
      </div>
    </div>
  );
}
