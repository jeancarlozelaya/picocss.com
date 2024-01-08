import Code from "~/components/Code";
import Link from "~/components/Link";
import Check from "~/components/icons/Check";
import { useNavigation } from "~/contexts/NavigationContext";
import { getColorFamilies, removeLines } from "~/utils";
import Heading from "../Heading";

// Add a missing empty line before a comment.
const addMissingEmptyLineBeforeComment = ({ code }) => {
  return code.replaceAll("\n}\n/*", "\n}\n\n/*");
};

// Add a or an before a color name.
const colorWithPrefix = (color) => {
  let prefix = "a";
  const lowercaseColor = color.charAt(0).toLowerCase() + color.slice(1);
  if (["a", "e", "i", "o", "u"].includes(lowercaseColor.charAt(0))) {
    prefix = "an";
  }
  return `${prefix} ${lowercaseColor}`;
};

export default function ThemePreview({ title, code, ...props }) {
  const preventDefault = (e) => e.preventDefault();

  const modifiedCode = addMissingEmptyLineBeforeComment({
    code: removeLines({
      code,
      linesToRemoveFromEnd: 2,
    }),
  });

  const colorFamilies = getColorFamilies();
  const { locationPath, nextPageCurrentlyLoading, isLoading } = useNavigation();

  return (
    <article className={`color-picker component`} aria-label="Custom theme example" {...props}>
      <header>
        {colorFamilies.map((color) => {
          const linkTo =
            color === "red" ? "/docs/theme-generator" : `/docs/theme-generator/${color}`;
          const isCurrent = locationPath === linkTo;
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <Link
              key={color}
              to={linkTo}
              className={`pico-background-${color}`}
              aria-label={title}
              preventScrollReset={true}
              aria-busy={isLoading && nextPageCurrentlyLoading === linkTo}
            >
              {isCurrent && !isLoading ? <Check isAnimated={true} /> : null}
            </Link>
          );
        })}
      </header>
      <hgroup>
        <Heading level={2}>{title}</Heading>
        <p>Form example with {colorWithPrefix(title)} theme.</p>
      </hgroup>
      <form>
        <fieldset className="grid">
          <input
            type="text"
            name="login"
            placeholder="Login"
            aria-label="Login"
            autoComplete="nickname"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            autoComplete="current-password"
          />
          <button type="submit" onClick={preventDefault}>
            Log in
          </button>
        </fieldset>
        <fieldset>
          <label>
            <input type="checkbox" role="switch" name="switch" defaultChecked={true} /> I agree to
            the{" "}
            <Link to="#" onClick={preventDefault}>
              Privacy Policy
            </Link>
          </label>
        </fieldset>
      </form>
      <Code as="footer" language="css">
        {modifiedCode}
      </Code>
    </article>
  );
}
