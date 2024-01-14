import React from "react";
import { Tabs, Tab, Box, Divider } from "@mui/material";

const VerticalTabs = ({ activeTab, handleChange }) => {
  return (
    <div>
      <Box
        color="inherit"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        marginTop="25px"
        borderRadius="10px"
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          orientation="vertical"
          indicator="false"
        >
          <Tab style={{ alignItems: "center" }} label="Personal Info" />
          <Divider />
          <Tab style={{ alignItems: "center" }} label="Work Experience" />
          <Divider />
          <Tab style={{ alignItems: "center" }} label="Education" />
          <Divider />
          <Tab style={{ alignItems: "center" }} label="Key Skills" />
        </Tabs>
      </Box>
    </div>
  );
};

export default VerticalTabs;
