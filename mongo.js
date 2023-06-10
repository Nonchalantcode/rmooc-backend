const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

console.log({ arguments: process.argv });

const password = process.argv[2];

const url = `mongodb+srv://Nonchalantcode:${password}@r-mooc-cluster.0b4cb4e.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

/* const note = new Note({
  content: "HTML is easy, but no as easy as your mom",
  important: true,
});

note.save().then((result) => {
  console.log({ result });
  console.log("note saved");
  mongoose.connection.close();
}); */

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log({ note });
  });
  mongoose.connection.close();
});
