pipeline {
    agent any 
    stages {
        stage ('Performance Testing'){
            steps {
                echo 'Running K6 performance tests...'
                sh 'sudo chmod +x setup_k6.sh'
                sh 'sudo ./setup_k6.sh
                sh 'k6 run scripts/sample.js'
                echo 'Completed Running K6 performance tests!'
            }

        }
    }
}
