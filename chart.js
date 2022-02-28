// @{
//      ViewData["Title"] = "Page View";
//      Layout = "~/Areas/Admin/Views/Shared/_Layout.cshtml";
//  }
 
//  @section metatags {
//  <meta name="google-signin-client_id" content="910564561544-n76kbt2v5r8nt2krqi3deej7g79tk3dn.apps.googleusercontent.com">
//  <meta name="google-signin-scope" content="https://www.googleapis.com/auth/analytics.readonly">
//  }
//  <div class="d-flex justify-content-center">
//      <p class="g-signin2 mt-3" data-onsuccess="queryReports"></p>
//  </div>
//  <div class="container mt-4 bg-white">
//      <div class="d-none d-md-block row p-3 shadow">
//          <div class="col-md-12 chart-report ">
//              <canvas id="myChart"></canvas>
//          </div>
//      </div>
 
//      <div class="row bg-white shadow py-3 mt-4">
//          <div class="col-12 col-lg-6 border-right">
//              <div class="p-3">
//                  <p class="font-weight-bold">Thời gian thống kê</p>
//                  <div class="d-flex justify-content-between mb-3">
//                      <p class="m-0 p-0">Từ ngày : </p>
//                      <input type='date' class="start-date ml-3"></input>
 
//                  </div>
//                  <div class="d-flex justify-content-between">
//                      <p class="m-0 p-0">Đến ngày : </p>
//                      <input type='date' class="end-date ml-3"></input>
//                  </div>
//              </div>
 
//          </div>
//          <div class="col-12 col-lg-6 border-left">
//              <div class="p-3">
//                  <p class="font-weight-bold">Thống kê</p>
//                  <div class="form-group">
//                      <select id="slt-report" class="form-control float-right" data-toggle="select-no-search">
//                          <option value="ga:pageviews">Theo lượt xem trang</option>
//                          <option value="ga:sessions">Theo lượt truy cập</option>
//                          <option value="ga:users">Theo tất cả người dùng</option>
//                          <option value="ga:newUsers">Theo người dùng mới</option>
//                      </select>
//                  </div>
//                  <button type="button" class="btn btn-primary mt-3" onclick="queryReports()">Áp dụng</button>
 
//              </div>
//          </div>
//      </div>
 
//      <!-- Hiển thị bảng -->
//      <div class="row shadow mt-4">
//          <div class="col-md-12 p-3">
//              <div class="table-responsive">
//                  <table id="btn-product" class="table table-hover table-centered">
//                      <thead id="tbl-head">
//                          <tr class="text-center">
//                              <th class="">NGÀY</th>
//                              <th class="">THÁNG</th>
//                              <th class="">NĂM</th>
//                              <th class="">PAGEVIEWS</th>
//                              <th class="">DESKTOP</th>
//                              <th class="">MOBILE</th>
//                              <th class="">TABLET</th>
//                          </tr>
//                      </thead>
//                      <tbody id="tbl-body">
//                      </tbody>
//                  </table>
//              </div>
//          </div>
//      </div>
 
//  </div>
//  @section Scripts {
//  <!-- Chart -->
//  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
//  <!-- Api google analytics -->
//  <script src="https://apis.google.com/js/client:platform.js"></script>
 
//  <script>
//      // Đặt ngày giới hạn cho input date
//      function maxDate() {
//           let today = new Date();
//           let date = today.getFullYear() + '-' + `0${(today.getMonth() + 1)}`.slice(-2) + '-' + `0${today.getDate()}`.slice(-2);
//           document.querySelector('.start-date').setAttribute('max', date)
//           document.querySelector('.end-date').setAttribute('max', date)
//      }
//      maxDate()
 
//      // Query API
//      function queryReports() {
//           const inputStartDay = document.querySelector('.start-date');
//           const inputEndDay = document.querySelector('.end-date');
//           const $selectReport = $('#slt-report')
 
