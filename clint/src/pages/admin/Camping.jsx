import FormInputs from "@/components/Form/FormInputs";
import TextAreaInput from "@/components/Form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/Schema";




const Camping = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(campingSchema),
  });
  const { errors } = formState;

  console.log(errors);
  

  const onSubmit = (data) => console.log(data);

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
          </div>
          <button>submit</button>
        </form>
      </div>
    </section>
  );
};

export default Camping;
