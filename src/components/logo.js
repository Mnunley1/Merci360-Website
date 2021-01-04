/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...rest}
    >
      <Image
        sx={styles.logo}
        src="https://www.merci360.com/wp-content/uploads/2020/10/merci-logo-circle-03.png"
        alt="startup landing logo"
      />
    </Link>
  );
}

const styles = {
  logo: {
    height: "50px",
    width: "auto",
  },
};
