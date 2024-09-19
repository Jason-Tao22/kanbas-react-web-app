import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link to="https://github.com/Jason-Tao22/kanbas-react-web-app/tree/main/src/Labs">
          Labs
        </Link>
      </li>
      <li>
        <Link to="https://github.com/Jason-Tao22/kanbas-react-web-app/tree/main/src/Labs/Lab1">
          Lab 1
        </Link>
      </li>
      <li>
        <Link to="https://github.com/Jason-Tao22/kanbas-react-web-app/tree/main/src/Labs/Lab2">
          Lab 2
        </Link>
      </li>
      <li>
        <Link to="https://github.com/Jason-Tao22/kanbas-react-web-app/tree/main/src/Labs/Lab3">
          Lab 3
        </Link>
      </li>
      <li>
        <Link to="/Kanbas">Kanbas</Link>
      </li>
    </ul>
  );
}
