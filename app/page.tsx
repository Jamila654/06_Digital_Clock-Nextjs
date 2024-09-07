"use client"
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [time, setTime] = useState({
    hours: "12",
    minutes: "00",
    seconds: "00",
  });
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      if (!is24HourFormat) {
        hours = hours % 12 || 12;
      }

      setTime({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, [is24HourFormat]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-600">
      <div className="clock_container">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center">
              Dynamic Digital <span className="text-blue-500">Clock</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-around">
            <Card className="flex flex-col text-center pt-2 sm:pt-4 rounded-none bg-slate-400 w-[30%]">
              <CardContent>
                <p className="text-xl sm:text-5xl font-bold">{time.hours}</p>
                <p className="text-md sm:text-xl">Hours</p>
              </CardContent>
            </Card>
            <p className="text-xl sm:text-5xl font-bold">:</p>
            <Card className="flex flex-col text-center pt-2 sm:pt-4 rounded-none bg-gray-400 w-[30%]">
              <CardContent>
                <p className="text-xl sm:text-5xl font-bold">{time.minutes}</p>
                <p className="text-md sm:text-xl">Minutes</p>
              </CardContent>
            </Card>
            <p className="text-xl sm:text-5xl font-bold">:</p>
            <Card className="flex flex-col text-center pt-2 sm:pt-4 rounded-none bg-zinc-400 w-[30%]">
              <CardContent>
                <p className="text-xl sm:text-5xl font-bold">{time.seconds}</p>
                <p className="text-md sm:text-xl">Seconds</p>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter className="flex justify-around">
            <Button onClick={() => setIs24HourFormat(true)}>24 Hours Format</Button>
            <Button onClick={() => setIs24HourFormat(false)}>12 Hours Format</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

