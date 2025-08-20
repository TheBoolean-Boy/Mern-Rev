import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/product";



function ProductCard({ product }) {
  const textColor = useColorModeValue("gray.600", "gray.200")
  const bg = useColorModeValue("white", "gray.800")

  const {deleteProduct} =useProductStore();
  const toast = useToast();
  const handleDelete = (pid) => {
    const {success, message} = deleteProduct(pid);

    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
        duration: 3000
      }) 
    }else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
        duration: 3000
      }) 
    }
  }
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<FiEdit />
} 
          // onClick={onOpen} 
          colorScheme="blue"
           />
          <IconButton
            icon={<MdDelete />}
            onClick={() => handleDelete(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>
    </Box>
  );
}

export default ProductCard;
