import { Box, Text } from "@chakra-ui/react";

const Error = ({ message }: { message: string }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Text color="red.500" fontSize="xl">
                {message}
            </Text>
        </Box>
    );
};

export default Error;
