"use client"
import React, { ReactNode, createContext, useEffect, useState } from "react"
import Alert from "./alert"

type AlertType = "Success" | "Error" | "Warning"

type Alert = {
  type: AlertType
  message: string
}

type AlertContext = {
  showAlert: (type: AlertType, message: string) => void
}

type AlertContextProvider = {
  children: ReactNode
}

export const AlertContext = createContext<AlertContext>({
  showAlert: () => {},
})

export const AlertProvider: React.FC<AlertContextProvider> = ({ children }) => {
  const [alertMessages, setAlertMessages] = useState<Alert[]>([])
  const hideAlert = (index: number) => {
    setAlertMessages((prev) => prev.filter((_, i) => i !== index))
  }

  const contextValue: AlertContext = {
    showAlert: (type, message) => {
      const alertMessage: Alert = {
        type,
        message,
      }
      setAlertMessages((prev) => [...prev, alertMessage])
    },
  }

  return (
    <AlertContext.Provider value={contextValue}>
      {alertMessages.map((alert, index) => (
        <Alert
          message={alert.message}
          type={alert.type}
          key={index}
          onClose={() => hideAlert(index)}
        />
      ))}
      {children}
    </AlertContext.Provider>
  )
}
