const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },

    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo-Image-Placeholder.svg&psig=AOvVaw2NaO83RbDSxHbFI1koDaSA&ust=1710097060014000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjgiZLu54QDFQAAAAAdAAAAABAJ",
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
