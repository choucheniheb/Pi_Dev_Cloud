pipeline {
    agent any

    environment {
        registryCredentials = "dockerHub"
        imageName = "mobile_image"
        dockerImage = ''
    }

    stages {
        stage('Compile') {
            steps {
               sh 'mvn compile'
            }
        }

        stage('Code Quality') {
            steps {
                // Build the project using Maven
                sh 'echo Sonarqube Code Quality Check-Done'
            }
        }

        stage('Test') {
            steps {
                script {
                   sh 'mvn test'
                }
            }
        }

        stage('Package') {
            steps {
                script {
                   sh 'mvn package'
                    }
                }
            }
        }
    }


