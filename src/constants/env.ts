type AppEnv = "dev" | "stag" | "prod";

// General
const APP_NAME = process.env.APP_NAME ?? "Portfolio";
const APP_VERSION = process.env.APP_VERSION ?? "1.0.0";
const APP_ENV = (process.env.APP_ENV ?? "dev") as AppEnv;
const ROOT_DOMAIN = process.env.ROOT_DOMAIN ?? "Root_Domain";
const DB_URI = process.env.MONGODB_URI ?? "";
const MODE = process.env.MODE ?? "dev";
const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "";
const ADMIN_ACCESS = process.env.NEXT_PUBLIC_ADMIN_ACCESS ?? "";
const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

const BREVO = {
  API_KEY: process.env.BREVO_API_KEY || "",
  NAME: process.env.SENDER_NAME || "",
  EMAIL: process.env.SENDER_EMAIL || "",
};

export {
  APP_NAME,
  APP_VERSION,
  APP_ENV,
  ROOT_DOMAIN,
  DB_URI,
  MODE,
  ADMIN_SECRET,
  ADMIN_ACCESS,
  BREVO,
  SITE_URL,
  ADMIN_EMAIL,
};
