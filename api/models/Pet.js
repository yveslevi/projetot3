module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    photo: {
      type: "string",
      required: true,
    },
    favoriteToy: {
      type: "string",
      required: true,
    },
    owner: {
      model: "Users",
      required: true,
    },
  },
};
