"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reviewSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    "default": 0
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}); //schema will define how we will save our data user*/

var productSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    "default": 0,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  countInStock: {
    type: Number,
    "default": 0,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dlc: {
    type: String,
    required: true
  },
  jourRestant: {
    type: Number,
    required: true,
    "default": 0
  },
  rating: {
    type: Number,
    "default": 0,
    required: true
  },
  numReviews: {
    type: Number,
    "default": 0,
    required: true
  },
  reviews: [reviewSchema]
});

var productModel = _mongoose["default"].model("Product", productSchema);

var _default = productModel;
exports["default"] = _default;