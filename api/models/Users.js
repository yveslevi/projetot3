const { v4: uuidv4 } = require("uuid");
module.exports = {
  attributes: {
    id: {
      type: "string",
      columnName: "id",
      required: true,
      unique: true,
    },
    username: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
    },
    bio: {
      type: "string",
      maxLength: 300,
    },
    profile_photo: {
      type: "string",
      allowNull: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },

  beforeCreate: async (values, proceed) => {
    values.id = uuidv4();
    return proceed();
  },
};
