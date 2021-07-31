import { apply } from 'twind'

export const transitionAll = apply`transition-all`
export const transitionBox = apply`hover:(shadow-xl text-gray-600) ${transitionAll}`
export const transitionText = apply`hover:(text-gray-600) ${transitionAll}`

export const container = apply`flex(& col) justify-center items-center px-6`

export const textTitle = apply`text(sm:xl md:3xl lg:4xl center) font-cursive`
export const textBase = apply`text(sm:base md:lg)`
export const textSmall = apply`text(sm:xs md:base lg:xl)`
export const textInput = apply`${textBase} font-sans`
export const textSubmit = apply`${textBase} text-center font-cursive`
export const textNavbar = apply`${textBase} ${transitionText} hover:text-2xl font-cursive`

export const formInput = apply`mt-3 py-3 px-2 w-full shadow-md border-1`
export const formSubmitButton = apply`mx-3 py-3 px-8 shadow-md border(1 gray-600) rounded ${transitionBox}`
