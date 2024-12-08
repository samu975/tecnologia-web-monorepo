pipeline {
  agent any

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
             sh 'docker-compose up -d'
            }
        }
      }
    }
  }
  
  post {
        always {
            emailext (
                subject: "Estado del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build exitosamente. Puedes consultar los detalles aqui: ${env.BUILD_URL}",
                to: 'safero99@hotmail.com',
                from: 'samuel.rosero@est.iudigital.edu.co'
            )
        }
  }
}