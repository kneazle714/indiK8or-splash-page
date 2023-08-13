import  express  from "express";
import cors from 'cors';
import path from 'path';

const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: 'https://indik8or-359561821b26.herokuapp.com/',
    credentials: true,
  })
);

// parse incoming requests
app.use(express.json());
// parse incoming requests with url-encoded payloads
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(path.resolve(), 'dist')));
  app.get('/*', function (_req, res) {
    res.sendFile(path.join(path.resolve(), 'dist', 'index.html'));
  });

  app.use((req, res) =>
  res.status(404).send('Invalid endpoint')
);
// global handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  // return res.status(errorObj.status).json(errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

// server listening on port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});