import { Card, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Narbar = () => {
  const { theme } = useTheme();

  return (
    <Card
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        alt="icono de la app"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        width={70}
        height={70}
      />

      <Link href="/">
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites">
        <Text>Favorites</Text>
      </Link>
    </Card>
  );
};
