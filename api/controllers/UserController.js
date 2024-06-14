module.exports = {
  create: async (req, res) => {
    const url = await sails.helpers.upload(req, "profile_photo");
    await Users.create({ ...req.body, id: "sas", profile_photo: url });
    return res.json({
      success: true,
    });
  },
  login: async (req, res) => {
    const user = await Users.findOne({ email: req.body.email });
    if (!user || user.password !== req.body.password) {
      return res.json({
        code: "INVALID_CREDENTIALS",
        message: "Invalid email or password",
      });
    }

    const currentDate = new Date();
    const result = {
      expiration_date: new Date().setDate(currentDate.getHours() + 2),
      session: user.id,
    };

    const stringfyResult = JSON.stringify(result);
    return res.json({ access_token: btoa(stringfyResult) });
  },
};
