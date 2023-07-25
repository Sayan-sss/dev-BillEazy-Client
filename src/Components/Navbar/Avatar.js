import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function LetterAvatars() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        marginRight: "2rem",
      }}
    >
      <Avatar>H</Avatar>
    </Stack>
  );
}
