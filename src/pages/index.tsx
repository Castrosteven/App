import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";
import { Layout } from "../components/Layout";
import { MainSearchBox } from "../components/MainSearchBox";
import { UseEvents } from "../context/UseEvents";
import { groupBy } from "lodash";

const Home: NextPage = () => {
  const { results } = UseEvents();

  const data = [
    {
      eventType: "Outdoor",
      eventName: "Hiking",
    },
    {
      eventType: "Outdoor",
      eventName: "Hiking",
    },
    {
      eventType: "Outdoor",
      eventName: "Hiking",
    },
    {
      eventType: "Music",
      eventName: "Hiking",
    },
    {
      eventType: "Food",
      eventName: "Hiking",
    },
    {
      eventType: "Drawing",
      eventName: "Hiking",
    },
  ];

  const groupedByEvents = groupBy(data, "eventType");
  console.log(groupedByEvents);

  return (
    <Layout>
      <MainSearchBox />
      <div className="flex items-center justify-center h-full">
        <div className="p-5 w-full ">
          {Object.values(groupedByEvents).map((item) => {
            return (
              <div className="  container mx-auto">
                <span className="text-2xl font-bold">{item[0].eventType}</span>
                <div className="grid grid-cols-4 w-full container mx-auto gap-5 p-5">
                  {item.map((event) => (
                    <EventCard />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
