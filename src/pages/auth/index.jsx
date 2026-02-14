import { Box } from "../../components/box";

export function Login() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-blue-500 font-sans gap-4 md:gap-6 flex-col text-yellow-50 flex items-center justify-center h-screen w-screen px-4 py-6">
      <p className="text-slate-300 text-center text-sm md:text-base">
        Hellow, Thamara Abreu, faça o login e receba um presente misterioso 🎁😏
      </p>
      <Box />
      <p className="text-slate-300 text-center text-sm md:text-base">
        Obs: Preste atenção em todas as dicas e não vale me perguntar as
        respostas.{" "}
      </p>
    </div>
  );
}
