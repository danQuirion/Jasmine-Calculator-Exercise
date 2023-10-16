
it('should calculate the monthly rate correctly', function () {
    // ...
  const values = {amount: 5000, years: 4, rate: 3};
  expect(calculateMonthlyPayment(values)).toEqual('110.67')
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
  const values = {amount : 75000, years: 6, rate: 5.5};
  expect(calculateMonthlyPayment(values)).toEqual('1225.34')
  });
  
  it("should be able to handle a high interest rate", function() {
    // ..
    const values = {amount: 50000, years: 4, rate: 85};
    expect(calculateMonthlyPayment(values)).toEqual('3679.43');
  });
  
  /// etc
  