"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer = require("puppeteer");
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.runScenarioRobot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, rechecher, error_1, index, element, text, err2_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, puppeteer.launch({ headless: true })];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        return [4 /*yield*/, page.goto("https://www.welcometothejungle.com/fr/jobs?refinementList%5Boffices.country_code%5D%5B%5D=FR&refinementList%5Bremote%5D%5B%5D=fulltime&refinementList%5Bcontract_type%5D%5B%5D=APPRENTICESHIP&refinementList%5Bcontract_type%5D%5B%5D=FULL_TIME&refinementList%5Bcontract_type%5D%5B%5D=INTERNSHIP&refinementList%5Bcontract_type%5D%5B%5D=TEMPORARY&searchTitle=false&page=1&aroundQuery=Paris%2C%20France&aroundLatLng=48.85718%2C2.34141&aroundPrecision=20000&aroundRadius=20000")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.delay(7000)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 9, , 10]);
                        return [4 /*yield*/, page.waitForXPath('/html/body/div[2]/div/div/div[1]/div[2]/button[3]')];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, page.$x('/html/body/div[2]/div/div/div[1]/div[2]/button[3]')];
                    case 7:
                        rechecher = _a.sent();
                        return [4 /*yield*/, rechecher[0].click()];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 10];
                    case 10: return [4 /*yield*/, this.delay(1000)];
                    case 11:
                        _a.sent();
                        index = 1;
                        _a.label = 12;
                    case 12:
                        if (!(index < 33)) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.delay(500)];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14:
                        _a.trys.push([14, 17, , 18]);
                        return [4 /*yield*/, page.$x('/html/body/div[1]/div[1]/div/div/div/div[2]/div/ol/div[' + index + ']/li/div/div/div[2]/a/h4/div')];
                    case 15:
                        element = (_a.sent())[0];
                        return [4 /*yield*/, page.evaluate(function (element) { return element.textContent; }, element)];
                    case 16:
                        text = _a.sent();
                        console.log(text);
                        return [3 /*break*/, 18];
                    case 17:
                        err2_1 = _a.sent();
                        console.log(err2_1);
                        return [3 /*break*/, 18];
                    case 18:
                        index++;
                        return [3 /*break*/, 12];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    Robot.prototype.delay = function (time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    };
    return Robot;
}());
exports.default = Robot;
new Robot().runScenarioRobot();
