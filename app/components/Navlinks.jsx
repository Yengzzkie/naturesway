import Link from "next/link";

const links = [
  { title: "How to print and reprint Packing Slip or Label", href: "/how-to-reprint-label", color: "bg-red-500" },
  { title: "Setting Appointment for Loblaws / Shoppers Drugmart", href: "/setting-apointment-for-loblaws-shoppers", color: "bg-blue-500" },
  { title: "How to Receive a Shipment", href: "/how-to-receive-a-shipment", color: "bg-green-500" },
  { title: "Setting an Appointment from Day & Ross", href: "/setting-appointment-from-day-and-ross", color: "bg-yellow-500" },
  { title: "Posting Amazon Skid Order", href: "/posting-amazon-skid-order", color: "bg-purple-500" },
  { title: "Posting Amazon Order via UPS", href: "/posting-amazon-order-via-ups", color: "bg-pink-500" },
  { title: "Posting McKesson Skid Order", href: "/posting-mckesson-skid-order", color: "bg-orange-500" },
  { title: "Posting McKesson Order via UPS", href: "/posting-mckesson-via-ups", color: "bg-teal-500" },
];

export default function Navlinks() {
  return (
    <div className="p-4 sticky top-0 left-0">
      <Link href="/">
        <h1 className="text-center font-bold text-3xl">Nature&apos;s Way Pickering</h1>
      </Link>
      <div className="flex flex-col gap-4 p-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <div
              className={`w-full h-48 ${link.color} flex items-center justify-center text-white font-bold rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 p-6`}
            >
              {link.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}