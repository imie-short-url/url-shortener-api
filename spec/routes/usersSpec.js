const UsersCtrl = require('../../routes/users');


describe("UsersCtrl", () => {
    describe("=> register", () => {
        it("Should have a valid email and a valid password", next => {
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

        it("Should have a valid email", next => {
            let validEmails = [
                'test@test.me',
                'tEsT@test.me',
                'test.test@test.me',
                'Test.exAmple+teSt@test.me',
                'test.test-exAmple@test.me',
                'a@test.me',
                'example-test@test-test.me',
                'tes@s.solutions',
                'tes@s.solutions2',
                'tes@s.s0lutions',
                '#!$%&\'*+-/=?^_`{}|~@example.org',
                '1234567890123456789012345678901234567890123456789012345678901234+@example.com',
                'test@422test.me',
            ];

            for (let email of validEmails ) {
                let isValid = UsersCtrl.isValidEmail(email);
                expect(codeisValid).toBeTruthy();
            }

        });

        it("Should not have a valid email", next => {
            let invalidEmails = [
                'te st@test.me',
                'te"st@test.me',
                'te"st"@test.me',
                '.test@test.me',
                'test.@test.me',
                'te..st@test.me',
                'a"b(c)d,e:f;g<h>i[j\\k]l@example.com',
                'test@test-example.me',
                'te%st@test.me',
                'test@123.me',
                'test@test',
                'test@test@test',
                'test.test',
                '1234567890123456789012345678901234567890123456789012345678901234+X@example.com',
                '',
            ];

            for (let email of invalidEmails ) {
                let isValid = UsersCtrl.isValidEmail(email);
                expect(codeisValid).toBeFalsy();
            }
        });
    });
});