import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center min-h-[70px]">
      Made with ❤️ by&nbsp;
      <Link className="underline" href="/" target="_blank">
        Mert Sakınç
      </Link>
    </footer>
  );
};

export default Footer;
