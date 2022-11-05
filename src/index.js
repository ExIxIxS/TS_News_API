"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/styles/normalize.css");
//  import './assets/styles/style.css';
const app_1 = __importDefault(require("./components/app/app"));
require("./global.css");
const app = new app_1.default();
app.start();
