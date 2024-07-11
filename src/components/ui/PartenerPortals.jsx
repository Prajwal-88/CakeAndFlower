
import { Partner_Portals } from "../../data";
const PartenerPortals = () => {
  return (
    <div className="w-full px-2 mx-auto">
      {/* w-full px-2 mx-auto */}
      <h1>OUR PATERNER PORTALS</h1>
      <div className="pt-2">
        <hr className="w-1/2 bg-slate-900 h-[3px]" />
        <hr className="w-full bg-slate-800 h-[1px]" />
      </div>
      <div>
        <div className="grid place-items-center grid-cols-2 md:grid-cols-3 gap-2 mt-4 py-7">
          {Partner_Portals.map((partner) => (
            <div
              key={partner.id}
              className="border-[1px] border-amber-200 overflow-hidden m-[1px] hover:border-orange-600 hover:scale-95 transition-all"
            >
              <img src={partner.poster} className="min-w-[150px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartenerPortals;