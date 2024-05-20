const cloudinary = require("cloudinary").v2;
module.exports = {
  friendlyName: "Upload",

  description: "Upload a file in cloudinary.",

  inputs: {
    req: {
      type: "ref",
      required: true,
      description: "The http request",
    },
    fieldName: {
      type: "string",
      required: true,
      description: "Field name",
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async (inputs, exits) => {
    let url = "";
    const { req, fieldName } = inputs;
    await req.file(fieldName).upload(async (err, files) => {
      if (err) {
        throw new Error(err);
      }

      if (!files || files.length === 0) {
        throw new Error("Arquivo é obrigatorio");
      }
      const file = files[0];
      cloudinary.config({
        cloud_name: "ddzb2uqkh",
        api_key: "876665737496418",
        api_secret: "omYZ8RQKma4vaG2ah0rQ7YvDpP8",
      });

      const result = await cloudinary.uploader.upload(file.fd);
      url = result.secure_url;
      return exits.success(url);
    });
  },
};
