const UsersCtrl = require('../../routes/users');


describe("UsersCtrl", () => {
    describe("=> register", () => {
        it("Should have an email and a password", next => {
            const req = {
                query: {
                    email: 'test@test.me',
                    password: 'P4ssw0r#',
                    passwordBis: 'P4ssw0r#'
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
                    email: 'test@test.me',
                    passwordBis: 'P4ssw0r#'
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
                    password: 'P4ssw0r#',
                    passwordBis: 'P4ssw0r#'
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

        it("Should not have the passwordBis", next => {
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
                            expect(data.success).toBeFalsy();
                            expect(data.message).toBe('ERR_PASSWORD_EMPTY');
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

            UsersCtrl.index(req, res);
        });
    });
});