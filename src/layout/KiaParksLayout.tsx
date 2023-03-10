import React from 'react'
import { FooterV2, Header } from '../components'

export const KiaParksLayout = ( { children }:any, lang?:string) => {

  console.log('Header lang::', children);

  return (
    <>
        { children }
    </>
  )
}
