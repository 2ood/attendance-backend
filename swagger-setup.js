require('dotenv').config();

/*Swagger UI connection*/
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info : {
    title : 'attendance server API',
    version : '0.0.1',
    description : 'API description',
  },
  host : 'localhost:8080',
  basePath : '/',
  securityDefinitions : {
    bearerAuth : {
      type : 'apiKey',
      name : 'Authorization',
      scheme : 'bearer',
      in : 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis : ['./routers/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {swaggerUi,swaggerSpec};
