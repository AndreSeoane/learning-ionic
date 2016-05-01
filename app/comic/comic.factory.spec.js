describe('comicService: ', function () {

    var comicService, $httpBackend;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        comicService = $injector.get('comicService');
        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should have 4 results', function (done) {
        var fixture = readJSON(fixturesPath + '/comics/Deadpool.json');
        $httpBackend.expectGET(/\/comics/).respond(fixture);
        comicService.findByName('Deadpool').then(function (results) {
            expect(results).toBeTruthy();
            expect(results.length).toBe(20);
            done();
        });
        $httpBackend.flush();
    });

    it('should have multiple pages', function (done) {
        var fixture1 = readJSON(fixturesPath + '/comics/s_0.json');
        var fixture2 = readJSON(fixturesPath + '/comics/s_20.json');
        $httpBackend.expectGET(/\/comics/).respond(fixture1);
        $httpBackend.expectGET(/\/comics/).respond(fixture2);
        var prefix = 'sp';
        var offset = 0;
        var list = [];
        comicService.findByName(prefix).then(function (results) {
            expect(results).toBeTruthy();
            expect(results.length).toBe(20);
            list = list.concat(results);
        }).then(function () {
            offset = 20;
            return comicService.findByName(prefix, {offset:offset});
        }).then(function (results) {
            expect(results).toBeTruthy();
            expect(results.length).toBe(20);
            expect(list[0].id).not.toBe(results[0].id);
            list = list.concat(results);
            expect(list.length).toBe(40);
            done();
        });
        $httpBackend.flush();
    });

});