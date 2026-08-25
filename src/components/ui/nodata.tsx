import Image from "next/image";

const Nodata = ({ height = 10 }: { height?: number }) => {
  return (
    <div className="flex h-50 items-center justify-center">
      <div className="flex flex-col items-center">
        <Image
          src="/no-data.gif"
          height="100"
          width="100"
          alt="No data"
          className={`w-auto h-${height} object-cover`}
        />
        <span className={`font-semibold`}>No Data</span>
      </div>
    </div>
  );
};

export default Nodata;
