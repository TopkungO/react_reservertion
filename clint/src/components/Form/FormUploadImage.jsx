import { useState } from "react";

import { resizeFile } from "@/utils/resizeimage";
import { uploadImage } from "@/api/upload";
import { useAuth } from "@clerk/clerk-react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RotateCw } from "lucide-react";

const FormUploadImage = ({ setValue }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();
  const handleOnChange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const token = await getToken();
    if (!file) return;
    try {
      const resizedImage = await resizeFile(file);
      const res = await uploadImage(token, resizedImage);
      setValue("image", res.data.result);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Label>Upload Image</Label>
      <div className="flex item-center gap-2">
        <Input type="file" onChange={handleOnChange} />
        {isLoading && <RotateCw className="animate-spin" />}
      </div>
    </div>
  );
};

export default FormUploadImage;
