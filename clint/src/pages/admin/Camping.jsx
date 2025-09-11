import FormInputs from "@/components/Form/FormInputs";
import TextAreaInput from "@/components/Form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/Schema";
import Buttons from "@/components/Form/Buttons";
import CategoryInput from "@/components/Form/CategoryInput";

import { createCampimg } from "@/api/camping";
import { useAuth } from "@clerk/clerk-react";
import Mainmap from "@/components/map/Mainmap";
import FormUploadImage from "@/components/Form/FormUploadImage";

const Camping = () => {
  const { getToken } = useAuth();
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(campingSchema),
  });
  const { errors, isSubmitting } = formState;

  // console.log(isSubmitting);

  const onSubmit = async (data) => {
    const token = await getToken();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    createCampimg(token, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create camping</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              name="title"
              type="text"
              placeholder="title.."
              register={register}
              errors={errors}
            />
            <FormInputs
              name="price"
              type="number"
              placeholder="price.."
              register={register}
              errors={errors}
            />
            <TextAreaInput
              name="description"
              type="text"
              placeholder="description.."
              register={register}
              errors={errors}
            />
            <div>
              <CategoryInput
                name="category"
                register={register}
                setValue={setValue}
              />
              <FormUploadImage/>
            </div>
            <Mainmap register={register} setValue={setValue} />
          </div>

          <Buttons
            text="Create camping"
            isPending={isSubmitting}
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Camping;
