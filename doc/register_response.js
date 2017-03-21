// 1 - Email and password valid
{
    success: true
}

// 2 - email  invalid, password valid
{
    success: false,
    message: 'ERR_EMAIL_INVALID'
}

// 3 -  email valid, password invalid
{
    success: false,
    message: 'ERR_PASSWORD_INVALID'
}

// 4 - email valid, password confirmation invalid
// Password is not test in api

// 5 - email not send
{
    success: false
    message: 'ERR_EMAIL_EMPTY'
}

// 6 - password not send
{
    success: false
    message: 'ERR_PASSWORD_EMPTY'
}

// 7 - email and password not send
{
    success: false
    message: 'ERR_EMAIL_PASSWORD_EMPTY'
}

// 8 - email, password and password confirm not send
{
    success: false
    message: 'ERR_EMAIL_PASSWORD_EMPTY'
}

// 9 - email already exist
{
    success: false
    message: 'ERR_EMAIL_TAKEN'
}