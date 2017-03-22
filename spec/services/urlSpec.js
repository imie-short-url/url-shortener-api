const UrlsSrvce = require('../../services/urls');


describe("Urls Service", () => {
    describe("=> delete_urls", () => {

        it("Should have a valid url", next => {
            let validUrls = [
                'http://www.google.com',
                'https://www.google.com',
                'http://google.com',
                'ftp://google.com',
                'http://www.google.fr',
                'https://www.google.fr/maps/dir/47.248249,-1.5223088/46.8429486,-1.2393911/@47.0193377,-1.5449965,10z/data=!3m1!4b1!4m2!4m1!3e0',
                'https://www.google.fr/#q=recherche+random+sur+stackoverflow&start=90&*',
                'http://img.clubic.com/032001F408481034-c1-photo-oYToxOntzOjU6ImNvbG9yIjtzOjU6IndoaXRlIjt9-youtube-meh.jpg',
                'https://www.google.fr/imgres?imgurl=https%3A%2F%2Flh5.ggpht.com%2FjZ8XCjpCQWWZ5GLhbjRAufsw3JXePHUJVfEvMH3D055ghq0dyiSP3YxfSc_czPhtCLSO%3Dw300&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.google.android.youtube%26hl%3Dfr&docid=DIb-PeZ9AQgUzM&tbnid=gCZCCDsReluCZM%3A&vet=10ahUKEwiTl9jN7unSAhWJAsAKHfufB5kQMwgyKAEwAQ..i&w=300&h=300&bih=734&biw=1536&q=youtube&ved=0ahUKEwiTl9jN7unSAhWJAsAKHfufB5kQMwgyKAEwAQ&iact=mrc&uact=8'
            ];

            for (let url of validUrls ) {
                let isValid = UsersSrvce.isValidUrl(url);
                expect(isValid).toBeTruthy();
            }
            next();

        });

        it("Should not have a valid url", next => {
            let NotValidUrls = [
                'http://www.google',
                'www.google.com',
                'google.com',
                'http://google',
                'google',
                'http//www.google.fr',
                'ftp//www.google.fr',
                'https//www.google.fr',
                'https://www.goo gle.fr',
                'https://www.google.fr\\',
                'https:\\\\www.google.fr'
            ];

            for (let url of NotValidUrls ) {
                let isValid = UsersSrvce.isValidUrl(url);
                expect(isValid).toBeFalsy();
            }
            next();

        });

    
    });
});