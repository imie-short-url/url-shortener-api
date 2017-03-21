const UsersCtrl = require('../../routes/users');


describe("UsersCtrl", () => {
    describe("=> register", () => {
        it("Should have an valid email and valid password", next => {
            const req = {
                query: {
                    email: 'test@test.me',
                    password: 'password'
                }
            };
            const res = {
                status: (code) => {
                    return {
                        render: (view, data) => {
                            expect(code).toBe(200);
                            expect(data.success).toBe('true');

                            next();
                        }
                    }
                }
            };

            UsersCtrl.index(req, res);
        });

        it("Should have an valid email", next => {
            let validEmails = [
                'test@test.me',
                'test@422test.me',
                'me-you@email.agency',
                'me-yo_u@em-ail.email',
                'me-yo_u.me-yo_u+me-yo_u-me-yo_u@em-ail.email',
                'me-yo_u.me8-yo4_u+m3-yo_u-me-yo_u2@em-ail.email',
            ];

            for (let email of validEmails ) {
                let isValid = UsersCtrl.isValidEmail(email);
                expect(isValid).toBeTruthy();
            }

        });

        it("Should not have an valid email", next => {
            let invalidEmails = [
                'te st@test.me',
                'te%st@test.me',
                'te\'st@test.me',
                'test@test',
                'test@test.a',
                'test@test.a120',
                'test@test.c0m',
                'te#st@test.c0m',
                'te"st@test.c0m',
                'testtest.c0m',
                'test@t.c0m',
                '',
            ];

            for (let email of invalidEmails ) {
                let isValid = UsersCtrl.isValidEmail(email);
                expect(isValid).toBeFalsy();
            }
        });

        it("Should have a valid password", next => {
            let validPasswords = [
                'aA1!0',
                'P4ssw0r#',
                'P@ss4',
                '#az9M',
                '0O1l!',
                '!@?#4Aa',
                '!@?#4AbcdEfghijKlmnOpqrSTUVwxyz',
                '!@?#1234567890Aa',
            ];

            for (let password of validPasswords ) {
                let isValid = UsersCtrl.isValidPassword(password);
                expect(isValid).toBeTruthy();
            }

        });
        });

        it("Should have a valid password", next => {
            let validPasswords = [
                'aA170',
                'P4ssw0rD',
                'P@sse',
                '#az9m',
                '0O1l!',
                '!@?#aAa',
                '!@?=4Aa',
                '!@)#4Aa',
                '!.;:§^$ù*èéâà€&~¨+-_*/µ?¤#4Aa',
                '!@?#4AbcdEfghijKlmnOpqrSTUVwxyz',
                '!@?#1234567890A',
            ];

            for (let password of validPasswords ) {
                let isValid = UsersCtrl.isValidPassword(password);
                expect(isValid).toBeFalsy();
            }

        });
    });
});