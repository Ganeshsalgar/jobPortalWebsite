import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jodId = "lnaljnfalkjndlajsndflajndlfkjn";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-400">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" clasName="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" clasName="p-6" size="icon">
          <Avatar>
            <AvatarImage src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">JOB title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          enim amet impedit velit! Voluptatum quidem mollitia, perferendis iure
          repudiandae corrupti!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
          {" "}
          12 Position
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant={"ghost"}>
          Part Time
        </Badge>
        <Badge className={" text-[#7209B7] font-bold"} variant={"ghost"}>
          {" "}
          24LPA{" "}
        </Badge>
      </div>
      <div
        className="flex items-center gap-4
       mt-4"
      >
        <Button
          onClick={() => navigate(`/description/${jodId}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button>Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