//           const startDate = inputStartDay.value || '30daysAgo';
//           const endDate = inputEndDay.value || 'today';
//           console.log(startDate, endDate);
//           const metrics = $selectReport.val()
//           //$("select#slt-report option:selected").val()
//           // document.getElementById("input").value == '' ? "ga:pageviews" : document.getElementById("input").value;
//           const dimensions = "ga:date";
//           const pivotDimension = "ga:deviceCategory";
//           const results = gapi.client.request({
//                path: '/v4/reports:batchGet',
//                root: 'https://analyticsreporting.googleapis.com/',
//                method: 'POST',
//                body: {
//                     "reportRequests":
//                          [
//                               {
//                                    "viewId": "230262499",
//                                    "dateRanges":
//                                         [
//                                              {
//                                                   "startDate": startDate,
//                                                   "endDate": endDate,
//                                              }
//                                         ],
//                                    "metrics":
//                                         [
//                                              {
//                                                   "expression": metrics,
//                                              }
//                                         ],
//                                    "dimensions":
//                                         [
 
//                                              {
//                                                   "name": dimensions,
//                                              }
//                                         ],
//                                    "pivots":
//                                         [
//                                              {
//                                                   "dimensions":
//                                                        [
//                                                             {
//                                                                  "name": pivotDimension,
//                                                             }
//                                                        ],
//                                                   // "maxGroupCount": 3,
//                                                   // "startGroup": 3,
//                                                   "metrics":
//                                                        [
//                                                             {
//                                                                  "expression": metrics,
//                                                             }
//                                                        ]
//                                              }
//                                         ],
 
//                               }
//                          ]
//                }
//           }).then(displayResults, console.error.bind(console));
//           console.log('queryReports')
 
//      }
 
 
//      var arr = []
 
//      function displayResults(response) {
//           console.log($('.g-signin2 span:first-child').css('display'))
//           if ($('.g-signin2 span:first-child').css('display') == 'none') {
//                $('.g-signin2').addClass('d-none')
//           }
//           // var formattedJson = JSON.stringify(response.result, null, 2);
//           console.log('displayResults');
//           arrHead = response.result.reports[0].columnHeader.metricHeader.pivotHeaders[0].pivotHeaderEntries;
//           arrBody = response.result.reports[0].data.rows
 
//           // console.log(arr[0].metrics[0].pivotValueRegions[0].values)
//           let htmlTblHead = ''
//           let htmlTblBody = ''
//           let total = 0;
//           let totalDesktop = 0;
//           let totalMobile = 0;
//           let totalTablet = 0;
//           // console.log(arrHead)
//           // htmlTblHead = `
//           //           <tr class="text-center">
//           //                          <th class="">Ngày</th>
//           //                          <th class="">Tháng</th>
//           //                          <th class="">Năm</th>
//           //                          <th class="">${arrHead[0].metric.name.slice(3)}</th>
//           //                          <th class="">${arrHead[0].dimensionValues[0]}</th>
//           //                          <th class="">${arrHead[1].dimensionValues[0] !== undefined ? arrHead[1].dimensionValues[0] : null}</th>
//           //                          <th class="">${arrHead[2].dimensionValues[0] !== undefined ? arrHead[2].dimensionValues[0] : null}</th>
//           //                     </tr>
//           // `
//           htmlTblHead = `<tr class='text-center'>
//                <th class="">NGÀY</th>
//                <th class="">THÁNG</th>
//                <th class="">NĂM</th>
//                <th class="">${arrHead[0].metric.name.slice(3).toUpperCase()}</th>
//                `
//           arrHead.forEach((item) => {
//                htmlTblHead += `<th>${item.dimensionValues[0]}</th>`.toUpperCase()
//           })
//           htmlTblHead += "</tr>"
 
//           arrBody.map(function (item, index) {
//                let value = arrBody[index].dimensions[0]
//                let date = value.slice(6, 8)
//                let month = value.slice(4, 6)
//                let year = value.slice(0, 4)
 
//                // Tính tổng
//                total += Number(arrBody[index].metrics[0].values[0])
//                totalDesktop += Number(arrBody[index].metrics[0].pivotValueRegions[0].values[0]);
//                totalMobile += Number(arrBody[index].metrics[0].pivotValueRegions[0].values[1]);
//                totalTablet += Number(arrBody[index].metrics[0].pivotValueRegions[0].values[2]);
 
//                htmlTblBody += `
//                <tr class="text-center">
//                     <td class="">${date}/${month}/${year}</td>
//                     <td class="">${month}/${year}</td>
//                     <td class="">${year}</td>
//                     <td class="">${arrBody[index].metrics[0].values[0]}</td>
 
