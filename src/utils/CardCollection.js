import lostKeyImg from "../images/lostkey-1.png";
import copyKeyImg from "../images/copykey-1.png";

export const homePageServiceItems = [
  { 
    id: 1,
    img: lostKeyImg,
    serviceName: "newKey",
    styles: {
      width: "350px",
      height: "431px",
    },
    header: "Anahtarımı Kaybettim",
    text: `Anahtarınızı mı kaybettınız üzülmeyin uzman ekibimiz gelip en hızlı şekilde size yeni anahtarınızı hazırlayacaktır.`,
    cta: "Hizmenti AI",
  },
  {
    id: 2,
    img: copyKeyImg,
    serviceName: "copyKey",
    styles: {
      width: "350px",
      cardHeight: "431px",
    },
    header: "Anatarımı Kopyala",
    text: `Anahtarınızı kopyalamaya mı ihtiyacınız var uzman ekibimiz hemen hızlı bir şekilde sizlere destek verecektır.`,
    cta: "Hizmenti AI",
  },
];

export const aboutPageServiceItems = [
  {
    styles: {
      width: "160px",
      height: "147px",
      fontSize: "64px",
    },
    header: "12k+",
    text: "keys created",
  },
  {
    styles: {
      width: "160px",
      height: "147px",
      fontSize: "64px",
    },
    header: "7k+",
    text: "customers satisfied",
  },
  {
    styles: {
      width: "160px",
      height: "147px",
      fontSize: "64px",
    },
    header: "27",
    text: "cities covered",
  },
  {
    styles: {
      width: "160px",
      height: "147px",
      fontSize: "64px",
    },
    header: "64",
    text: "dealers",
  },
  {
    styles: {
      width: "160px",
      height: "147px",
      fontSize: "64px",
    },
    header: "243",
    text: "some information",
  },
];
