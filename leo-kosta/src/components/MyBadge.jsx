import { Badge } from "react-bootstrap";

const MyBadge = (props) => (
  <Badge
    variant={
      props.book.category === "fantasy"
        ? "info"
        : props.book.category === "history"
        ? "warning"
        : props.book.category === "romance"
        ? "light"
        : props.book.category === "horror"
        ? "dark"
        : "scifi"
    }
  >
    {props.book.category}
  </Badge>
);

export default MyBadge;
