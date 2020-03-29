import http  from "k6/http";
import { sleep, check } from "k6";
export let options = {
    stages: [
        {duration:'30s',target:1},
        {duration:'30s',target:5},
        {duration:'10s',target:0},
    ],
    thresholds: {
        // Declare a threshold over all HTTP response times,
        // the 95th percentile should not cross 500ms
        http_req_duration: ["p(95)<100"]

    
    }
};
export default function() {
let res = http.get('http://test.k6.io');
check (res, {
    'status was 200': r => r.status == 200
       
});
sleep(1);
}
