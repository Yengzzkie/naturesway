"use client";
import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import printlabel from "@/public/how-to-reprint-label-img-1.png";
import vl74 from "@/public/vl74.png";
import NotificationAlert from "../components/NotificationAlert";

const steps = [
  {
    text: 'If you want to reprint packing slip or label, put "2" in processing mode',
    img: null,
  },
  {
    text: "Open VL74 transaction",
    img: vl74.src,
  },
  {
    text: "Put the Delivery Number in Outbound Delivery Number",
    img: null,
  },
  {
    text: "Click Execute",
    img: null,
  },
  {
    text: "",
    img: printlabel.src,
  },
  {
    text: "Select the HU Number and click Execute",
    img: printlabel.src,
  },
];

const ReprintLabel = () => {
  return (
    <div className="flex flex-col text-gray-100 justify-center items-start py-10">
      <h1 className="font-bold text-2xl mb-8">
        Print / Reprint Packing Slip or Label
      </h1>

      <NotificationAlert
        status="warning"
        text="From now on, we will put packing slip for every Skid Order."
      />

      <Timeline className="mt-10">
        {steps.map((step, index) => (
          <TimelineItem key={index}>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-gray-300">
                <CheckIcon className="text-gray-900 h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="orange">
                Step {index + 1}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gray" className="font-normal text-gray-400">
                {step.text}
              </Typography>
              {step.img && (
                <div className="w-[75%] mt-4">
                  <img src={step.img} alt={`Step ${index + 1}`} />
                </div>
              )}
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default ReprintLabel;
