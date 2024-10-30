import React from 'react';
import { Box, Skeleton, Flex, Card, Button, Grid } from "@radix-ui/themes";

export const SkeletonLoader = () => (
  <Grid
    style={{
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    }}
  >
    {[...Array(8)].map((_, i) => (
      <Box key={i} width='100%' >
        <Box maxWidth="100%">
          <Card size="2">
            <Flex justify='end' mb="2">
              <Skeleton width="50px" height="20px" />
            </Flex>

            <Box width="100%" height="375px" mb="4">
              <Skeleton width="100%" height="100%" />
            </Box>

            <Box mb="3">
              <Skeleton width="60%" height="24px" mb="2" />
              <Skeleton width="40%" height="16px" />
            </Box>

            <Flex justify="between" align="center" mb="3">
              <Skeleton width="30%" height="16px" />
              <Box width="40%">
                <Skeleton width="100%" height="24px" />
              </Box>
            </Flex>

            <Button disabled color="gray" variant="surface" highContrast>
              <Skeleton width="80px" height="24px" />
            </Button>
          </Card>
        </Box>
      </Box>
    ))}
  </Grid>
);
