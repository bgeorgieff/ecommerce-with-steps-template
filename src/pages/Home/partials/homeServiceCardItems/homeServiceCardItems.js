import lostKeyImg from "assets/icons/lostkey-1.svg";
import copyKeyImg from "assets/icons/copykey-1.svg";

const homePageServiceItems = [
  {
    name: "lost-key",
    img: lostKeyImg,
    serviceName: "newKey",
    styles: {
      width: "350px",
      height: "500px",
    },
    header: "Anahtarımı Kaybettim",
    text: `Anahtarınızı mı kaybettınız üzülmeyin uzman ekibimiz gelip en hızlı şekilde size yeni anahtarınızı hazırlayacaktır.`,
    cta: "Hizmenti AI",
  },
  {
    name: "copy-key",
    img: copyKeyImg,
    serviceName: "copyKey",
    styles: {
      width: "350px",
      cardHeight: "500px",
    },
    header: "Anatarımı Kopyala",
    text: `Anahtarınızı kopyalamaya mı ihtiyacınız var uzman ekibimiz hemen hızlı bir şekilde sizlere destek verecektır.`,
    cta: "Hizmenti AI",
  },
];

export default homePageServiceItems;
