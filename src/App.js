import React, { Fragment } from 'react';
import { Flex, Heading, Center, Button, InputGroup, InputLeftElement, Input, Box, Spacer } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import UploadImageToS3WithReactS3 from './components/UploadToS3';

function App() {
  return (
    <Fragment>
      <Flex bg="gray.700" color="white" w="100%" p={6}>
        <Box>
          <Heading size="lg">Hot Autonomous Pursuit Challenge</Heading>
        </Box>
        <Spacer/>
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="string" placeholder="Etiquetas" />
            <Button ml="4" bg="gray.400" border="white">Buscar</Button>
          </InputGroup>
        </Box>
      </Flex>
      <Center w="100%" minHeight="500">
        <UploadImageToS3WithReactS3></UploadImageToS3WithReactS3>
      </Center>
    </Fragment>
  );
}

export default App;