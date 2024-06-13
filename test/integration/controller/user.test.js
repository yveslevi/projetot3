const assert = require("assert");
const controller = require("../../../api/controllers/UserController");
const { mockAsync, RESPONSE, USER, FILE } = require("../../util/");

describe("UserController", () => {
  it("Deve criar usuário com sucesso", async () => {

    const databaseStub = mockAsync(Users, "create", true);
    const req = {
      body: USER,
      file: FILE,
    };

    const result = await controller.create(req, RESPONSE);

    assert.strictEqual(uploadStub.calledOnce, true);
    assert.strictEqual(databaseStub.calledOnce, true);
    assert.deepStrictEqual(result, { success: true });
  });

  it("Deve criar usuário com sucesso", async () => {
    const findOneStub = mockAsync(Users, "findOne", USER);
    const req = {
      body: {
        email: "",
        password: "password123",
      },
    };

    const result = await controller.login(req, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);

    assert.ok(result.access_token);
  });
});
