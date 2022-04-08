import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CommentIcon } from "../icons/Comment";
import { LikeIcon } from "../icons/Like";
import { RetweetIcon } from "../icons/Retweet";
import { ShareIcon } from "../icons/Share";
import Account from "./Account";

const Tweet = () => {
  return (
    <Stack py={2} spacing={4}>
      <Stack>
        <Account />
        <Text>sdfjsdfksdjkfsjfjsdfjsdkfjsjkfjksdfjs</Text>
      </Stack>

      <HStack justify="space-between">
        <HStack spacing={3}>
          <CommentIcon boxSize={5} />
          <Text>2</Text>
        </HStack>
        <HStack spacing={3}>
          <RetweetIcon boxSize={5} />
          <Text>6</Text>
        </HStack>
        <HStack spacing={3}>
          <LikeIcon boxSize={5} />
          <Text>12</Text>
        </HStack>
        <ShareIcon boxSize={5} />
      </HStack>
    </Stack>
  );
};

export default Tweet;
