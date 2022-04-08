import { Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { navItems } from "../constants/navItems";
import { UserContext } from "../context/UserContext";
import { LogoIcon } from "../icons/Logo";
import Account from "./Account";

const Sidebar = () => {
  return (
    <Stack w="25%" pt={4}>
      <Stack h="full" pb={4} justifyContent="space-between">
        <Stack spacing={12}>
          <LogoIcon boxSize={8} />
          <Stack spacing={8}>
            {navItems.map(({ icon, label }, i) => {
              return (
                <HStack key={i} spacing={4}>
                  <Icon as={icon} boxSize={7} />
                  <Text fontSize="xl">{label}</Text>
                </HStack>
              );
            })}
            <Button size="lg" variant="primary">
              Twittear
            </Button>
          </Stack>
        </Stack>

        <Account />
      </Stack>
    </Stack>
  );
};

export default Sidebar;
