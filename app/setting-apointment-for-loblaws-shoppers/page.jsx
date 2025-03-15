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
import handlingUnit from "@/public/handling-unit.png";
import vlo2n from "@/public/vlo2n.png";
import BOL from "@/public/BOL.png";
import ZPSTAT from "@/public/ZPSTAT.png";
import displayDelivery from "@/public/display-delivery-detail.png";
import HUidentification from "@/public/HU-identification.png";
import SupplyMgmt from "@/public/supply-mgmt.png";
import createShipment from "@/public/create-shipment.png";
import matrixDc30 from "@/public/matrixdc30.png";
import greenBackBtn from "@/public/green-back-btn.png";
import NotificationAlert from "../components/NotificationAlert";

const steps = [
  {
    text: "Go to VLo2N transaction",
    img: vlo2n.src,
  },
  {
    text: "Type the Delivery # and press Enter",
    img: null,
  },
  {
    text: (
      <>
        Type <strong>P02</strong> for pallet
      </>
    ),
    img: null,
  },
  {
    text: "Only for Loblaw/ shopper drug Mart, You don't need to change hat/partner because it already says LA (logistics alliance).",
    img: null,
  },
  {
    text: "Double click handling unit#.",
    img: handlingUnit.src,
  },
  {
    text: (
      <>
        Put <strong>Logistics Alliance</strong> as a tracking# only for one
        pallet if you have more than one pallet.
      </>
    ),
    img: HUidentification.src,
  },
  {
    text: "Save and post the order",
    img: null,
  },
  {
    text: "Use bulk burn transaction VL74, select everything and execute to print labels and packing slip.",
    img: null,
  },
  {
    text: (
      <>
        <NotificationAlert
          status={"warning"}
          text={"Don’t forget to put packing slip on the skid. (Loblaw)"}
        />
      </>
    ),
    img: null,
  },
  {
    text: "After wrapping the pallet, put invoice, and packing slip in separate envelope and put it on the same skid.",
    img: null,
  },
  {
    text: (
      <>
        Make BOL, go to (This PC &gt; public &gt; Canada &gt; warehouse &gt;
        Logistics alliance BOL) and select tab (see bottom of the excel sheet)
        for required customer and change highlighted areas accordingly to your
        order.
        <NotificationAlert
          status={"error"}
          text={
            "Please do not edit anything except the highlighted area, else it would destroy the excel formula."
          }
        />
      </>
    ),
    img: null,
  },
  {
    text: "Print two(2) copies",
    img: BOL.src,
  },
  {
    text: "Open logistics alliance portal/supply management",
    img: SupplyMgmt.src,
  },
  {
    text: "Select Nature’s way Canada unit 19 & 20",
    img: null,
  },
  {
    text: "Click the create tab and change highlighted areas according to your PO paper.",
    img: null,
  },
  {
    text: "Change the pickup date and delivery date. And schedule the pick up at least 48 hours and at least 96 hours for Shopper Moncton before the delivery date.",
    img: null,
  },
  {
    text: (
      <>
        <NotificationAlert
          status={"warning"}
          text={"Please make sure there is no holiday on the pickup date."}
        />
      </>
    ),
    img: null,
  },
  {
    text: "Change the pick up address, pick up date, our opening and closing time, delivery time, delivery address, lifts (# of skids) , weight, cube , cases and PO#.",
    img: null,
  },
  {
    text: "After changing the highlighted area, click Create (see at the bottom).",
    img: createShipment.src,
  },
  {
    text: "",
    img: matrixDc30.src,
  },
  {
    text: (
      <>
        For Loblaw, delivery address is{" "}
        <strong>
          <em>DC28-Aspect Logistics (SG GM HBC RP)</em>
        </strong>
      </>
    ),
    img: null,
  },
  {
    text: (
      <>
        For shopper Mississauga, delivery address is{" "}
        <strong>
          <em>MatrixDC-30 Miss ON L5T2R6.</em>
        </strong>{" "}
        (Schedule at least 48 hours before the delivery date)
      </>
    ),
    img: null,
  },
  {
    text: (
      <>
        For Shopper Moncton, delivery address is{" "}
        <strong>
          <em>MatrixDc10 MONC NB, E1H2S6.</em>
        </strong>{" "}
        (Schedule at least 96 hours before the delivery date).
      </>
    ),
    img: null,
  },
  {
    text: "How to check number of boxes.",
    img: null,
  },
  {
    text: "Click ZPSTAT transaction",
    img: ZPSTAT.src,
  },
  {
    text: "Tick display delivery details.",
    img: displayDelivery.src,
  },
  {
    text: "Click display delivery detail.",
    img: null,
  },
  {
    text: "Click Execute",
    img: null,
  },
  {
    text: "Go back, click the green button with left arrow on top. And look for your delivery #.",
    img: greenBackBtn.src,
  },
  {
    text: "You can find number of cases for shopper and Loblaw.",
    img: null,
  },
];

const LoblawsShoppers = () => {
  return (
    <div className="flex flex-col justify-center items-start py-10">
      <h1 className="text-gray-200 font-bold text-2xl mb-8">
        Loblaw / Shopper's Drugmart 4 way skid
      </h1>

      <NotificationAlert
        status="success"
        text="Use Blue Chep skids for Loblaws and Shopper's Drugmart orders."
      />

      <NotificationAlert
        status="warning"
        text="Loblaws and Shopper's Drugmart orders is picked as CSE (Cases) not as a per unit. 200mL = 11 boxes per layer, 500mL = 14 boxes per layer."
      />

      <Timeline className="mt-10">
        {steps.map((step, index) => (
          <TimelineItem key={index}>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-gray-300">
                <CheckIcon className="h-4 w-4 text-gray-900" />
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

export default LoblawsShoppers;
