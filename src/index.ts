require("regenerator-runtime");
require("dotenv/config");

import app from "./utils/app";

const PORT = process.env.PORT || 4000;

const api = app.listen(PORT, () => console.info(`API running on port ${PORT}`));

export default api;
