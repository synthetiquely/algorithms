const topoSort = require('./index');

const graph = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

console.log('Result', topoSort(graph));
