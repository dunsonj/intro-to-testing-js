// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello' , function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello!" when executed', function () {
        expect(sayHello()).toBe('Hello');
    });
    it('should never return "undefined" when called', function () {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return a string "Hello Jane" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello Jane");
    });
    it('should return a string "Hello Alex" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello Alex");
    });
    it('should return a string "Hello Pat" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello Pat");
    });
    // it('should return a string "Hello," + name "!" when executed', function () {
    //     expect(sayHello()).toBe("Hello" + "name" + "!");
    // });
});