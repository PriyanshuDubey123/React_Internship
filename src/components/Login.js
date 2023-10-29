
import { useForm } from 'react-hook-form';

import StyledForm from './Styles';

import loginImage from '../images/loginImage.png'

import loginLogo from '../images/loginLogo.png'

export default function Login() {
 
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
    <div className='flex flex-col p-10 md:flex-row lg:flex-row place-items-center'>
      <img className=' hidden w-2/6 lg:flex'src={loginImage} alt="" />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
          src={loginLogo}
            className="mx-auto h-14 w-auto"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

          <StyledForm>
      

          {/* form using styled components */}

          <form noValidate
           onSubmit={handleSubmit((data) => {
          })}
           action="#" method="POST">
            <div>
              <label htmlFor="email">
                Email address
              </label>
              <div className="mt-2">
              <input
                  id="email"
                  {...register("email", { required: "email is required",
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: "email is not valid",
                  }})}
                  type="email"
                  
                ></input>
                {errors.email && (
                  <p className=" text-red-500 ">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
              <input
                  id="password"
                  {...register("password", {
                    required: "password is required",
                   })}
                  type="password"
                />
                {errors.password && (
                  <p className=" text-red-500 ">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
              Create an Account
          </p>
        </StyledForm>

      </div>
      </div>
    </>
  );
}
