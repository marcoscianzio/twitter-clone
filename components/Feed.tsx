import { Heading, Stack, StackDivider } from "@chakra-ui/react";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";

const tweets = new Array(5).fill(" ");

const Feed = () => {
  return (
    <Stack
      overflowY="scroll"
      overflowX="hidden"
      maxH="100vh"
      sx={{
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          bg: "#888",
        },
        "::-webkit-scrollbar-thumb:hover": {
          bg: "#555",
        },
      }}
      p={4}
      w="75%"
      divider={<StackDivider ml="-25px !important" mr="-25px !important" />}
    >
      <Stack spacing={8}>
        <Stack>
          <Heading fontSize="xl">Inicio</Heading>
        </Stack>
        <CreateTweet />
      </Stack>
      {tweets.map((_, i) => {
        return <Tweet />;
      })}
    </Stack>
  );
};

export default Feed;
