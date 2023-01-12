import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const firstName = watch("firstName");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <p>{firstName} </p>
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}
