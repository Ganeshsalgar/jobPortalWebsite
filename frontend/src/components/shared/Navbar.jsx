import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {

  const {user} = useSelector(store => store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () =>{
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout` ,{withCredentials:true});

      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      
      
    }
  }
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/jobs'}>Jobs</Link>
            </li>
            <li>
              <Link to={'/browse'}>Browse</Link>
            </li>
            {/* <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li> */}
          </ul>
          {!user ? (
            <div className="flex items-center gap-5">
              <Link to="/login">
                <Button variant="outline" className="bg-gray-300">
                  LogIn
                </Button>
              </Link>
              <Link to="/signup">
                <Button>SignUp</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-1 ">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 children="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foregroundted">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600 hover:cursor-pointer border-none">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to={'/profile'}>View Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logOutHandler} variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
