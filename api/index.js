import express from "express";
const app = express();
const PORT_NO = 6666;
app.listen(PORT_NO, () => console.log(`Listening to Port No ${PORT_NO}`));
