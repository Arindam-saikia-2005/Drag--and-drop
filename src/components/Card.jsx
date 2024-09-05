import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.3}
      dragTransition={{bounceStiffness: 100, bounceDamping : 30}}
      className=" cursor-pointer relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibolds">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-4 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <HiDownload size=".9em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tags w-full py-4 ${
              data.tag.tagColor === "bule" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <p className="text-sm font-semibold">{data.tag.tagTitle}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
