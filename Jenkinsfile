pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 5200:5200'
    }
  }
  stages {
    stage('Build'){
      steps {
        sh ('npm install')
      }
    }
  }
}
