// ------------------
          // function queryReports() {
          //      gapi.client.request({
          //           path: '/v4/reports:batchGet',
          //           root: 'https://analyticsreporting.googleapis.com/',
          //           method: 'POST',
          //           body: {
          //                "reportRequests":
          //                     [
          //                          {
          //                               "viewId": "230262499",
          //                               "dateRanges":
          //                                    [
          //                                         {
          //                                              "startDate": "2022-01-01",
          //                                              "endDate": "2022-01-31"
          //                                         }
          //                                    ],
          //                               "metrics":
          //                                    [
          //                                         {
          //                                              "expression": "ga:pageviews"
          //                                         }
          //                                    ],
          //                               "dimensions":
          //                                    [

          //                                         {
          //                                              "name": "ga:date"
          //                                         }
          //                                    ],
          //                               "pivots":
          //                                    [
          //                                         {
          //                                              "dimensions":
          //                                                   [
          //                                                        {
          //                                                             "name": "ga:deviceCategory"
          //                                                        }
          //                                                   ],
          //                                              // "maxGroupCount": 3,
          //                                              // "startGroup": 3,
          //                                              "metrics":
          //                                                   [
          //                                                        {
          //                                                             "expression": "ga:pageviews"
          //                                                        }
          //                                                   ]
          //                                         }
          //                                    ],

          //                          }
          //                     ]
          //           }
          //      }).then(displayResults, console.error.bind(console));
          //      //.execute(handleReportingResults)
          //      console.log('queryReports')
          // }