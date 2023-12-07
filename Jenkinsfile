pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('saaru789/nodejs-docker-jenkins:latest')
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'f3208cf4-8fad-47e8-b357-bf89db2aa943') {
                        docker.image('saaru789/nodejs-docker-jenkins:latest').push()
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    docker.image('saaru789/nodejs-docker-jenkins:latest').run('-p 8088:3000 --name ankit-nodejs-container')
                }
            }
        }
    }
}

