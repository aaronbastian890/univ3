"use client"
import Image from "next/image";
import Universal from "@/components/Universal/Universal";
import { useEffect, useState } from "react";
export default function Home() {

  // getGeoInfo = () => {
  //   axios.get('https://ipapi.co/json/').then((response) => {
  //       let data = response.data;
  //       this.setState({
  //           countryName: data.country_name,
  //           countryCode: data.country_calling_code
  //       });
  //   }).catch((error) => {
  //       console.log(error);
  //   });
  // };

  return (
    <div className="App">
     <Universal />
    </div>
  );
}
