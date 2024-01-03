const { example, problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10 } = require('./index');

test("", async function() {
    expect(example(6)).toBe(5);
    expect(example(10)).toBe(9);
    expect(example(3)).toBe(2);
  });

  test("", async function() {
    expect(problem1(1,5)).toBe(false);
    expect(problem1(2,2)).toBe(true);
  });

  test("", async function() {
    expect(problem2("3")).toBe(false);
    expect(problem2("21")).toBe(true);
  });

  test("", async function() {
    expect(problem3(2)).toBe("less than 10");
    expect(problem3(10)).toBe("equal to 10");
    expect(problem3(20)).toBe("greater than 10");
  });

  test("", async function() {
    expect(problem4("candy")).toBe("c");
    expect(problem4("toad")).toBe("Past the letter k");
    expect(problem4("dog")).toBe("d");
  });

  test("", async function() {
    expect(problem5(10,20)).toBe(30);
    expect(problem5(1,2)).toBe(3);
  });

  test("", async function() {
    expect(problem6(10)).toBe(600);
    expect(problem6(2)).toBe(120);
  });

  test("", async function() {
    expect(problem7(7)).toBe(8);
    expect(problem7(7000)).toBe(7001);
  });

  test("", async function() {
    expect(problem8(2,3)).toBe(13);
    expect(problem8(20,30)).toBe(130);
  });

  test("", async function() {
    expect(problem9(10)).toBe(true);
    expect(problem9(17)).toBe(false);
  });

  test("", async function() {
    expect(problem10(24)).toBe(2);
    expect(problem10(75)).toBe(6.25);
  });
