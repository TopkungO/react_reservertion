import FormInputs from "@/components/Form/FormInputs";
import { useForm } from "react-hook-form";
import Buttons from "@/components/Form/Buttons";
import { profileSchema } from "@/utils/Schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@clerk/clerk-react";
import { createProfile } from "@/api/profile";

const Profile = () => {
  const { getToken } = useAuth();

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(profileSchema),
  });
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data) => {
    const token = await getToken();
    data.token = token;

console.log(data);

    await createProfile(token,data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create Profile</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              name="firstname"
              type="text"
              placeholder="input you firstname..."
              register={register}
              errors={errors}
            />
            <FormInputs
              name="lastname"
              type="text"
              placeholder="input you lastname..."
              register={register}
              errors={errors}
            />
          </div>

          <Buttons
            text="Create Profile"
            isPending={isSubmitting}
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Profile;
