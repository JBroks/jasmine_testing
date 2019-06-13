describe("My fizzBuzz function", function() {

    beforeEach(function() {
        number = new fizzBuzz();
    });

    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual. 
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz when called fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it("should return Fizz when called fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it("should return Buzz when called fizzBuzz(5)", function() {
            var result = fizzBuzz(5)
            expect(result).toBe("Buzz");
        });

        it("should return number 1 when called fizzBuzz(1)", function() {
            var result = fizzBuzz(1)
            expect(result).toBe(1);
        });

    });
});
