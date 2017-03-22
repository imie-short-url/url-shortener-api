const UsersCtrl = require('../../routes/users');


describe("UsersCtrl", () => {
    describe("=> register", () => {
        it("Should have an email and a password", next => {
            const req = {
                query: {
                    email: 'test@test.me',
                    password: 'P4ssw0r#'
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

            UsersCtrl.index(req, res);
        });

        it("Should not have password", next => {
            const req = {
                query: {
                    email: 'test@test.me'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_PASSWORD_EMPTY');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.index(req, res);
        });

        it("Should not have email", next => {
            const req = {
                query: {
                    password: 'P4ssw0r#'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_EMAIL_EMPTY');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.index(req, res);
        });

        it("Should have no params", next => {
            const req = {
                query: {}
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_EMAIL_PASSWORD_EMPTY');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.register(req, res);
        });
    });

    describe("=> login", () => {
        it("Should have an email and a password", next => {
            const req = {
                query: {
                    email: 'test@test.me',
                    password: 'P4ssw0r#'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeTruthy();
                            expect(data.token).toBe('JWTtoken');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.login(req, res);
        });

        it("Should have an email and no password", next => {
            const req = {
                query: {
                    email: 'test@test.me'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_EMAIL_AND_PASSWORD_REQUIRED');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.login(req, res);
        });

        it("Should have no email but a password", next => {
            const req = {
                query: {
                    password: 'P4ssw0r#'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_EMAIL_AND_PASSWORD_REQUIRED');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.login(req, res);
        });

        it("Should have no email and no password", next => {
            const req = {
                query: {}
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_EMAIL_AND_PASSWORD_REQUIRED');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.login(req, res);
        });

        it("Should have invalid password", next => {
            const req = {
                query: {
                    email: 'test@test.me'
                    password: 'Pass'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_BAD_CREDENTIAL');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.login(req, res);
        });

        it("Should have invalid email", next => {
            const req = {
                query: {
                    email: 'test',
                    password: 'P4ssw0r#'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_BAD_CREDENTIAL');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.login(req, res);
        });

        it("Should have invalid email and password", next => {
            const req = {
                query: {
                    email: 'test',
                    password: 'Pass'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_BAD_CREDENTIAL');
                            next();
                        }
                    }
                }
            };

            UsersCtrl.login(req, res);
        });
    });
});