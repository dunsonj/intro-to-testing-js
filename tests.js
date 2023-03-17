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
    // it('should return a string "Hello World" when executed', function () {
    //     expect(sayHello()).toBe("Hello, World!");
    // })
    it('should return a string "Hello World" when true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return a string "Hello World" when false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    })
});

describe('isFive' , function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true when 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when  the string of 5 is passed', function () {
        expect(isFive("5")).toBe(true);
    });

});

describe('isEven' , function() {
    it('should be a define function' , function () {
        expect(typeof isEven).toBe('function');
        });
    it('should return a boolean value when passed any number', function ()  {
        expect(typeof isEven("number")).toBe('boolean');
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed the number 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when passed a non-numeric string like "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when passed "8"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when passed a non-numeric string like "Infinity"', function () {
        expect(isEven("Infinity")).toBe(false)
    });
    it('should return false when passed Boolean ' , function () {
        expect(isEven(true || false)).toBe(false)
    });
    it('should return false when no argument is pushed', function () {
        expect(isEven()).toBe(false)
    });
});

describe('isVowel' , function () {
    it('should be a define function' , function () {
    expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value when passed any vowel',function () {
        expect(isVowel.includes('a', 'e', 'i','o', 'u')).toBe('boolean')
    });
    it('should return true  when passed a' , function  ()  {
        expect(isVowel("A" || "a")).toBe(true)
    });
    it('should return false when passed y' , function  ()  {
        expect(isVowel("Y" || "y")).toBe(false)
    });
    it('should return false  when passed 4' , function  ()  {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false when passed Boolean ' , function () {
        expect(isVowel(true || false)).toBe(false)
    });
    it('should return false when passed banana ' , function () {
        expect(isVowel('banana')).toBe(false)
    });
    it('should return false when no argument is pushed', function () {
        expect(isVowel()).toBe(false)
    });
});
