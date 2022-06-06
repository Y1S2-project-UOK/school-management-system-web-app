import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
<div className=" w-full">
        <div className="lg:grid lg:grid-cols-2">
            <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                    <span className="block">BE A PART OF THE KNOWLEDGE SOCIETY WITH A OUR SCHOOL</span>
                </h2>
                <p className="text-gray-300 mt-5">
                Welcome to the official website of the Bachelor of Information Technology; The aim of our website is to provide you with comprehensive information on our school and to guide you throughout the programme.
                </p>
                <div className="inline-block shadow mt-5">
                    <NavLink to={"/announcements"} className="inline-block py-3 px-4 bg-white hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-md">View Announcements</NavLink>
                </div>
            </div>
            <div className="lg:relative lg:mt-16">
                <img className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md" src="https://images.unsplash.com/photo-1584697964328-b1e7f63dca95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Woman workcation on the beach"/>
            </div>
        </div>
    </div>
  );
}
