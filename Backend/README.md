# User Registration Endpoint

## POST /users/register

### Description

This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: The user's first name (minimum 3 characters).
  - `lastname`: The user's last name (minimum 3 characters, optional).
- `email`: The user's email address (must be a valid email).
- `password`: The user's password (minimum 6 characters).

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors

- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Example Response

- `user` (object). -`firstname` (string): User's first name (minimum 3 characters). -`lastname` (string): User's last name (minimum 3 characters). -`email` (string): User's email address (must be a valid email). -`password` (string): User's password (minimum 6 characters). -`token` (string): JWT Token

### Notes

- The `lastname` field is optional.
- The `password` field is stored securely using bcrypt hashing.

# User Login Endpoint

## POST /users/login

### Description

This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `email`: The user's email address (must be a valid email).
- `password`: The user's password (minimum 6 characters).

### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors

- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes

- The `password` field is stored securely using bcrypt hashing.

# User Profile Endpoint

## GET /users/profile

### Description

This endpoint is used to retrieve the profile of the authenticated user.

### Responses

#### Success

- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

# User Logout Endpoint

## GET /users/logout

### Description

This endpoint is used to log out the authenticated user.

### Responses

#### Success

- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```
# Captain API Routes Documentation

## Authentication
All captain routes require a valid JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Available Routes

### Register Captain
- **Method:** POST
- **Endpoint:** `/api/captain/register`
- **Description:** Register a new captain account
- **Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "vehicleType": "string",
  "vehicleNumber": "string",
  "licenseNumber": "string"
}
```
- **Response:** 
```json
{
  "success": true,
  "message": "Captain registered successfully",
  "data": {
    "captainId": "string",
    "name": "string",
    "email": "string"
  }
}
```

### Captain Login
- **Method:** POST
- **Endpoint:** `/api/captain/login`
- **Description:** Authenticate captain and get access token
- **Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "token": "string",
  "captain": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
```

### Update Captain Profile
- **Method:** PUT
- **Endpoint:** `/api/captain/profile`
- **Description:** Update captain's profile information
- **Request Body:**
```json
{
  "name": "string",
  "phone": "string",
  "vehicleType": "string",
  "vehicleNumber": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "captainId": "string",
    "name": "string",
    "phone": "string"
  }
}
```

### Get Captain Profile
- **Method:** GET
- **Endpoint:** `/api/captain/profile`
- **Description:** Get captain's profile information
- **Response:**
```json
{
  "success": true,
  "data": {
    "captainId": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "vehicleType": "string",
    "vehicleNumber": "string",
    "rating": number,
    "totalTrips": number
  }
}
```

### Update Captain Status
- **Method:** PUT
- **Endpoint:** `/api/captain/status`
- **Description:** Update captain's availability status
- **Request Body:**
```json
{
  "status": "online" | "offline" | "busy"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Status updated successfully",
  "data": {
    "status": "string"
  }
}
```

### Get Captain Trips
- **Method:** GET
- **Endpoint:** `/api/captain/trips`
- **Description:** Get captain's trip history
- **Query Parameters:**
  - `page` (optional): Page number
  - `limit` (optional): Items per page
- **Response:**
```json
{
  "success": true,
  "data": {
    "trips": [
      {
        "tripId": "string",
        "pickup": "string",
        "destination": "string",
        "fare": number,
        "status": "string",
        "date": "string"
      }
    ],
    "totalPages": number,
    "currentPage": number
  }
}
```

## Error Responses
All routes may return the following error responses:

```json
{
  "success": false,
  "error": "Error message",
  "statusCode": number
}
```

Common status codes:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error
