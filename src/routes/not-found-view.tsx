import image from "../icons/404-image.jpg";

export default function NotFoundView() {
  return (
    <>
      <h3>Oops! Page not found</h3>
      <img
        style={{ height: "300px", display: "block" }}
        alt="Page not found"
        src={image}
      ></img>
      <p>
        <a href="https://www.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_7967795.htm#query=404&position=5&from_view=keyword">
          Image by storyset
        </a>
        <br />
        on Freepik
      </p>
    </>
  );
}
