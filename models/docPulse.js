//const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const DocPulseSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        source_name : {
            type: String,
            required: true
        },
        commit_id :{
            type: String,
            required: true
        },
        link :{
            type: String,
            required: true
        },
        what_changed: {
            type: String,
            required: true
        },
        product_name :{
            type: String,
            required: true
        },
        tag : {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

module.exports = mongoose.model("DocPulse", DocPulseSchema);