import { Button } from "@mui/material";
import "./homepage.module.css";

function Homepage() {
  return (
    <>
      <div className="homepage-container" id="homepage">
        <h1>Booklist App</h1>
        <Button variant="contained" href="/avicena" style={{ margin: "10px" }}>
          Avicena{"'s"} Book
        </Button>
        <Button variant="contained" href="/najmy" style={{ margin: "10px" }}>
          Najmy{"'s"} Book
        </Button>
        <Button variant="contained" href="/deffi" style={{ margin: "10px" }}>
          Deffi{"'s"} Book
        </Button>
      </div>
      <footer></footer>
    </>
  );
}

export default Homepage;
