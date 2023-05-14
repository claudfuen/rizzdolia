/* eslint-disable @next/next/no-img-element */
"use client";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const flipAnimation = {
  hidden: { rotateX: 0 },
  visible: { rotateX: 180 },
};

const nudgeAnimation = {
  initial: { y: 0 },
  animate: { y: [0, -10, 0] },
};

export default function Home() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <VStack w={"full"} py={16} gap={8} px={4}>
      <Heading
        mx={"auto"}
        textAlign={"center"}
        animation={"flicker 1s linear infinite"}
        size="3xl"
        fontFamily={"Comic Neue, Comic Sans MS, Comic Sans, cursive"}
      >
        Rizzdolia
      </Heading>
      <motion.div
        initial="hidden"
        animate={flipped ? "visible" : "hidden"}
        variants={flipAnimation}
      >
        <Flex
          minH={"96"}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={handleClick}
          rounded={"xl"}
          w={"full"}
          maxW={"2xl"}
          cursor={"pointer"}
          userSelect={"none"}
          // On hover show a full 7 color rainbow gradient

          backgroundImage="linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
        >
          {!flipped && (
            <motion.img
              variants={nudgeAnimation}
              animate="animate"
              initial="initial"
              transition={{ yoyo: Infinity, duration: 1 }}
              src="julian.png"
              alt="infinite"
            />
          )}
          {flipped && (
            <Text
              color={"black"}
              fontSize={"3xl"}
              transform={"rotateX(180deg)"}
              px={16}
              fontFamily={"Comic Neue, Comic Sans MS, Comic Sans, cursive"}
            >
              got infinite?
            </Text>
          )}
        </Flex>
      </motion.div>
    </VStack>
  );
}
