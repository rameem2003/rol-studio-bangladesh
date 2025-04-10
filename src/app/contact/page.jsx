import React from "react";
import Container from "@/components/resuseable/Container";
// react icons
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const page = () => {
  return (
    <main className=" py-[80px] xl:py-[180px]">
      <Container>
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-[35px] boxShadow rounded-xl relative">
          <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] top-[450px] left-0 absolute z-[-1]"></div>
          <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] bottom-5  right-0 absolute z-[-1]"></div>
          <aside className="w-full bg-[#0078FF] flex flex-col justify-between p-[25px] rounded-md">
            <div>
              <h1 className="text-[2rem] font-[600] leading-[35px] text-white">
                GET IN TOUCH
              </h1>
              <p className="text-[0.9rem] mt-3 mb-8 text-white">
                Let's have a conversation about your project
              </p>
            </div>

            <div className="flex flex-col gap-[20px] text-gray-300">
              <p className="flex items-center gap-[8px]">
                <MdOutlineCall />
                +8801409029641
              </p>
              <p className="flex items-center break-all gap-[8px]">
                <MdOutlineEmail />
                info.rolstudio.bd@gmail.com
              </p>
              <p className="flex items-center gap-[8px]">
                <IoLocationOutline />
                Benaroshi Polli, Mirpur - 10, Dhaka, Bangladesh
              </p>
            </div>

            <div className="flex gap-[15px] flex-wrap text-black mt-8">
              <a
                href="https://www.facebook.com/rolstudiobangladesh"
                target="_blank"
                className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-background text-white hover:bg-white hover:text-background transition-all duration-300  boxShadow"
              >
                <CgFacebook />
              </a>

              <a
                href="https://github.com/rameem2003"
                target="_blank"
                className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-background text-white hover:bg-white hover:text-background transition-all duration-300  boxShadow"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmood-hassan-rameem"
                target="_blank"
                className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-background text-white hover:bg-white hover:text-background transition-all duration-300 boxShadow"
              >
                <BsLinkedin />
              </a>
            </div>
          </aside>

          {/* form area */}
          <form className="pt-[20px]">
            <div className="flex flex-col sm:flex-row items-center gap-[30px]">
              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <label className="text-[1rem] text-white">First Name</label>
                <input
                  type="text"
                  className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <label className="text-[1rem] text-white">Last Name</label>
                <input
                  type="text"
                  className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <label className="text-[1rem] text-white">Email Address</label>
                <input
                  type="email"
                  className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <label className="text-[1rem] text-white">Phone Number</label>
                <input
                  type="number"
                  className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[5px] w-full mt-10">
              <label className="text-[1rem] text-white">Write Message</label>
              <textarea className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-[#3B9DF8] duration-300"></textarea>
            </div>

            <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
              <button
                type="submit"
                className="dark:border-slate-700 py-2.5 px-6 bg-[#0078FF] cursor-pointer text-white rounded-md text-[1rem] mt-[10px] w-max"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </Container>
    </main>
  );
};

export default page;
