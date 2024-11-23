// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import navbar from "../../public/locales/en/navbar.json";
import home from "../../public/locales/en/home.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    resources: {
      navbar: typeof navbar;
      home: typeof home;
    };
  }
}
