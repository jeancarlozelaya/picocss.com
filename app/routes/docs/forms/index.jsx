import metaData from "~/data/meta";
import Code from "~/components/Code";
import Link from "~/components/Link";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Form ${titleSuffix}`,
  description:
    "All form elements are fully responsive in pure semantic HTML, allowing forms to scale gracefully across devices and viewports.",
});

export default function Accordions() {
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      <hgroup>
        <h1>Form</h1>
        <h2>
          All form elements are fully responsive in pure semantic HTML, allowing forms to scale
          gracefully across devices and viewports.
        </h2>
      </hgroup>

      <p>
        Inputs are <Code display="inline" language="css">{`width: 100%;`}</Code> by default and are
        the same size as the buttons to build consitent forms.
      </p>
      <article aria-label="Form example" className="component">
        <form onSubmit={preventDefault}>
          <fieldset>
            <label>
              First name
              <input name="first_name" placeholder="First name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Email" autoComplete="email" />
            </label>
          </fieldset>
          <input type="submit" value="Subscribe" />
        </form>
        <footer>
          <Code>{`<form>

  <fieldset>
    <label>
      First name
      <input
        name="first_name"
        placeholder="First name"
      >
    </label>
    <label>
      Email
      <input
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="email"
      >
    </label>
  </fieldset>

  <input
    type="submit"
    value="Subscribe"
  >
</form>`}</Code>
        </footer>
      </article>

      <p>
        <Code display="inline">{`<input>`}</Code> can be inside or outside{" "}
        <Code display="inline">{`<label>`}</Code>.
      </p>
      <article aria-label="Label and input syntax" className="component">
        <form>
          <label>
            First name
            <input name="first_name" placeholder="First name" />
          </label>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" autoComplete="email" />
        </form>
        <footer>
          <Code>{`<form>
  
  <!-- Input inside label -->
  <label>
    First name
    <input
      name="first_name"
      placeholder="First name"
    >
  </label>

  <!-- Input outside label -->
  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    placeholder="Email"
    autocomplete="email"
  >

</form>`}</Code>
        </footer>
      </article>

      <p>
        You can use <Code display="inline">.grid</Code> (see <Link to="/docs/grid">Grid</Link>) on a
        form, or inside a form.
      </p>
      <article aria-label="Form and grid example" className="component">
        <form onSubmit={preventDefault}>
          <fieldset className="grid">
            <input name="login" placeholder="Login" aria-label="Login" autoComplete="nickname" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              autoComplete="current-password"
            />
            <input type="submit" value="Login" />
          </fieldset>
        </form>
        <footer>
          <Code>{`<form>
  <fieldset class="grid">
    <input 
      name="login"
      placeholder="Login"
      aria-label="Login"
      autocomplete="nickname"
    >
    <input
      type="password"
      name="password"
      placeholder="Password"
      aria-label="Password"
      autocomplete="current-password"
    >
    <input
      type="submit"
      value="Login"
    >
  </fieldset>
</form>`}</Code>
        </footer>
      </article>

      <p>
        <Code display="inline">{`<small>`}</Code> below form elements are muted and can act as help
        text.
      </p>
      <article aria-label="Form helpers example" className="component">
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          aria-label="Email"
          aria-describedby="email-helper"
        />
        <small id="email-helper">We'll never share your email with anyone else.</small>
        <footer>
          <Code>{`<input
  type="email"
  name="email"
  placeholder="Email"
  autoComplete="email"
  aria-label="Email"
  aria-describedby="email-helper"
>
<small aria-describedby="email-helper">
  We'll never share your email with anyone else.
</small>`}</Code>
        </footer>
      </article>
    </>
  );
}