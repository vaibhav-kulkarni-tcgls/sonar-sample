//const scanner = require('sonarqube-scanner');
import scanner from 'sonarqube-scanner';

scanner(
  {
    serverUrl: process.env.SONAR_HOST_URL ?? 'http://localhost:9000',
    token: process.env.SONAR_AUTH_TOKEN ?? '',
    options: {
      'sonar.projectName': 'TCG DXP Admin',
      'sonar.projectDescription': 'NestJS Code',
      'sonar.projectKey': process.env.SONAR_PROJECT_KEY ?? 'dxp-admin',
      'sonar.projectVersion': '0.0.1',
      'sonar.exclusions': '',
    },
  },
  () => process.exit()
);