//                `
//                // <td class="">${arrBody[index].metrics[0].pivotValueRegions[0].values[0]}</td>
//                //      <td class="">${arrBody[index].metrics[0].pivotValueRegions[0].values[1]}</td>
//                //      <td class="">${arrBody[index].metrics[0].pivotValueRegions[0].values[2]}</td>
//                arrBody[index].metrics[0].pivotValueRegions[0].values.forEach((i) => {
//                     htmlTblBody += `<td>${i}</td>`
//                })
//                htmlTblBody += "</tr>"
//           })
 
 
//           let htmlFirstRow = `
//                <tr class="text-center">
//                     <td class=""></td>
//                     <td class=""></td>
//                     <td class=""></td>
//                     <td class="">${total}</td>
//                `
//           // <td class="">${totalDesktop}</td>
//           //      <td class="">${totalMobile}</td>
//           //      <td class="">${totalTablet}</td>
//           const arrTest = [totalDesktop, totalMobile, totalTablet]
//           console.log(totalTablet === NaN)
//           arrTest.forEach((i) => {
//                if (!isNaN(i)) {
//                     htmlFirstRow += `<td>${i}</td>`
//                }
//           })
//           htmlFirstRow += "</tr>"
//           console.log(htmlFirstRow)
 
 
//           // Hiển thị lên table
//           document.getElementById("tbl-head").innerHTML = htmlTblHead
//           document.getElementById("tbl-body").innerHTML = htmlFirstRow.concat(htmlTblBody)
 
//           // ----- Hiển thị lên Chart -----
//           renderChart()
 
//      }
 
//      function renderChart() {
//           const labels = []
//           const dataDesktop = []
//           const dataMobile = []
//           const dataTablet = []
//           arrBody.map(function (item, index) {
//                // Lấy ngày/tháng/năm
//                let value = arrBody[index].dimensions[0]
//                let date = value.slice(6, 8)
//                let month = value.slice(4, 6)
//                let year = value.slice(0, 4)
//                labels.push(`${date}/${month}/${year}`)
 
//                // Lấy dữ liệu của các thiết bị
//                dataDesktop.push(arrBody[index].metrics[0].pivotValueRegions[0].values[0])
//                dataMobile.push(arrBody[index].metrics[0].pivotValueRegions[0].values[1])
//                dataTablet.push(arrBody[index].metrics[0].pivotValueRegions[0].values[2])
//           })
//           const data = {
//                labels: labels,
//                datasets: [
//                     {
//                          label: 'Desktop',
//                          data: dataDesktop,
//                          backgroundColor: '#5494FE'
//                     },
//                     {
//                          label: 'Mobile',
//                          data: dataMobile,
//                          backgroundColor: '#FE6383'
//                     },
//                     {
//                          label: 'Tablet',
//                          data: dataTablet,
//                          backgroundColor: 'yellow'
//                     },
//                ]
//           }
//           const config = {
//                type: 'bar',
//                data: data,
//                options: {
 
//                     // responsive: true,
//                     // scales: {
//                     //      x: {
//                     //           stacked: true
//                     //      },
//                     //      y: {
//                     //           stacked: true
//                     //      }
//                     // }
//                     // responsive: true,
//                     // maintainAspectRatio: false,
//                     plugins: {
//                          title: {
//                               display: true,
//                               text: `¤ Thống kê ${$('#slt-report :selected').text().toLowerCase()} ¤`,
//                               color: '#000000',
//                               font: {
//                                    size: 24,
//                                    weight: 'bold'
//                               },
//                               padding: {
//                                    top: 10,
//                                    bottom: 20
//                               }
//                          }
//                     },
//                     scales: {
//                          x: {
//                               stacked: true
//                          },
//                          y: {
//                               stacked: true
//                          },
 
//                     }
//                }
 
//           };
 
 
 
 
 
 
 
//           $("canvas#myChart").remove();
//           $("div.chart-report").append('<canvas id="myChart"></canvas>')
//           let myChart = new Chart(document.getElementById('myChart'), config);
//      }
 
 
//  </script>
//  }