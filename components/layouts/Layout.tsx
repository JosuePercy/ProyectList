import Prototype from "prop-types";
import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { Narbar } from "../ui";

export interface Props {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>

        <meta name="author" content="Josue Huallulo" />
        <meta
          name="description"
          content={`información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={` ${title}, pokemon, pokedex`} />

        <meta
          property="og:title"
          content={`Informacion sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Narbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

// Layout.Prototype = {
//   title: Prototype.elementType.isRequired,
// };

export default Layout;
