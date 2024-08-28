# Rest API 🚀🔥

### What is Rest API

- REST Stands for Represented State Transfer
- API Stands for Application Programming Interface
- REST API is commonly known as RESTful API
- REST API is define as an interface that two computer systems use to exchange information securely over the internet.
- It was first introduced and defined by DR. Roy Fielding in his doctoral dissertation in 2000.

- REST is based on few core principles, including
  i. Client-Server architecture
  ii. Stateless communication
  iii. Resource-Based Interaction
  iv. Uniform Interface
  v. Cacheable

### Stateless and Stateful REST API

- **Stateless REST API** - A stateless REST API is an API that does not store any client-specific data or session information between requests. Each request contains all the necessary information for the server to understand and process the request, without relying on any previous interactions or data.

Example-
An example of a stateless REST API is a weather forecasting application. The server provides weather information based on the user's request and request sent to the server contains all the necessary information to server to process request.

- **Stateful REST API** - A Stateful REST API is an API that maintains state or context information between requests. The server stores information about the client and uses it to process subsequent requests.

Example- An example of a stateful REST API is an online shopping cart application. The server needs to maintain the state of the shopping cart between requests. Each time the user adds to the cart, the server stores the product information along with the user's session information.

### Why REST API is needed

There are several reasons why REST API is need, some of them are as follows:

- It is widely adopted.
- It is simple and has uniform interface based on HTTP protocol.
- It is scalable since they are stateless.
- Due to its flexibility where it can be used with different types of data formats such as JSON or XML and can be integrated with different systems and technologies.

### How REST API works

- The REST API works by using HTTP request method such as GET, PUT, POST, DELETE and some other HTTP request method.
- A Client send request to the server using one of this method along with the URL that identifies the resources and the server process the request and return the response that conatins the requested resource.
