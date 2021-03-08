const Express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');

const app = Express();

app.use(BodyParser.json());

require('./routes/product.routes')(app);
require('./routes/user.routes')(app);

(async () => {
  await Mongoose.connect('mongodb+srv://kcule:Kristo1997@cluster0.5cagt.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  app.listen(8000);
})();
