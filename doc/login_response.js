// 1 - Email and Password valid
{
    success: true,
    token: 'JWTtoken'
}

// 2,3 - email  and/or password invalid
{
    success: false,
    message: 'ERR_BAD_CREDENTIAL'
}

// 4, 5, 6 - email  and/or password not send
{
    success: false
    message: 'ERR_EMAIL_AND_PASSWORD_REQUIRED'
}