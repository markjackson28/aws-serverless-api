'use strict';

let uuid = require('uuid').v4;
let peopleModel = require('./people.schema');

exports.handler = async (event) => {

  console.log('EVENT', event);

  try {
    const { name, phone } = JSON.parse(event.body);
    const id = uuid();

    const record = new peopleModel({ id, name });
    console.log('RECORD', record);

    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (err) {
    return {
      statusCode: 500,
      response: err.message,
    };
  }
};
