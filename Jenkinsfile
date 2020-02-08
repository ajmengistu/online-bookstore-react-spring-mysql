pipeline {
    agent none
    stages {
        stage('Back-end') {
            agent {
                docker { image 'adoptopenjdk:11-jre-hotspot'}
            }
            steps {
                sh 'java --version'
                sh 'mvn --version'
            }
        }
        stage('Front-end') {
            agent {
                docker { image 'node:13-alpine' }
            }
            steps {
                sh 'node --version'
            }
        }
    }
}