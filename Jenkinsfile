pipeline {
  agent any

  environment {
    JENKINS_PORT = 8081
  }

  stages {
    
    stage('Clonar repositorio') {
      steps {
        git branch: 'main', url: 'https://github.com/samu975/tecnologia-web-monorepo.git'
      }
    }

    stage('Desplegar contenedor Docker') {
      steps {
        script {
          withCredentials([
            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
          ]) {
            try {
              sh "docker-compose up -d --build -p my-jenkins"
            } catch (Exception e) {
              error "Fallo en el despliegue del contenedor Docker: ${e.message}"
            }
          }
        }
      }
    }
  }

  post {
    always {
      emailext (
        subject: "Estado del build: ${currentBuild.currentResult}",
        body: "Se ha completado el build exitosamente. Puedes consultar los detalles aquí: ${env.BUILD_URL}",
        to: 'saferoxx215@gmail.com',
        from: 'samuel.rosero@est.iudigital.edu.co'
      )
    }
    failure {
      emailext(
        subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
        body: "Build failed in Jenkins pipeline.\nCheck the console output: ${env.BUILD_URL}",
        to: 'saferoxx215@gmail.com'
      )
    }
  }
}
