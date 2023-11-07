import { useState } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Card } from "../../components/Card";
import {
  Form,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";

export const LoginPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get("username") != null;
  const actionData = useActionData() as { error: string } | undefined;

  return (
    <Grid p={3}>
      <VStack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Card rounded={"lg"} boxShadow={"lg"} p={8}>
          <Text fontSize={"lg"} fontWeight={600}>
            Create your account
          </Text>
          <Form method="post" replace>
            <input type="hidden" name="redirectTo" value={from} />
            <FormControl id="username" isRequired mt={4}>
              <FormLabel color="text.primary">Email address</FormLabel>
              <Input color="text.primary" type="username" name="username" />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel color="text.primary">Password</FormLabel>
              <Input color="text.primary" type="password" name="password" />
            </FormControl>
            <Button
              disabled={isLoggingIn}
              type="submit"
              colorScheme="blue"
              size="lg"
              fontSize="md"
              mt={8}
            >
              {isLoggingIn ? "Creating Account..." : "Create Account"}
            </Button>
            {actionData && actionData.error ? (
              <p style={{ color: "red" }}>{actionData.error}</p>
            ) : null}
          </Form>
        </Card>
      </VStack>
    </Grid>
  );
};
