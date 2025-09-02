import FormInputs from "@/components/Form/FormInputs";
import TextAreaInput from "@/components/Form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/Schema";
import Buttons from "@/components/Form/Buttons";
import CategoryInput from "@/components/Form/CategoryInput";
import Mainmap from "@/components/Form/map/Mainmap";

const Camping = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(campingSchema),
  });
  const { errors, isSubmitting } = formState;

  console.log(isSubmitting);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
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
            <CategoryInput
              name="category"
              register={register}
              setValue={setValue}
            />
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
