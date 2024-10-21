pipeline {
    agent any

    stages {
        stage('w/o docker') {
            steps {
                sh '''echo Without docker
                touch "containerN.txt"
                '''
            }
        }

        stage('w/ docker') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''echo With docker
                        touch containerY.txt
                 '''            }
        }
    }
}