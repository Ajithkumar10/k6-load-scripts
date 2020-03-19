pipeline {
    agent any 
    stages {
        stage ('Performance Testing'){
            steps {
                echo 'Running k6 Performance tests...'
                sh 'brew install k6'
                sh 'k6 run scripts/sample.js'
                echo 'Completed Running K6 performance tests!'
            }

        }
    }
}
