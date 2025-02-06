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

- `user` (object).
 -`firstname` (string): User's first name (minimum 3 characters).
 -`lastname` (string): User's last name (minimum 3 characters).
 -`email` (string): User's email address (must be a valid email).
 -`password` (string): User's password (minimum 6 characters).
 -`token` (string): JWT Token


### Notes
- The `lastname` field is optional.
- The `password` field is stored securely using bcrypt hashing.
