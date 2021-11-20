export const getNav = (user) => {
  const registeredUser = [
    {
      option: "Anasayfa",
      link: "/",
    },
    {
      option: "Hizmetler",
      link: "/service-page",
    },
    {
      option: "Bayilik",
      link: "/",
    },
    {
      option: "Hakkımızda",
      link: "/about-us",
    },
    {
      option: "İletişim",
      link: "/contact-us",
    },
    {
      option: "Log Out",
      link: "/logout",
    },
  ];

  const guestUser = [
    {
      option: "Anasayfa",
      link: "/",
    },
    {
      option: "Hizmetler",
      link: "/service-page",
    },
    {
      option: "Bayilik",
      link: "/",
    },
    {
      option: "Hakkımızda",
      link: "/about-us",
    },
    {
      option: "İletişim",
      link: "/contact-us",
    },
    {
      option: "Giriş",
      link: "/login",
    },
  ];

  return user ? registeredUser : guestUser;
};
