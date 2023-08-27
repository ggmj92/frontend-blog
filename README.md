# Blog Project

This is a blog application project built using Express.js and MongoDB.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Dependencies](#dependencies)
- [Users](#users)


## Description

This project is the backend for a blog application. It provides API routes to manage blog posts, user authentication, and more.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm are installed on your system.
- MongoDB is installed and running.


## Installation

1. Clone the repository:

clone https://github.com/ggmj92/frontend-blog.git

2. Navigate to the project directory: 

cd frontend-blog

3. npm install


## Usage

1. Create an '.env' file in the root directory and add your environment variables:

PORT=<your-port>
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

2. Run the development server:

npm run dev


## Routes

* GET /api/posts: Get all blog posts.
* GET /api/posts/control: Get control posts (requires JWT validation).
* GET /api/posts/:id: Get a blog post by ID.
* GET /api/posts/search/:title: Search for blog posts by title.
* POST /api/posts: Create a new blog post (requires input validation and JWT validation).
* PUT /api/posts/:id: Update a blog post (requires input validation and JWT validation).
* DELETE /api/posts/:id: Delete a blog post by ID.


## Dependencies

* bcrypt: For password hashing.
* cookie-parser: For parsing cookies in requests.
* cors: For handling Cross-Origin Resource Sharing.
* dayjs: For working with dates and times.
* dotenv: For managing environment variables.
* express: Web application framework.
* jsonwebtoken: For handling JSON Web Tokens (JWT).
* mongoose: MongoDB object modeling tool.
* nodemon: Development server that automatically restarts on changes.


## Mock Users for Testing

### Admins

**Admin 1:**
- Email: admin1@blog.com
- Password: Admin1Password
- Role: Admin

**Admin 2:**
- Email: admin2@blog.com
- Password: Admin2Password
- Role: Admin

### Editors

**Editor 1:**
- Email: editor1@blog.com
- Password: Editor1Password
- Role: Editor

**Editor 2:**
- Email: editor2@blog.com
- Password: Editor2Password
- Role: Editor

### User Roles and Permissions

- **Admins**:
  - Have permission to access all blog posts.
  - Have the capacity to delete any blog post by any user.
  - Have the capacity to delete any user.

- **Editors**:
  - Have permission to access all blog posts.
  - Can only delete their own blog posts.




