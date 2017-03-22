const UsersSrvce = require('../../Service/UserService');


describe("Users Service", () => {
    describe("=> Email validation", () => {

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

            for (let email of validEmails) {
                let isValid = UsersSrvce.isValidEmail(email);
                if (!isValid){
                    console.log(email+'->return false');
                }
                expect(isValid).toBeTruthy();
            }
            next();

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

            for (let email of invalidEmails) {
                let isValid = UsersSrvce.isValidEmail(email);
                if (isValid){
                    console.log(email+'->return true');
                }
                expect(isValid).toBeFalsy();
            }
            next();
        });
    });

    describe("=> Password validation", () => {

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
                let isValid = UsersSrvce.isValidPassword(password);
                if (!isValid){
                    console.log(password+'->return false');
                }
                expect(isValid).toBeTruthy();
            }
            next();

        });

        it("Should not have a invalid password", next => {
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
                let isValid = UsersSrvce.isValidPassword(password);
                if (isValid){
                    console.log(password);
                }
                expect(isValid).toBeFalsy();
            }
            next();

        });
    });
});