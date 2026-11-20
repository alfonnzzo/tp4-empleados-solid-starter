# Práctica SOLID - Empleados y Salarios

Esta versión funciona, pero está deliberadamente mal estructurada.

## Objetivo

Refactorizar el servidor aplicando una separación clara de responsabilidades:

- controllers
- routes
- services
- repository
- models
- errorHandler

## Regla de negocio

El salario final se calcula así:

**salario final = salario base + 2% del salario base por cada año de antigüedad**

Ejemplo:

- Salario base: 1.000.000
- Antigüedad: 5 años
- Adicional: 10%
- Salario final: 1.100.000

## Endpoints requeridos

- POST /employees
- GET /employees
- GET /employees/:id

## Cómo ejecutar

```bash
cp .env.example .env
docker compose up -d
npm install
npm run dev
```

## Estructura

- src/server.ts: conecta a MongoDB y levanta el servidor.
- src/app.ts: arma las dependencias y configura Express.
- src/routes: define las rutas y las asocia al controller.
- src/controllers: lee la petición y arma la respuesta HTTP.
- src/services: aplica las validaciones y la regla de negocio del salario.
- src/repositories: guarda y consulta empleados. El service solo conoce la interfaz.
- src/models: define el esquema de Mongoose.
- src/errors: define los errores con código HTTP.
- src/middlewares: contiene el errorHandler que convierte los errores en respuestas.

## Consigna

Identificar los problemas del diseño actual y refactorizarlo.
El comportamiento observable de la API debe mantenerse.
