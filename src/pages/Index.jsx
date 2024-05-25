import { useState } from "react";
import { Container, VStack, Input, Textarea, Button, Text, Box } from "@chakra-ui/react";
import { FaBug } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDisplayText = () => {
    setDisplayText(inputText);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Debuggable Text Component
        </Text>
        <Input placeholder="Enter your text here..." value={inputText} onChange={handleInputChange} />
        <Button leftIcon={<FaBug />} colorScheme="teal" onClick={handleDisplayText}>
          Display Text
        </Button>
        <Box width="100%" padding="4" borderWidth="1px" borderRadius="lg">
          <Text fontSize="lg" fontWeight="medium">
            Output:
          </Text>
          <Textarea value={displayText} readOnly />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
