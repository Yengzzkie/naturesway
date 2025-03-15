"use client";
import React, { useState } from "react";
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
import SpringModal from "../components/SpringModal";
import handlingUnit from "@/public/handling-unit.png";
import vlo2n from "@/public/vlo2n.png";
import DayNRossPass from "@/public/daynross-password.png"
import DayNRossLogin from "@/public/daynross-login.png"
import DayNRossLTL from "@/public/LTL.png"
import CreateShipment from "@/public/daynross-create-shipment.png"
import ShipperDetail from "@/public/shipper-details.png"
import BillingInfo from "@/public/billing-info.png"
import PalletInfo from "@/public/pallet-info.png"
import AdditionalInfo from "@/public/additional-info.png"
import AdditionalServices from "@/public/additional-services.png"
import PickupDate from "@/public/pickup-date.png"
import SpecialInstructions from "@/public/special-instructions.png"
import DayNRossBOL from "@/public/daynross-bol.png"
import SubmitShipment from "@/public/submit-shipment.png"

import ClickLogin from "@/public/clicklogin.png"
import BOL from "@/public/BOL.png";
import ZPSTAT from "@/public/ZPSTAT.png";
import displayDelivery from "@/public/display-delivery-detail.png";
import HUidentification from "@/public/HU-identification.png";
import SupplyMgmt from "@/public/supply-mgmt.png";
import createShipment from "@/public/create-shipment.png";
import matrixDc30 from "@/public/matrixdc30.png";
import greenBackBtn from "@/public/green-back-btn.png";
import NotificationAlert from "../components/NotificationAlert";
import Link from "next/link";

const steps = [
  {
    text: (<>Go to <Link href={"https://dayross.com/"}><span className="bold underline text-blue-300">Day and Ross' Website</span></Link></>),
    img: null,
  },
  {
    text: "Put login ID and password. ",
    img: DayNRossPass.src,
  },
  {
    text: "Click login/register.",
    img: DayNRossLogin.src,
  },
  {
    text: "Select LTL/Truckload for partial shipment.",
    img: DayNRossLTL.src,
  },
  {
    text: "Then click login.",
    img: ClickLogin.src,
  },
  {
    text: "Click create shipment.",
    img: CreateShipment.src,
  },
  {
    text: "Enter shipper details",
    img: ShipperDetail.src,
  },
  {
    text: "Use 088501 for billing.",
    img: BillingInfo.src,
  },
  {
    text: "Put Total pieces/no of skids, Weight, Length=48 and width=40, Measure the height.",
    img: null,
  },
  {
    text: "Put health supplements in description. ",
    img: null,
  },
  {
    text: "Click the save button. ",
    img: null,
  },
  {
    text: "",
    img: PalletInfo.src,
  },
  {
    text: "",
    img: AdditionalInfo.src,
  },
  {
    text: "Click Next",
    img: null,
  },
  {
    text: "If you want any additional services, choose it from here. If you do not need any additional services, go to next page by clicking next. ",
    img: AdditionalServices.src,
  },
  {
    text: "If you want them to get appointment delivery, please click appointment delivery and then click next. ",
    img: null,
  },
  {
    text: "Choose a pickup date.",
    img: null,
  },
  {
    text: "Pick time/ Ready time, should be before 3pm. (Closing time is always 5pm. )",
    img: PickupDate.src,
  },
  {
    text: "If you have any special instructions, type it in the text field.  ",
    img: SpecialInstructions.src,
  },
  {
    text: "Click next",
    img: null,
  },
  {
    text: "Then submit the shipment.",
    img: null,
  },
  {
    text: "Use TOR6837260(just a example) as a tracking #, put in handling unit.",
    img: null,
  },
  {
    text: "For Day and Ross, use DAYR as scac/partner code ",
    img: null,
  },
  {
    text: "",
    img: DayNRossBOL.src,
  },
  {
    text: "",
    img: SubmitShipment.src,
  },
  {
    text: "Click display delivery detail.",
    img: null,
  },
  {
    text: "Download the BOL and print one copy. One for us and one for carrier. And put the tracking# on front of the skid.",
    img: null,
  },
];

const DayAndRoss = () => {
  return (
    <div className="flex flex-col justify-center items-start py-10">
      <h1 className="text-gray-200 font-bold text-2xl mb-8">
        Day & Ross SOP
      </h1>

      <Timeline className="mt-10">
        {steps.map((step, index) => {
          const [isOpen, setIsOpen] = useState(false);
          return (
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
                  <div
                    className="w-[50%] mt-4 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <img src={step.img} alt={`Step ${index + 1}`} />
                    <SpringModal
                      stepImg={step.img}
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                    />
                  </div>
                )}
              </TimelineBody>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default DayAndRoss;
