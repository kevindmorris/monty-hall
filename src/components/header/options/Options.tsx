import { Stack } from "@mui/material";
import Option from "./OptionModal";
import OptionReset from "./OptionReset";
import { ContentAbout, ContentRules, ContentStatistics } from "./content";

export default function Options() {
  return (
    <Stack direction="row" gap={2} useFlexGap sx={{ mt: 4 }}>
      <Option title="About" content={<ContentAbout />}>
        About
      </Option>
      <Option title="Rules" content={<ContentRules />}>
        Rules
      </Option>
      <Option title="Statistics" content={<ContentStatistics />}>
        Stats
      </Option>
      <OptionReset />
    </Stack>
  );
}
