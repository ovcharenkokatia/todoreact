var Jasmine = require('jasmine');
var jasmine = new Jasmine();


require('babel/register')({
  optional: ["es7.asyncFunctions"],
  stage: 0
});

jasmine.loadConfigFile('./jasmine.json');
jasmine.execute();