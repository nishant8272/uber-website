1.
/users/register Endpoint
Description
Registers a new user by creating a user account with the provided information.

HTTP Method
POST

Request Body
The request body should be in JSON format and include the following fields:

fullname (object):
firstname (string, required): User's first name (minimum 3 characters).
lastname (string, optional): User's last name (minimum 3 characters).
email (string, required): User's email address (must be a valid email).
password (string, required): User's password (minimum 6 characters).
Example Response
user (object):
fullname (object).
firstname (string): User's first name (minimum 3 characters).
lastname (string): User's last name (minimum 3 characters).
email (string): User's email address (must be a valid email).
password (string): User's password (minimum 6 characters).
token (String): JWT Token


2.
/users/login Endpoint
Description
Authenticate a user and retrieve a JWT token for accessing protected routes.

HTTP Method
POST

Request Body
The request body should be in JSON format and include the following fields:

email (string, required): User's registered email address (must be a valid email).
password (string, required): User's password (minimum 5 characters).

Example Request
{
    "email": "user@example.com",
    "password": "userpassword"
}

Example Response
Success (200 OK)
{
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string"
    },
    "token": "JWT_TOKEN_STRING"
}

Validation Rules
- Email must be a valid email format
- Password must be at least 5 characters long

Notes
- Password is compared with the hashed version stored in the database
- JWT token is generated upon successful authentication
- User password is not included in the response


3.
/users/profile Endpoint
Description
Retrieves the profile information of the currently authenticated user.

HTTP Method
GET

Authentication
Requires a valid JWT token in the Authorization header: Authorization: Bearer <token>

Example Response
user (object):
fullname (object).
firstname (string): User's first name (minimum 3 characters).
lastname (string): User's last name (minimum 3 characters).
email (string): User's email address (must be a valid email).


4.
/users/logout Endpoint
Description
Logout the current user and blacklist the token provided in cookie or headers

HTTP Method
GET

Authentication
Requires a valid JWT token in the Authorization header or cookie:

user (object):
fullname (object).
firstname (string): User's first name (minimum 3 characters).
lastname (string): User's last name (minimum 3 characters).
email (string): User's email address (must be a valid email).
password (string): User's password (minimum 6 characters).
token (String): JWT Token## /captains/register Endpoint
Description
Registers a new captain by creating a captain account with the provided information.

HTTP Method
POST

Request Body
The request body should be in JSON format and include the following fields:

fullname (object):
firstname (string, required): Captain's first name (minimum 3 characters)
lastname (string, optional): Captain's last name
email (string, required): Captain's email address (must be a valid email)
password (string, required): Captain's password (minimum 6 characters)
vehicle (object):
color (string, required): Vehicle color (minimum 3 characters)
plate (string, required): Vehicle plate number (minimum 3 characters)
capacity (number, required): Vehicle passenger capacity (minimum 1)
vehicleType (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto')


captain routes

1.
Description
Registers a new captain by creating a captain account with the provided information.

HTTP Method
POST

Request Body
The request body should be in JSON format and include the following fields:

fullname (object):
firstname (string, required): Captain's first name (minimum 3 characters).
lastname (string, optional): Captain's last name (minimum 3 characters).
email (string, required): Captain's email address (must be a valid email).
password (string, required): Captain's password (minimum 6 characters).
vehicle (object):
color (string, required): Vehicle color (minimum 3 characters).
plate (string, required): Vehicle plate number (minimum 3 characters).
capacity (number, required): Vehicle passenger capacity (minimum 1).
vehicleType (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto').
Example Response
captain (object):
fullname (object).
firstname (string): Captain's first name (minimum 3 characters).
lastname (string): Captain's last name (minimum 3 characters).
email (string): Captain's email address (must be a valid email).
password (string): Captain's password (minimum 6 characters).
vehicle (object):
color (string): Vehicle color.
plate (string): Vehicle plate number.
capacity (number): Vehicle passenger capacity.
vehicleType (string): Type of vehicle.
token (String): JWT Token
/captains/login Endpoint
Description
Authenticates a captain using their email and password, returning a JWT token upon successful login.

HTTP Method
POST
2.
Endpoint
/captains/login

Request Body
The request body should be in JSON format and include the following fields:

email (string, required): Captain's email address (must be a valid email).
password (string, required): Captain's password (minimum 6 characters).
Example Response
captain (object):
fullname (object).
firstname (string): Captain's first name (minimum 3 characters).
lastname (string): Captain's last name (minimum 3 characters).
email (string): Captain's email address (must be a valid email).
password (string): Captain's password (minimum 6 characters).
vehicle (object):
color (string): Vehicle color.
plate (string): Vehicle plate number.
capacity (number): Vehicle passenger capacity.
vehicleType (string): Type of vehicle.
token (String): JWT Token

3.
/captains/profile Endpoint
Description
Retrieves the profile information of the currently authenticated captain.

HTTP Method
GET

Authentication
Requires a valid JWT token in the Authorization header: Authorization: Bearer <token>

Example Response
captain (object):
fullname (object).
firstname (string): Captain's first name (minimum 3 characters).
lastname (string): Captain's last name (minimum 3 characters).
email (string): Captain's email address (must be a valid email).
vehicle (object):
color (string): Vehicle color.
plate (string): Vehicle plate number.
capacity (number): Vehicle passenger capacity.
vehicleType (string): Type of vehicle.

4.
/captains/logout Endpoint
Description
Logout the current captain and blacklist the token provided in cookie or headers.

HTTP Method
GET

Authentication
Requires a valid JWT token in the Authorization header or cookie.

Example Response
message (string): Logout successfully.

