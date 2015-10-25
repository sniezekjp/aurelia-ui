import {Example, Service} from './example';

describe('everything', function() {
    var example, serviceSpy;

    beforeEach(function() {
        example = new Example();
        serviceSpy = spyOn(Service.prototype, 'makeRequest');
    });

    it('should be one', function() {
        expect(example.hi).toBe('hello world!');
    });

    it('should toggle greeting', function() {
        // given
        expect(example.isShowing).toBeFalsy();

        // when
        example.toggleGreeting();

        // expect
        expect(example.isShowing).toBeTruthy();
        expect(serviceSpy).toHaveBeenCalled();
    });
});