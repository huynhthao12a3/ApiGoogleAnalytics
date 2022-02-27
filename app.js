var input = document.getElementById('day-request')
import $ from 'jquery'
function ajaxPostFunction(url, data, successCallback, errorCallback = undefined) {

     $.ajax({
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         type: 'POST',
         url: url,
         data: JSON.stringify(data),
         dataType: 'json',
         success: successCallback,
         error: errorCallback
     });
 }

 function callApi() {
         let d = {
             client_id: '910564561544-n76kbt2v5r8nt2krqi3deej7g79tk3dn.apps.googleusercontent.com',
             client_secret: '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',
             refresh_token: '1//0gYsFBnDW8AkVCgYIARAAGBASNwF-L9IrXWlEP--GYThM1ASfJEiC-BqKPnmN223AfQt0u9QV5h1AitbxCQFblGnE1e7y3yAgVMk',
             grant_type: 'refresh_token',
         }
         ajaxPostFunction('https://accounts.google.com/o/oauth2/token', d, function (res) {
             if (res.access_token) {
                 localStorage.setItem('access_token', res.access_token);
             } else {
                 console.log(res.Message);
             }
         })
     }
function test() {
     let url = 'https://www.googleapis.com/analytics/v3/data/ga'
     let accessToken = 'ya29.A0ARrdaM9gzkQrcm10jsI72aVybyhv1-zgl223unU0tG6Q4AXTTYAUM_6leUHQhNodgOqMEfCxF2sR_xanPiPiDBe7lJPUfNEMTfR2Ikrs94U5w99hqFjBYeDGVUgLV_UbZLhdB99oyt7ksIkHX55cxuBxpo6b'
     let viewID = 'ga:230262499'
     let metrics = 'ga:pageviews'
}