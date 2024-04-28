import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const classes = [
  {
    title: "Ethical Hacking",
    time: "12:35 pm",
  },
  {
    title: "Cryptography",
    time: "1:05 pm",
  },
  {
    title: "DBMS",
    time: "1:55 pm",
  },
];

const Classes = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="md:mb-16 mt-10 flex justify-between">
        <div className="flex flex-col gap-y-16  w-full items-center">
          <div className="w-[70%] rounded-xl p-6 shadow-xl shadow-black/30">
            <h3 className="font-bold mb-4">Current Classes</h3>
            <Separator className="my-4 bg-green-200" />
            <div className="bg-green-200 py-3 rounded-md px-6 flex-wrap flex items-center justify-between">
              <p className="">Software Engineering</p>
              <Button className="w-fit px-4">Attend Class</Button>
            </div>
          </div>

          <div className="shadow-xl shadow-black/40 w-[70%] rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-8">Upcoming Classes</h3>
            <Separator className="my-4 bg-green-200" />

            {classes.map((classItem, index) => {
              return (
                <div
                  key={index}
                  className="bg-green-200 py-3 rounded-md px-6 flex-wrap flex items-center justify-between mt-4"
                >
                  <p className="">{classItem.title}</p>
                  <Button disabled={true} className="w-20">
                    {classItem.time}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Classes;
