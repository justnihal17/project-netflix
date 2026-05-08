const Header = () => {
  return (
    <div className="flex justify-between px-20 py-5">
      <img
        className="w-40 h-auto object-contain"
        src="./image.png"
        alt=""
      />
      <div className="flex gap-5 py-2">
        <select className="rounded-sm border border-white px-4 text-white">
          <option className="text-black shadow-black"  value="English">English</option>
          <option   className="text-black" value="Hindi">Hindi</option>
        </select>
        <button className="bg-red-700 px-2 rounded-sm text-white hover:bg-red-800">Sign in</button>
      </div>
    </div>
  );
};

export default Header;
