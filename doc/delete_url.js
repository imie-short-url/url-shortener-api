// 1 - missing JWT token
response: 401
{'Invalid Token'}

// 2 - url id not match with user id
response: 200
{
    success: false,
    message: 'ERR_URL_NOT_FOUND'
}

// 2 - url id valid
response: 200
{
    success: true
}