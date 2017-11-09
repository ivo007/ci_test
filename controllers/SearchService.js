'use strict';

exports.searchGET = function(args, res, next) {
  /**
   * Search for content
   * The Search endpoint returns information based on search criteria 
   *
   * externalId BigDecimal External Resource ID (optional)
   * originalTitle String original content title (optional)
   * productionYear String content's production year (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "total_pages" : 1.3579000000000001069366817318950779736042022705078125,
  "results" : "aeiou",
  "total_results" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

