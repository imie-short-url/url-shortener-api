// 1 - missing JWT token
response: 401;
{'Invalid Token'}

// 2 - JWT and user id not match
response: 403
{'Forbidden'}

//3 - JWT and user id ok
response: 200
{
    urls:
        [
            {url:'http://domain.net', shortcode:'a53rT9'},
            {url:'http://domain.net', shortcode:'a53rT9'},
            {url:'http://domain.net', shortcode:'a53rT9'}
            ]
}