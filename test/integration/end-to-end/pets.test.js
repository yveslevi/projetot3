const supertest = require("supertest");
describe("PetsController", () => {
  it("Deve obter pet com sucesso", async () => {
    await supertest(sails.hooks.http.app)
      .get("/pet")
      .set(
        "Authorization",
        "Bearer eyJleHBpcmF0aW9uX2RhdGUiOjE3MTYyNDAxMzMwNTgsInNlc3Npb24iOiIzZjQyNTE0Zi03MDRiLTRmMWEtYTQ1Ni1iZGFmYmIyZGVkN2YifQ=="
      )
      .expect(200)
      .expect([]);
  });
});
