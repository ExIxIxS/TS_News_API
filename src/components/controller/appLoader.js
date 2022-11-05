"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = __importDefault(require("./loader"));
class AppLoader extends loader_1.default {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2910f32fafd74f1bba963220e2144693', // получите свой ключ https://newsapi.org/
        });
    }
}
exports.default = AppLoader;
