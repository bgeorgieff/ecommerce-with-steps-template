import { ReactComponent as ServiceBlue } from "../../../assets/icons/service-type-blue.svg";
import { ReactComponent as LocationBlue } from "../../../assets/icons/location-blue.svg";
import { ReactComponent as CarBlue } from "../../../assets/icons/car-blue.svg";
import { ReactComponent as PaymentBlue } from "../../../assets/icons/payment.svg";
import { ReactComponent as TickBlue } from "../../../assets/icons/tick-blue.svg";

import { ReactComponent as LocationGrey } from "../../../assets/icons/location-grey.svg";
import { ReactComponent as CarGrey } from "../../../assets/icons/car-grey.svg";
import { ReactComponent as PaymentGrey } from "../../../assets/icons/payment-grey.svg";
import { ReactComponent as TickGrey } from "../../../assets/icons/tick-grey.svg";

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
