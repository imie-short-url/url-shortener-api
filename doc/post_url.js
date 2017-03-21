// 1 - missing JWT token
response: 401;
{'Invalid Token'}

// 2 - invalid or empty url
response: 200
{
    success: false,
    message: 'ERR_URL_INVALID'
}

// 2 - url valid
response: 200
{
    success: true
}