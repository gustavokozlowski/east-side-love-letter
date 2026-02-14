import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Box = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if (validateCredentials(data)) {
      return navigate("/home");
    }
    console.log(data);
  };

  function validateCredentials(data) {
    data.senha = data.senha.trim().toLowerCase();
    data.nome = data.nome.trim().toLowerCase();

    if (data.senha === "24/09/2020" || data.senha === '24092020' && data.nome === "supermo" || data.nome === "supermô") {
      return true;
    }
    return false;
  }

    return (
      <div className="bg-white shadow-2xl box-content text-black rounded-3xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-fit flex flex-col text-center justify-center items-center p-4 md:p-6">
        <form
          className="flex flex-col gap-4 w-full max-w-sm justify-center box-content px-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl md:text-4xl font-bold shadow-text text-blue-500 transition-all">
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
              {...register("nome", { required: true })} />
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
              {...register("senha", { required: true })} />
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
  }
