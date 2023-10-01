function ListBar() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-evenly items-center p-2 w-4/6 border shadow-md h-14 bg-gray-400 hover:bg">
          <div className="text-lg font-bold ml-5 w-28">Başlık</div>
          <div className="text-lg font-bold w-6/12">Açıklama</div>
          <div className="text-lg font-bold ml-6 w-2/12 ">Bitiş Tarihi</div>
          <div className="text-lg font-bold mr-20  w-1/12">İşlemler</div>
        </div>
      </div>
    </>
  );
}
export default ListBar;
