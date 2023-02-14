import express from "express";
import { createZipCode, getZipCode } from "../controller/zipcode.controller.js";

const zipcodeRoutes = express.Router()

zipcodeRoutes.route("/")
.get(getZipCode)

export default zipcodeRoutes
