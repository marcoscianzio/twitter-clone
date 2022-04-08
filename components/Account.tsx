import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Account = () => {
  const user = useContext(UserContext);

  return (
    <HStack spacing={4}>
      <Avatar src={user?.image} />
      <Stack spacing={-1}>
        <Text fontWeight="bold">{user?.name}</Text>
        <Text>@{user?.nickname}</Text>
      </Stack>
    </HStack>
  );
};

export default Account;
