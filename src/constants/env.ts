type AppEnv = "dev" | "stag" | "prod";

// General
const APP_NAME = process.env.APP_NAME ?? "Portfolio";
const APP_VERSION = process.env.APP_VERSION ?? "1.0.0";
const APP_ENV = (process.env.APP_ENV ?? "dev") as AppEnv;
const ROOT_DOMAIN = process.env.ROOT_DOMAIN ?? "Root_Domain";
const DB_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017/portfolio";

export { APP_NAME, APP_VERSION, APP_ENV, ROOT_DOMAIN, DB_URI };
