/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VfsVhh4Kceh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import {
  Slider,
  // SliderTrack,
  // SliderRange,
  // SliderThumb,
} from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function AskAI() {
  const [batteryValue, setBatteryValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  return (
    <div className="ml-5 grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
      <div className="flex flex-col gap-6 w-[70%] h-[500px]">
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Battery</h3>
          <Slider
            defaultValue={[batteryValue]}
            max={100}
            step={1}
            onValueChange={(value) => setBatteryValue(value)}
          >
            <div>
              <div />
            </div>
            <div>
              <div className="text-sm font-medium">
                {Math.round(batteryValue)}%
              </div>
            </div>
          </Slider>
          <p className="text-sm text-muted-foreground">
            {Math.round(batteryValue)}%
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Range</h3>
          <Slider
            defaultValue={[rangeValue]}
            max={100}
            step={1}
            onValueChange={(value) => setRangeValue(value)}
          >
            <div>
              <div />
            </div>
            <div>
              <div className="text-sm font-medium">
                {Math.round(rangeValue)}%
              </div>
            </div>
          </Slider>
          <p className="text-sm text-muted-foreground">
            {Math.round(rangeValue)}%
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Price</h3>
          <Slider
            defaultValue={[priceValue]}
            max={100}
            step={1}
            onValueChange={(value) => setPriceValue(value)}
          >
            <div>
              <div />
            </div>
            <div>
              <div className="text-sm font-medium">
                {Math.round(priceValue)}%
              </div>
            </div>
          </Slider>
          <p className="text-sm text-muted-foreground">
            {Math.round(priceValue)}%
          </p>
        </div>
        <Button className="w-full">Suggest me a bike</Button>
        <p className="text-sm text-muted-foreground">
          These parameters are based on preferences and are not actual values.
        </p>
      </div>
      <div className="grid gap-6 md:gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <img
              src="/placeholder.svg"
              alt="Electric Scooter 1"
              width={300}
              height={300}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Razor E300</h3>
              <p className="text-sm text-muted-foreground">$299</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <img
              src="/placeholder.svg"
              alt="Electric Scooter 2"
              width={300}
              height={300}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Segway Ninebot</h3>
              <p className="text-sm text-muted-foreground">$499</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <img
              src="/placeholder.svg"
              alt="Electric Scooter 3"
              width={300}
              height={300}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Xiaomi Mi Pro 2</h3>
              <p className="text-sm text-muted-foreground">$599</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <img
              src="/placeholder.svg"
              alt="Electric Scooter 4"
              width={300}
              height={300}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Gotrax G4</h3>
              <p className="text-sm text-muted-foreground">$399</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
