import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header/indexHeader";
import { Sidebar } from "../components/Sidebar/indexSidebar";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  zoom: {
    enabled: false,
  },
  foreColor: theme.colors.gray[500],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-07-16T13:15.000Z",
      "2022-07-17T13:15.000Z",
      "2022-07-18T13:15.000Z",
      "2022-07-19T13:15.000Z",
      "2022-07-20T13:15.000Z",
      "2022-07-21T13:15.000Z",
      "2022-07-22T13:15.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series", data: [31, 120, 10, 28, 51, 18, 10] }];

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="4">
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6","8"]} bgColor="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              {" "}
              Inscritos da semana
            </Text>
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            ></Chart>
          </Box>

          <Box p={["6","8"]} bgColor="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              Taxa de abertura
            </Text>
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            ></Chart>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
