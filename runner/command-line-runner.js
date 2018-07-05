/**
 * Created by sudhir.m on 22/03/17.
 */
const transformHelper = require("../index");


let data = {

    items: [
        {
            details: {
                name: "alex",
                lastname: "fotis"
            }
        },
        {
            details: {
                name: "chris"
            }
        }
    ],
    requests: [
        {
            boss: "test"
        },
        {
            boss: "test2"
        }
    ]
};


let transformation = {

    mapping: {
        list: "requests",
        item: {
            name: "^items.{i}.details.name"
        }
    }

};

let result = transformHelper.transform(data, transformation);
console.log(result);