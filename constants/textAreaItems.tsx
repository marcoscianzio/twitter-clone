import { IconProps } from "@chakra-ui/react";
import { EmojiIcon } from "../icons/Emoji";
import { GifIcon } from "../icons/Gif";
import { ImageIcon } from "../icons/Image";
import { LocationIcon } from "../icons/Location";
import { ScheduleIcon } from "../icons/Schedule";
import { SurveyIcon } from "../icons/Survey";

interface TextAreaItem {
  icon: React.FC<IconProps>;
  disabled?: boolean;
}

export const textAreaItems = [
  {
    icon: ImageIcon,
  },
  {
    icon: GifIcon,
  },
  {
    icon: SurveyIcon,
  },
  {
    icon: EmojiIcon,
  },
  {
    icon: ScheduleIcon,
  },
  {
    icon: LocationIcon,
    disabled: true,
  },
] as TextAreaItem[];
