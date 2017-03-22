const UrlsCtrl = require('../../routes/urls');

describe("UrlsCtrl", () => {
    describe("=> user_dashboard", () => {
        it("Should have a token and right user id", next => {
            const req = {
                headers: {
                    Authorization: 'Bearer JWTtoken'
                },
                query: {
                    user_id: 1
                }
            };

            let urls_response = [
                {url:'http://domain.net', shortcode:'a53rT9'},
                {url:'http://domain.net', shortcode:'a53rT9'},
                {url:'http://domain.net', shortcode:'a53rT9'}
              ]

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeTruthy();
                            expect(data.urls).toBe(urls_response);
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.dashboard(req, res);
        });

        it("Should not have a token", next => {
            const req = {
                query: {
                    user_id: 1
                }
            };

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(401);
                            expect(data.success).toBeFalsy();
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.dashboard(req, res);
        });

        it("Should not have a token but not the right id", next => {
            const req = {
                headers: {
                    Authorization: 'Bearer JWTtoken'
                },
                query: {
                    user_id: 2
                }
            };

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(403);
                            expect(data.success).toBeFalsy();
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.dashboard(req, res);
        });
    });

    describe("=> post_url", () => {

        it("Should not have a token", next => {
            const req = {
                headers: {
                    Authorization: 'Bearer JWTtoken'
                },
                query: {
                    url: 'https://wwww.google.fr'
                }
            };

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(401);
                            expect(data.success).toBeFalsy();
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.addUrl(req, res);
        });

        it("Should have invalid or empty url", next => {
            const req = {
                headers: {
                    Authorization: 'Bearer JWTtoken'
                },
                query: {}
            };

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_URL_INVALID');
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.addUrl(req, res);
        });

        it("Should have token and valid url", next => {
            const req = {
                headers: {
                    Authorization: 'Bearer JWTtoken'
                },
                query: {
                    url: 'https://wwww.google.fr'
                }
            };

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeTruthy();
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.addUrl(req, res);
        });

    });


    describe("=> delete_url", () => {

        it("Should not have a token", next => {
            const req = {
                query: {
                    url_id: 1
                }
            };

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(401);
                            expect(data.success).toBeFalsy();
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.deleteUrl(req, res);
        });

        it("Should not have a token", next => {
            const req = {
                headers: {
                    Authorization: 'Bearer JWTtoken'
                },
                query: {}
            };

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_URL_NOT_FOUND');
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.deleteUrl(req, res);
        });

        it("Should not have a token", next => {
            const req = {
                headers: {
                    Authorization: 'Bearer JWTtoken'
                },
                query: {
                    url_id: 1
                }
            };

            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeTruthy();
                            next();
                        }
                    }
                }
            };

            UrlsCtrl.deleteUrl(req, res);
        });

    

    });
});