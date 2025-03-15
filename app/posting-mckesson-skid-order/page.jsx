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
import ATSBOL from "@/public/ATS-BOL.png";
import ATSBarcode from "@/public/ATS-barcode.png";
import VL02N from "@/public/vlo2n.png";
import HAT from "@/public/hat.png";
import DocumentFlow from "@/public/document-flow.png";
import Partner from "@/public/partner.png";
import ForwardingAgent from "@/public/forwarding-agent.png";
import ForwardingAgent2 from "@/public/forwarding-agent2.png";
import TrackingLabel from "@/public/tracking-label.png";
import HUTracking from "@/public/HU-tracking.png";
import HandlingUnit from "@/public/handling-unit.png";
import VL74 from "@/public/vl74.png";
import BulkBarnLabel from "@/public/bulkbarn-label.png";
import OutputHU from "@/public/Output-HU.png";
import EmailTemplate from "@/public/email-template.png";
import HUidentification from "@/public/HU-identification.png";

import NotificationAlert from "../components/NotificationAlert";

const steps = [
  {
    text: "Pick like a normal skid order. ",
    img: null,
  },
  {
    text: "Use original box for every product, if same product but different lot#, put in original box and write on the box different lot #.",
    img: null,
  },
  {
    text: (
      <>
        <NotificationAlert
          status={"warning"}
          text={"Use ATS For McKesson-Trenton"}
        />
      </>
    ),
    img: ATSBOL.src,
  },
  {
    text: "Stick labels to the skid for # of pallets you pick. eg.: If you pick two skids, put two labels.",
    img: ATSBarcode.src,
  },
  {
    text: "Go to VL02N transaction.",
    img: VL02N.src,
  },
  {
    text: "Put the delivery #.",
    img: HUidentification.src,
  },
  {
    text: "Click the Hat or press F8",
    img: HAT.src,
  },
  {
    text: "Click Document flow (4th icon from the left)",
    img: DocumentFlow.src,
  },
  {
    text: "Click partner and change the forwarding agent to ATSL. Press enter. ",
    img: Partner.src,
  },
  {
    text: "",
    img: ForwardingAgent.src,
  },
  {
    text: "",
    img: ForwardingAgent2.src,
  },
  {
    text: "Use P02 for skid, then double click handling unit and use ATS BOL# as a tracking#. In “HU identification 2",
    img: null,
  },
  {
    text: "If you pick two pallets, put tracking# for both. ",
    img: TrackingLabel.src,
  },
  {
    text: "For first pallet, put 2015101299-01 and for second one, put 2015101299-02. ",
    img: HandlingUnit.src,
  },
  {
    text: "",
    img: HUTracking.src,
  },
  {
    text: "Save and post the order. ",
    img: null,
  },
  {
    text: "Go to VL74 transaction and execute to print the label",
    img: VL74.src,
  },
  {
    text: "",
    img: BulkBarnLabel.src,
  },
  {
    text: (
      <>
        <NotificationAlert
          status={"error"}
          text={"Do not forget to stick the label on the skid. "}
        />
      </>
    ),
    img: BulkBarnLabel.src,
  },
  {
    text: "",
    img: OutputHU.src,
  },
  {
    text: "Email laujam@ats.ca and group-hvr_customerservice@ats.ca and cc Pickering. And ask her to deliver this order with appointment.",
    img: EmailTemplate.src,
  },
  {
    text: "She will send you the dispatch#, write the dispatch# on BOL. ",
    img: null,
  },
];

const McKessonSkid = () => {
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

export default McKessonSkid;
