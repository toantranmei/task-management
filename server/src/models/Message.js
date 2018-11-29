const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
	{
		type: String,
		_users: {
			type: Schema.Types.ObjectId,
			ref: "User"
		},
		text: String
	},
	{ timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
