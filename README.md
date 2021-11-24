# aws-serverless-api

# AWS: API, Dynamo and Lambda

## LAB - 18

## Create a serverless REST API

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

- Database: DynamoDB
  - 1 Table required
- Routing: API Gateway
  - POST
    - /people - Given a JSON body, inserts a record into the database
    - returns an object representing one record, by its id (##)
  - GET
    - /people - returns an array of objects representing the records in the database
    - /people/## - returns an object representing one record, by its id (##)
  - PUT
    - /people/## - Given a JSON body and an ID (##), updates a record in the database
    - returns an object representing one record, by its id (##)
  - DELETE
    - /people/## - Given an id (##) removes the matching record from the database
    - returns an empty object
- CRUD Operation Handlers: Lambda Functions

### Author: Mark Thanadabouth

### Collaborators:

#### Links and Resources
* [Deployment]()

### Setup

#### Running App
- What is the root URL to your API?
- What are the routes?
- What inputs do they require?
- What output do they return?

### UML
<!-- > <img src="src/UML/401lab02_UML.jpg" width="300"/> -->

### Reflections and Comments
