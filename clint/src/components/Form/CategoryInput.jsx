import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/utils/categories";
const CategoryInput = ({ name, register, setValue }) => {
  return (
    <div className="mb-2">
        <input hidden {...register(name)} />
      <Label className="capitalize">{name}</Label>
      <Select required onValueChange={(value)=>setValue(name,value)}>
        <SelectTrigger>
          <SelectValue placeholder="please Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, index) => (
            <SelectItem value={item.label} key={index}>
              <span className="flex items-center gap-4">
                <item.icon />
                <p className="capitalize">{item.label}</p>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryInput;
