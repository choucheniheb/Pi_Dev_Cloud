pipeline {
    agent any

    environment {
        // Define any environment variables here if needed
        DOCKER_IMAGE_NAME = 'imagetest'
        DOCKER_REGISTRY = 'https://index.docker.io/v1/'
        DOCKER_CREDENTIALS_ID = 'dockerHub'
        SKIP_TESTS = "${env.SKIP_TESTS}" // Set this environment variable to control skipping tests
        

    }

    stages {
         stage('Checkout') {
            steps {
                // Checkout the code from the Git repository and specify the branch name if it's not master
                git branch: 'test', url: 'https://github.com/choucheniheb/Pi_Dev_Cloud.git'
            }
        }
        
        
        stage('Build') {
            steps {
                // Build the Java project using Maven and skip tests
                sh 'mvn clean install -DskipTests'
            }
        }

        // stage('Test') {
        //     when {
        //         expression {
        //             return !env.SKIP_TESTS?.toBoolean() // Skip this stage if SKIP_TESTS is set to true
        //         }
        //     }
        //     steps {
        //         // Run tests for the Java project
        //         sh 'mvn test'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         // Build the Java project using Maven
        //         sh 'mvn clean install'
        //     }
        // }

        // stage('Test') {
        //     steps {
        //         // Run tests for the Java project
        //         sh 'mvn test'
        //     }
        // }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    docker.build("${env.DOCKER_IMAGE_NAME}", ".")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                // Push the Docker image to Docker Hub
                script {
                    docker.withRegistry("${env.DOCKER_REGISTRY}", "${env.DOCKER_CREDENTIALS_ID}") {
                        docker.image("${env.DOCKER_IMAGE_NAME}").push('latest')
                    }
                }
            }
        }
    }

    post {
        always {
            // Cleanup actions or notifications
            cleanWs()
        }
    }
}
