"use client"
import { Geist, Geist_Mono ,Aref_Ruqaa } from "next/font/google";
import "./globals.css";
import NavBar from "./_component/navBar/NavBar";
import Fotter from "./_component/fotter/Fotter";
import { Provider } from "react-redux";
import store from "./redux/store";

const arefRuqaa = Aref_Ruqaa({
  variable: "--font-aref-ruqaa",
  subsets: ["arabic"],
  weight: "400", 
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${arefRuqaa.variable} ${geistSans.variable} ${geistMono.variable}`}>
      

<body >
 <div className=" pb-10">
        <NavBar/>

 </div>
<Provider store={store}>

          {children}
</Provider>

        <Fotter/>
      </body>
    </html>
  );
}
