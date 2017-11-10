pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run') {
      steps {
        sh '''npm start &
sleep 1
echo $! > .pidfile'''
      }
    }
    stage('End') {
      steps {
        sh 'kill $(cat .pidfile)'
      }
    }
  }
}