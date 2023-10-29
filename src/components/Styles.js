import styled from "styled-components"
import tw from "twin.macro"

const StyledForm = styled.main.attrs({
    className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm",
})`
  & {
    form {
      ${tw`space-y-6`}
    }
    input {
      ${tw` outline-indigo-600 p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
    }
    button {
      ${tw`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    }
    label {
        ${tw`block text-sm font-medium leading-6 text-gray-900`}
    }
  }
`
export default StyledForm