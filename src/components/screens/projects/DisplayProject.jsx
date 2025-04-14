"use client";
import { projects } from "@/assets/data/projects";
import Flex from "@/components/resuseable/Flex";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const DisplayProject = () => {
  return (
    <PhotoProvider>
      <Flex className="gap-4 flex-wrap justify-between">
        {projects.map((project, i) => (
          <div className=" w-full md:w-[48%] lg:w-[30%] group mb-10 " key={i}>
            <PhotoView key={i} src={project.thumb}>
              <img
                className=" cursor-pointer w-full  h-[250px] object-cover grayscale duration-200 ease-in-out group-hover:grayscale-0"
                src={project.thumb}
                alt={project.title}
              />
            </PhotoView>

            <div className="  py-2">
              <h2 className=" uppercase font-bold text-2xl  2xl:text-3xl text-white">
                {project.title}
              </h2>

              {/* <h3 className=" capitalize font-medium text-base lg:text-lg text-white">
            {member.role}
          </h3> */}
            </div>
          </div>
        ))}
      </Flex>
    </PhotoProvider>
  );
};

export default DisplayProject;
