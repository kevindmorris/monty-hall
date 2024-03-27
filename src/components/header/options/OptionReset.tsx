import { useAppDispatch } from "@/lib/hooks";
import { reset } from "@/lib/slices/statisticsSlice";
import OptionButton from "./OptionButton";

export default function OptionReset() {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(reset());

  return <OptionButton onClick={handleClick}>Reset</OptionButton>;
}
