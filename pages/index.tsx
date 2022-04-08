import { Container, Stack, StackDivider } from "@chakra-ui/react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../context/UserContext";
import { getRandomUser } from "../utils/getRandomUser";

const Home: NextPage = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <UserContext.Provider value={user}>
      <Container maxW="container.twitter">
        <Stack direction="row" minH="100vh" divider={<StackDivider />}>
          <Sidebar />
          <Feed />
          <Stack w="25%"></Stack>
        </Stack>
      </Container>
    </UserContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await getRandomUser();

  return {
    props: {
      user,
    },
  };
};

export default Home;
