import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; //
import { signUpValidation } from "./signUpValidation";
import styled from "styled-components";

const StyledSignUpForm = styled.form``;
const SignUpFormElement = styled.div``;
const SignUpLabel = styled.label`
  text-align: center;
`;
const SignUpInput = styled.input`
  align-item: center;
`;
export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signUpValidation),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
        <h1>회원가입</h1>
        <SignUpFormElement>
          <SignUpLabel>아이디</SignUpLabel>
          <SignUpInput
            name="email"
            placeholder="이메일"
            {...register("email")}
          />
          {errors.email && <p style={{ margin: 0 }}>{errors.email.message}</p>}
        </SignUpFormElement>
        <SignUpFormElement>
          <SignUpLabel>비밀번호</SignUpLabel>
          <SignUpInput
            type="password"
            name="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          {errors.password && (
            <p style={{ margin: 0 }}>{errors.password.message}</p>
          )}
        </SignUpFormElement>
        <SignUpFormElement>
          <SignUpLabel>비밀번호 확인</SignUpLabel>
          <SignUpInput
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <p style={{ margin: 0 }}>{errors.passwordConfirm.message}</p>
          )}
        </SignUpFormElement>
        <input type="submit" />
      </StyledSignUpForm>
    </div>
  );
}
