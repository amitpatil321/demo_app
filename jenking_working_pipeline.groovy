pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/amitpatil321/demo_app.git', branch: 'main'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy build files to Nginx server') {
            steps {
                script {
                    step([
                        $class: 'BapSshPublisherPlugin',
                        publishers: [
                            [
                                configName: 'Application Server',
                                transfers: [
                                    [
                                        sourceFiles: 'dist/**',
                                        removePrefix: 'dist',
                                        remoteDirectory: '/var/www/vhosts/frontend/',
                                        execCommand: 'echo "Deployment done!"'
                                    ]
                                ],
                                usePromotionTimestamp: false,
                                verbose: true
                            ]
                        ]
                    ])
                }
            }
        }
    }
}
