import moment from 'moment';

export default {
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const now = moment().format('YYYY-MM-DD HH:mm:ss');
    return new Response(`Hello from bun on Northflank!\nThe time is ${now}.\nThis is ${url.pathname}.`);
  }
};
