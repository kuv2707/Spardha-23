import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.1.0', // Specify the OpenAPI version
        info: {
            title: 'Live Games Update',
            version: '1.0.0',
            description: 'API documentation for Microservice to update games live',
        },
    },
    apis: ['./routes/*.js']
};

export default swaggerJsdoc(options);
