import app from "./app";
import { dbConnect } from "./dbConnect";

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Website is running");
});

async function startServer() {
  try {
    await dbConnect();
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (e) {
    console.log("Server startup error", e);
  }
}

startServer();