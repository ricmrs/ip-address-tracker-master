import { MutableRefObject } from "react";

export function validateIPInput(inputValue: string, ref: MutableRefObject<HTMLInputElement | undefined>){
  const IPPattern = new RegExp("\\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b", "gm")
  const refClassList = ref.current?.classList
  const test = IPPattern.test(inputValue)
  test ? refClassList?.remove('error') : refClassList?.add('error')
  return test
}