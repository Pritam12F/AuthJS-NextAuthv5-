import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Selectors() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a your age" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Enter your age</SelectLabel>
          <SelectItem value="minor">&lt;18</SelectItem>
          <SelectItem value="adult">Above 18</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
