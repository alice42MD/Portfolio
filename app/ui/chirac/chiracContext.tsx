"use client"
import React, { createContext, ReactNode, useState } from "react"
import Chirac from "./chirac"

type ChiracContext = {
  showAlert: (show: boolean) => void
}

export const ChiracContext = createContext<ChiracContext>({
  showAlert: (_show: boolean) => {},
})

type AlertContextProvider = {
  children: ReactNode
}

export const ChiracProvider: React.FC<AlertContextProvider> = ({
  children,
}) => {
  const [chirac, setChirac] = useState(false)

  const contextValue: ChiracContext = {
    showAlert: (show) => {
      setChirac(show)
    },
  }

  return (
    <ChiracContext.Provider value={contextValue}>
      {chirac ? <Chirac /> : children}
    </ChiracContext.Provider>
  )
}
