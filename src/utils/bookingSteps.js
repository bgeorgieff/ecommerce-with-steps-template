import { ReactComponent as ServiceBlue } from "../images/service-type-blue.svg";
import { ReactComponent as LocationBlue } from "../images/location-blue.svg";
import { ReactComponent as CarBlue } from "../images/car-blue.svg";
import { ReactComponent as PaymentBlue } from "../images/payment.svg";
import { ReactComponent as TickBlue } from "../images/tick-blue.svg";

import { ReactComponent as LocationGrey } from "../images/location-grey.svg";
import { ReactComponent as CarGrey } from "../images/car-grey.svg";
import { ReactComponent as PaymentGrey } from "../images/payment-grey.svg";
import { ReactComponent as TickGrey } from "../images/tick-grey.svg";

export const bookingSteps = [
  {
    name: "Hizmet Seçimi",
    imageBlue: <ServiceBlue />,
    imageGrey: <ServiceBlue />,
  },
  {
    name: "Bilgileriniz",
    imageBlue: <LocationBlue />,
    imageGrey: <LocationGrey />,
  },
  {
    name: "Araba Modeliniz",
    imageBlue: <CarBlue />,
    imageGrey: <CarGrey />,
  },
  {
    name: "Anahtar Tipi & Ödeme",
    imageBlue: <PaymentBlue />,
    imageGrey: <PaymentGrey />,
  },
  {
    name: "Şiparişi Tamamla",
    imageBlue: <TickBlue />,
    imageGrey: <TickGrey />,
  },
];
