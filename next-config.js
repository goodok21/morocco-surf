module.exports = {
  i18n: {
    locales: ["en", "fr", "ru"],
    defaultLocale: "en",
    localeDetection: false,
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en"
      },
      {
        domain: "example.fr",
        defaultLocale: "fr"
      },
      {
        domain: "example.ru",
        defaultLocale: "ru"
      }
    ]
  }
};
