pipeline {
    agent any 
    stages {
        stage ('Performance Testing'){
            steps {
                echo 'Running K6 performance tests...'
                sh 'sudo chmod +x setup_k6.sh'
                sh 'sudo ./setup_k6.sh'
                sh 'k6 run --out influxdb=http://http://13.233.192.178:8086/myk6db scripts/sample.js'
                echo 'Completed Running K6 performance tests!'
            }

        }
    }
}
