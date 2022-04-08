import {
  Avatar,
  Button,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Textarea,
} from "@chakra-ui/react";
import { useContext } from "react";
import { textAreaItems } from "../constants/textAreaItems";
import { UserContext } from "../context/UserContext";

const CreateTweet = () => {
  const user = useContext(UserContext);

  return (
    <Stack spacing={4} direction="row">
      <Avatar src={user?.image} />
      <Stack w="full" divider={<StackDivider />}>
        <Textarea
          fontSize="xl"
          placeholder="¿Qué esta pasando?"
          variant="unstyled"
          w="full"
          resize="none"
        />
        <HStack justify="space-between">
          <HStack spacing={4}>
            {textAreaItems.map(({ icon }) => {
              return <Icon as={icon} boxSize={6}></Icon>;
            })}
          </HStack>
          <Button variant="primary">Twittear</Button>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default CreateTweet;
