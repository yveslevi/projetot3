module.exports = {
  create: (req, res) => {
    Pet.create({
      ...req.body,
      owner: req.userId,
    }).exec((err, pet) => {
      if (err) {
        console.error("Erro ao criar o pet:", err);
        return;
      }
      return res.status(201).send();
    });
  },
  getPets: (req, res) => {
    Pet.find({ owner: req.userId }).exec((err, pets) => {
      if (err) return err;
      return res.json([...pets]);
    });
  },
};
