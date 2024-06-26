import SearchBar from "@/components/SearchBar/SearchBar";

export default function HomePageMainSection() {
  return (
    <main className="container-fluid">
      <div className="row align-items-center">
        <div className="col text-white">
          <p>bring ideas</p>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col">
          <SearchBar />
        </div>
        <div className="col text-white">
          <p>building insights</p>
        </div>
      </div>
    </main>
  );
}
