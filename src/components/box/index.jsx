import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Box = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.senha == "24/09/2020" && data.nome == "supermo") {
      return navigate("/home");
    }
    console.log(data);
  };
  return (
    <div className="bg-white shadow-2xl box-content text-black rounded-3xl w-1/4 h-2/5 flex flex-col text-center justify-center items-center">
      <form
        className=" flex flex-col gap-4 w-96 h-96 justify-center box-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-bold shadow-text text-blue-500 transition-all">
          Login
        </h1>
        <div className="flex flex-col">
          <label
            className="font-bold text-left shadow-text text-blue-500"
            htmlFor="#nome"
          >
            Nome
          </label>
          <input
            className=" text-md h-9 outline-none rounded-md border-2 text-gray-500 border-blue-100 p-2"
            placeholder="Como eu gosto de te chamar?"
            type="text"
            {...register("nome", { required: true })}
          />
          {errors.nome && (
            <span className="font-medium self-start shadow-error text-red-500">
              Meu deus vidinha, tu errou feio 🙄
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="font-bold text-left text-blue-500 shadow-text  border-blue-100 "
            htmlFor="#senha"
          >
            Senha
          </label>
          <input
            className="text-md h-9 outline-none p-2 border-2 text-gray-500 border-blue-100  rounded-md"
            type="text"
            placeholder="A nossa data de aniversário"
            {...register("senha", { required: true })}
          />
          {errors.senha && (
            <span className="font-medium self-start  shadow-error  text-red-500">
              Gostosa e burra do jeito que eu gosto 😋
            </span>
          )}
        </div>

        <button className="transition-all bg-gradient-to-l from-blue-700 to-blue-400  rounded-2xl hover:brightness-125 text-slate-100  font-bold h-10 self-center w-36">
          Entrar
        </button>
      </form>
    </div>
  );
};
