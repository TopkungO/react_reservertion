import { resizeFile } from "@/utils/resizeimage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { uploadImage } from "@/api/upload";
import { useAuth } from "@clerk/clerk-react";

const FormUploadImage = () => {
  const { getToken } = useAuth();
  const handleOnChange = async (e) => {
    const file = e.target.files[0];
    const token = await getToken();
    if (!file) return;
    try {
      const resizedImage = await resizeFile(file);
      const result = await uploadImage(token, resizedImage)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Label>Upload Image</Label>
      <div>
        <Input type="file" onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default FormUploadImage;
